import { useTasks } from "../store/useTasks";

export default function SearchBar() {
  const search = useTasks((s) => s.search);
  const setSearch = useTasks((s) => s.setSearch);

  return (
    <input
      type="text"
      placeholder="Search tasks ..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-sm outline-none w-56 focus:bg-white border border-transparent focus:border-blue-300 transition"
    />
  );
}
