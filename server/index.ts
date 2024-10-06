import express from "express";
import fs from "node:fs";
import { Module, Task } from "../types";

const app = express();
const port = 3000;

try {
  ["./data/users.json", "./data/tasks.json"].forEach((file, i) => {
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, "[]");
      console.log(`Created ${file}`);
    }
  });
} catch (err) {
  console.error(`Failed creating db files: ${err}`);
  process.exit(1);
}

app.get("/", (req, res) => {
  res.send("Hello :D");
});

app.get("/users", (req, res) => {
  try {
    const data = fs.readFileSync("./data/users.json", 'utf8');
    res.json(JSON.parse(data));
  } catch (e) {
    res.json({ message: "Failed to read file", code: 500 });
  }
});

app.get("/tasks", (req, res) => {
  console.log("ja pierdole");
  try {
    const data = fs.readFileSync("./data/tasks.json", 'utf8');
    res.json(JSON.parse(data));
  } catch (e) {
    res.json({ message: "Failed to read file", code: 500 });
  }
});

app.listen(port, () => {
  console.log(`Server is running at :${port}`);
});

let task: Task[] = [
  {
    title: "Plan marketing campaingn",
    taskGroup: "Upcoming",
    tags: [
      { name: "Marketing", color: "#FF9E1C" },
    ],
    duedate: new Date("2024-09-20"),
    assignedUsers: [1, 2],
    modules: [
      new Module("TextModule", { text: "lorem ipsum" }),
      new Module("TasksModule", {
        tasks: [
          { title: "Task 1", description: "lorem ipsum", isDone: false },
          { title: "Task 2", description: "lorem ipsum", isDone: false },
          { title: "Task 3", description: "lorem ipsum", isDone: false }
        ]
      })
    ]
  },
  {
    title: "Approve legal agreement",
    taskGroup: "Upcoming",
    tags: [
      { name: "Legal", color: "#53E897" },
    ],
    duedate: null,
    assignedUsers: [1, 2],
    modules: [
      new Module("TextModule", { text: "lorem ipsum" }),
    ]
  },
  {
    title: "Schedule recurring client meeting",
    taskGroup: "Upcoming",
    tags: [
      { name: "Marketing", color: "#FF9E1C" },
    ],
    duedate: null,
    assignedUsers: [1, 2],
    modules: [
      new Module("TextModule", { text: "lorem ipsum" }),
      new Module("AttachmentModule", { name: "File", filePath: "" }),
    ]
  },

  {
    title: "Collect design assets",
    taskGroup: "In Progress",
    tags: [
      { name: "External", color: "#F0D804" },
      { name: "Design", color: "#04C1DF" },
    ],
    duedate: null,
    assignedUsers: [1, 2],
    modules: [
      new Module("TextModule", { text: "lorem ipsum" }),
    ]
  },

  {
    title: "Collect design assets",
    taskGroup: "Done",
    tags: [
      { name: "External", color: "#F0D804" },
      { name: "Design", color: "#04C1DF" },
    ],
    duedate: null,
    assignedUsers: [1, 2],
    modules: [
      new Module("TextModule", { text: "lorem ipsum" }),
    ]
  },
]
console.log(JSON.stringify(task));
