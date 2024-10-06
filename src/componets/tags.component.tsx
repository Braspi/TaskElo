import { Tag } from "../../types";

interface Props {
  tags: Tag[]
}

export default function Tags({ tags }: Props) {
  return (
    <div className="flex gap-2 text-sm">
      {tags.map(tag => (
        <div className="text-black p-1 px-2 rounded-md" style={{ "backgroundColor": tag.color }}>{tag.name}</div>
      ))}
    </div>
  );
};
