import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import { Task } from "../store/useTasks";

type Props = {
  title: string;
  status: Task["status"];
  tasks: Task[];
};

export default function StatusColomn({ title, status, tasks }: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 min-w-[90vw] md:min-w-[250px] bg-gray-50 rounded p-3 mx-0 md:mx-2 mb-4 md:mb-0 transition ${
        isOver ? "ring-2 ring-blue-400" : ""
      }`}
    >
      <div className="font-bold mb-2">{title}</div>
      {tasks.length === 0 && (
        <div className="text-gray-400 text-sm">No tasks</div>
      )}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
