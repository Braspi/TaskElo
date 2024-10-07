import { ClockIcon } from "@heroicons/react/24/solid";

interface Props {
  date: Date;
}

export default function TimeAddon(props: Props) {
  const formattedDate = new Date(props.date).toLocaleString('en-US', { month: "short", day: "numeric" });
  const color = new Date(props.date) < new Date() ? "bg-green-500" : "";
  return (
    <div className={`flex gap-1 justify-center items-center rounded p-1 px-2 ${color}`}>
      <ClockIcon className="size-6" />
      <span>{formattedDate}</span>
    </div>
  );
};
