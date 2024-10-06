import { DocumentCheckIcon } from "@heroicons/react/24/solid";
import { TasksModule } from "../../../types";

interface Props {
  module: TasksModule
};

export default function SubpointsAddon(props: Props) {
  return (
    <div className="flex gap-2">
      <DocumentCheckIcon className="size-6" />
      <p>{props.module.tasks.filter(it => it.isDone).length}/{props.module.tasks.length}</p>
    </div>
  );
};
