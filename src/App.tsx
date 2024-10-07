import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalTask from "./componets/modalTask.component";
import Tags from "./componets/tags.component";
import { Task, User } from "../types"
import { groupTasksByTaskGroup } from "./utils/groupTasksByTaskGroup";

async function getData(url: string) {
  try {
    const response = await fetch(url, {
      mode: "cors",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

export default function App() {
  const [data, setData] = useState<Task[][]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData("http://localhost:3000/tasks");
      setData(groupTasksByTaskGroup(result));
    };
    const fetchUsers = async () => {
      const result = await getData("http://localhost:3000/users");
      setUsers(result);
    };

    fetchData();
    fetchUsers();
  }, []);

  return (
    <div className="container m-sm-4">
      <div className="row align-items-start d-flex">
        {data.map((group, i) => (
          <div className="col" key={i}>
            <div className="card">
              <div className="card-header">
                {group[0].taskGroup}
              </div>
              {group.map(task => (
                <div className="card-body border m-sm-4 rounded-2 flex flex-col justify-start">
                  <div className="flex justify-between gap-4">
                    <Tags tags={task.tags} />
                    <div className="flex gap-2">
                      {users.filter(v => task.assignedUsers.includes(v.id)).map(user => {
                        return <img className="rounded-full w-8 h-8" src={user.avatar} alt={user.name} />;
                      })}
                    </div>
                  </div>
                  <p className="my-2">{task.title}</p>
                  <ModalTask {...task} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
