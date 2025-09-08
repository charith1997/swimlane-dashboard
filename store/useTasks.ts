import { create } from "zustand";

export type Task = {
  id: string;
  title: string;
  status: "todo" | "inprogress" | "approved" | "reject";
  category: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
};

type TaskStore = {
  tasks: Task[];
  search: string;
  setSearch: (query: string) => void;
  setTasks: (tasks: Task[]) => void;
  moveTask: (id: string, newStatus: Task["status"]) => void;
  loadTasks: () => Promise<void>;
};

const TASKS_STORAGE_KEY = "tasks";

export const useTasks = create<TaskStore>((set, get) => ({
  tasks: [],
  search: "",
  setSearch: (query) => set({ search: query }),
  setTasks: (tasks) => {
    set({ tasks });
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  },
  moveTask: (id, newStatus) => {
    const updated = get().tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    set({ tasks: updated });
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(updated));
  },
  loadTasks: async () => {
    const stored = localStorage.getItem(TASKS_STORAGE_KEY);
    if (stored) {
      set({ tasks: JSON.parse(stored) });
      return;
    }
    const res = await fetch("/data/tasks.json");
    const data = await res.json();
    set({ tasks: data });
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(data));
  },
}));
