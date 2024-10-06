import { ClockIcon } from "@heroicons/react/24/solid";

interface Props {
  date: Date;
}

export default function TimeAddon(props: Props) {
  const formattedDate = new Date(props.date).toLocaleString('en-US', { month: "short", day: "numeric" });
  return (
    <div className="flex gap-2">
      <ClockIcon className="size-6" />
      <p>{formattedDate}</p>
    </div>
  );
};
