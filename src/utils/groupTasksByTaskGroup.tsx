import { Task } from "../../types";

export function groupTasksByTaskGroup(tasks: Task[]): Task[][] {
  const grouped = tasks.reduce<Record<string, Task[]>>((acc, task) => {
    (acc[task.taskGroup] ||= []).push(task);
    return acc;
  }, {});

  return Object.values(grouped);
}
