"use client";
import { useEffect } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useTasks } from "../store/useTasks";
import StatusColomn from "@/components/StatusColomn";
import Image from "next/image";
import { MagnifyingGlassIcon, PencilIcon } from "@heroicons/react/24/outline";

const STATUS = [
  { key: "todo", label: "To Do" },
  { key: "inprogress", label: "In Progress" },
  { key: "approved", label: "Approved" },
  { key: "reject", label: "Reject" },
] as const;

export default function Home() {
  const loadTasks = useTasks((s) => s.loadTasks);
  const tasks = useTasks((s) => s.tasks);
  const search = useTasks((s) => s.search);
  const moveTask = useTasks((s) => s.moveTask);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.data.current?.task) {
      const newStatus = over.id as string;
      if (active.data.current.task.status !== newStatus) {
        moveTask(active.id as string, newStatus as any);
      }
    }
  };

  const filteredTasks = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-6 bg-gray-100">
      <div className="flex items-center mb-2 gap-4">
        <h1 className="text-2xl font-bold">Sport XI Project</h1>
        <span className="text-sm text-gray-500 bg-amber-400 px-1 rounded">
          In progress
        </span>
      </div>
      <h6 className=" text-gray-500 mb-2">event production</h6>
      <div className="flex items-center gap-4 mb-4 border-b border-gray-300 pb-4">
        <h6 className=" text-gray-500">assigned</h6>
        <Image src="/images/team.png" alt="Settings" width={70} height={70} />
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Manage"
            value=""
            onChange={() => {}}
            className="px-4 py-1 rounded-xl bg-gray-100 text-sm outline-none w-28 focus:bg-white border border-gray-300 focus:border-blue-300 transition"
          />
          <PencilIcon className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col md:flex-row gap-4 overflow-x-auto">
          {STATUS.map((col) => (
            <StatusColomn
              key={col.key}
              title={col.label}
              status={col.key}
              tasks={filteredTasks.filter((t) => t.status === col.key)}
            />
          ))}
        </div>
      </DndContext>
    </main>
  );
}
