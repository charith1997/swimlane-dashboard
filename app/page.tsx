"use client";
import { useEffect } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useTasks } from "../store/useTasks";
import StatusColomn from "@/components/StatusColomn";
import SearchBar from "@/components/SearchBar";

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
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Board App Dashboard</h1>
      <SearchBar />
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
