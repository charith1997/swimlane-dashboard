import { useDraggable } from "@dnd-kit/core";
import { Task } from "../store/useTasks";

type Props = {
  task: Task;
};

function getPriorityColor(priority: string) {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-600";
    case "medium":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-green-100 text-green-700";
  }
}

export default function TaskCard({ task }: Props) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: task.id,
    data: { task },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`bg-white rounded-lg shadow p-4 mb-3 border cursor-move transition border-gray-200 ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="text-xs text-gray-400 mb-1">{task.category}</div>
      <div className="font-semibold">{task.title}</div>
      <div className="flex items-center text-xs mt-2 gap-2">
        <span
          className={`px-2 py-0.5 rounded bg-gray-100 ${getPriorityColor(
            task.priority
          )}`}
        >
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </span>
        <span className="text-gray-400">Due: {task.dueDate}</span>
      </div>
    </div>
  );
}
