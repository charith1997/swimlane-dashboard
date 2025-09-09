import { useState } from "react";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useTasks, Task } from "../store/useTasks";
import Button from "./Button";

type Props = {
  status: Task["status"];
  onClose: () => void;
};

export default function NewTask({ status, onClose }: Props) {
  const setTasks = useTasks((s) => s.setTasks);
  const tasks = useTasks((s) => s.tasks);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      status,
      category,
      priority,
      dueDate,
    };
    setTasks([...tasks, newTask]);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 bg-white/70 backdrop-blur-sm"
      style={{ animation: "fadeIn 0.3s" }}
    >
      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm border border-gray-100 animate-fadeIn"
      >
        <Button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          label={<XMarkIcon className="w-6 h-6" />}
        />

        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-bold text-blue-600">Add Task</h2>
        </div>
        <input
          className="w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <select
          className="w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
          value={priority}
          onChange={(e) => setPriority(e.target.value as any)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          className="w-full border rounded px-3 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-200"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <Button
            className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 w-20"
            onClick={onClose}
            label="Cancel"
          />
          <Button
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 w-20"
            label="Add"
          />
        </div>
      </form>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
