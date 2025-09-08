import { useTasks } from "../store/useTasks";

export default function SearchBar() {
  const search = useTasks((s) => s.search);
  const setSearch = useTasks((s) => s.setSearch);

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full max-w-md px-3 py-2 border rounded mb-6"
    />
  );
}
