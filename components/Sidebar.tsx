"use client";

import {
  HomeIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  UsersIcon,
  LifebuoyIcon,
  ArrowLeftOnRectangleIcon,
  FolderOpenIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const boards = [
  { id: "1", name: "Sport XI Project" },
  { id: "2", name: "Delepment React App" },
  { id: "3", name: "Wordpress theme" },
];

type SidebarProps = {
  open?: boolean;
  onClose?: () => void;
};

export default function Sidebar({ open = true, onClose }: SidebarProps) {
  const [boardsOpen, setBoardsOpen] = useState(true);
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-white border-r flex flex-col justify-between py-4 transform transition-transform md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:flex`}
        style={{ minHeight: "100vh" }}
      >
        <div>
          <div className="flex items-center gap-2 px-6 py-2 mb-4">
            <span className="font-bold text-blue-600 text-lg">Board App</span>

            <button
              className="ml-auto md:hidden p-1 rounded hover:bg-gray-100"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <XMarkIcon className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <div
            className="flex items-center gap-2 px-6 py-2 mb-4 bg-gray-100 rounded cursor-pointer"
            title="Select workspace"
          >
            <FolderOpenIcon className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-700 font-semibold">
              Root folder
            </span>
          </div>

          <nav className="flex flex-col gap-1 px-2">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium group"
              title="Dashboard"
            >
              <HomeIcon className="w-5 h-5" />
              Dashboard
            </Link>

            <div>
              <button
                className="flex items-center gap-3 px-4 py-2 w-full rounded-lg text-gray-700 hover:bg-gray-100 font-medium group"
                onClick={() => setBoardsOpen((v) => !v)}
                title="Boards"
              >
                <ClipboardDocumentListIcon className="w-5 h-5" />
                Boards
                <span className="ml-auto">
                  {boardsOpen ? (
                    <ChevronDownIcon className="w-4 h-4" />
                  ) : (
                    <ChevronRightIcon className="w-4 h-4" />
                  )}
                </span>
                <PlusIcon
                  className="w-4 h-4 text-blue-500 ml-2 group-hover:scale-110 transition"
                  title="Create new board"
                />
              </button>
              {boardsOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1">
                  {boards.map((board) => (
                    <Link
                      key={board.id}
                      href="#"
                      className="px-3 py-1 rounded-lg text-gray-600 hover:bg-gray-100 flex items-center gap-2"
                      title={board.name}
                    >
                      <span className="w-2 h-2 rounded-full bg-gray-300" />
                      {board.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium group"
              title="Messages"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              Messages
              <span
                className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5"
                title="3 unread messages"
              >
                3
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium group"
              title="Calendar"
            >
              <CalendarDaysIcon className="w-5 h-5" />
              Calendar
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium group"
              title="Team members"
            >
              <UsersIcon className="w-5 h-5" />
              Team members
            </Link>
          </nav>
        </div>

        <div className="px-6 mt-8 flex flex-col gap-2">
          <button
            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition"
            title="Support"
          >
            <LifebuoyIcon className="w-5 h-5" />
            Support
          </button>
          <button
            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-red-500 font-semibold transition"
            title="Logout"
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
