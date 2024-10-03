import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalTask from "./componets/modalTask";
import Tags from "./componets/tags";


function App() {
    const [data, setData] = useState<string[]>([])
    useEffect(() => {
        setData(["Upcoming", "In Progress", "Done"])
    }, [])
  return (
      <div className="container m-sm-4">
        <div className="row align-items-start d-flex">
            {data.map(it => (
            <div className="col">
              <div className="card">
                      <div className="card-header">
                          {it}
                      </div>
                  <div className="card-body border m-sm-4 rounded-2 flex flex-col justify-start">
                      <Tags/>
                      <p className="my-2">Plan marketing campaign</p>
                      <ModalTask/>
                  </div>
              </div>
            </div>
            ))}
        </div>
      </div>
  );
}

export default App;
