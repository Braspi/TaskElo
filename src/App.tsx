import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalTask from "./componets/modalTask.component";
import Tags from "./componets/tags.component";
import { Task } from "../types"

function groupTasksByTaskGroup(tasks: Task[]): Task[][] {
  const grouped = tasks.reduce((acc: { [key: string]: Task[] }, task) => {
    if (!acc[task.taskGroup]) {
      acc[task.taskGroup] = [];  // Initialize a new group if it doesn't exist
    }
    acc[task.taskGroup].push(task);  // Add task to the respective group
    return acc;
  }, {});

  // Convert the object with task groups into an array of arrays
  return Object.values(grouped);
}

async function getData() {
  try {
    const response = await fetch("http://localhost:3000/tasks");
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

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(groupTasksByTaskGroup(result));
    };

    fetchData();
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
                  <Tags tags={task.tags} />
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
