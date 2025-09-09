import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import { Task } from "../store/useTasks";
import { useState } from "react";
import NewTask from "./NewTask";
import Button from "./Button";

type Props = {
  title: string;
  status: Task["status"];
  tasks: Task[];
};

const statusColors: Record<string, string> = {
  todo: "bg-gray-200 text-gray-700",
  inprogress: "bg-yellow-200 text-yellow-800",
  approved: "bg-green-200 text-green-800",
  reject: "bg-red-200 text-red-800",
};

export default function StatusColomn({ title, status, tasks }: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 min-w-[90vw] md:min-w-[250px] bg-gray-50 rounded p-3 mx-0 md:mx-2 mb-4 md:mb-0 transition ${
        isOver ? "ring-2 ring-blue-400" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div
          className={`font-bold px-2 py-1 rounded-lg ${statusColors[status]}`}
        >
          {title}
        </div>
        <Button
          className="w-6 h-6 flex  justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => setShowModal(true)}
          label="+"
        />
      </div>
      {tasks.length === 0 && (
        <div className="text-gray-400 text-sm">No tasks</div>
      )}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
      {showModal && (
        <NewTask status={status} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
