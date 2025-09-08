"use client";

import { useState } from "react";
import {
  PlusIcon,
  MagnifyingGlassIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function AppHeader() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [newBoardName, setNewBoardName] = useState("");

  return (
    <header className="w-full bg-white flex items-center justify-between px-6 py-3 border-b">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded bg-blue-100 flex items-center justify-center">
          <span className="text-blue-600 font-bold text-lg">▦</span>
        </div>
        <span className="font-bold text-gray-900 text-lg">
          Board <span className="text-blue-600">App</span>
        </span>
      </div>

      <div className="flex items-center gap-4 flex-1 justify-end">
        <button
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition"
          onClick={() => {}}
        >
          Create new board
          <PlusIcon className="w-5 h-5" />
        </button>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
              <h2 className="text-lg font-bold mb-4">Create New Board</h2>
              <input
                className="w-full border rounded px-3 py-2 mb-4"
                placeholder="Board name"
                value={newBoardName}
                onChange={(e) => {}}
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 rounded bg-gray-100"
                  onClick={() => {}}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded bg-blue-600 text-white"
                  onClick={() => {}}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="relative">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search tasks ..."
            value={search}
            onChange={() => {}}
            className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-sm outline-none w-56 focus:bg-white border border-transparent focus:border-blue-300 transition"
          />
        </div>

        <button
          className="p-2 rounded-full hover:bg-gray-100 transition"
          title="Filters"
        >
          <Cog6ToothIcon className="w-5 h-5 text-gray-400" />
        </button>

        <div className="relative">
          <button
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
            title="Notifications"
            onClick={() => {}}
          >
            <BellIcon className="w-5 h-5 text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
              <div className="font-semibold mb-2">Notifications</div>
              <div className="text-sm text-gray-500">No new notifications.</div>
            </div>
          )}
        </div>

        <button
          className="ml-2 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          title="Profile"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-700 font-bold">
            <svg width="24" height="24" fill="none">
              <circle cx="12" cy="12" r="12" fill="#e5e7eb" />
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                fill="#374151"
                fontSize="12"
                fontWeight="bold"
                dy=".3em"
              >
                U
              </text>
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
}
