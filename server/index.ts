import express from "express";
import fs from "node:fs";

const app = express();
const port = 3000;

try {
  ["./data/users.json", "./data/tasks.json"].forEach(file => {
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, "[]");
      console.log(`Created ${file}`);
    }
  });
} catch (err) {
  console.error(`Failed creating db files: ${err}`);
  process.exit(1);
}

app.get("/", (_req, res) => {
  res.send("Hello :D");
});

app.get("/users", (_req, res) => {
  try {
    const data = fs.readFileSync("./data/users.json", 'utf8');
    res.json(JSON.parse(data));
  } catch (e) {
    res.json({ message: "Failed to read file", code: 500 });
  }
});

app.get("/tasks", (_req, res) => {
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
