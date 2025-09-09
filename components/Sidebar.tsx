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
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const boards = [
  { id: "1", name: "Create routes" },
  { id: "2", name: "Delepment React App" },
  { id: "3", name: "Sport XI Project" },
  { id: "4", name: "Wordpress theme" },
];

type SidebarProps = {
  open?: boolean;
  onClose?: () => void;
};

export default function Sidebar({ open = true, onClose }: SidebarProps) {
  const [workspaceOpen, setWorkspaceOpen] = useState(true);
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
      />
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col justify-between py-4 transform transition-transform md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:flex h-[100vh] md:h-[calc(100vh-65px)]`}
      >
        <div>
          <div className="flex items-center gap-2 px-2 py-2 mb-4">
            <Button
              className="flex items-center gap-3 p-2 w-full rounded text-gray-700 hover:bg-gray-100 font-medium group border border-gray-300"
              onClick={() => setWorkspaceOpen((v) => !v)}
              label={
                <>
                  <Image
                    src="/images/avatar.png"
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col">
                    <div className="text-gray-400">workspace</div>
                    <div className="font-bold">Root folder</div>
                  </div>
                  <span className="ml-auto">
                    {workspaceOpen ? (
                      <ChevronDownIcon className="w-4 h-4" />
                    ) : (
                      <ChevronRightIcon className="w-4 h-4" />
                    )}
                  </span>
                </>
              }
            />

            <Button
              className="ml-auto md:hidden p-1 rounded hover:bg-gray-100"
              onClick={onClose}
              label={<XMarkIcon className="w-6 h-6 text-gray-500" />}
            />
          </div>

          <nav className="flex flex-col gap-1 px-2">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium group"
            >
              <Squares2X2Icon className="w-5 h-5" />
              Dashboard
            </Link>

            <div>
              <Button
                className={`flex items-center gap-3 px-4 py-2 w-full rounded-lg hover:bg-gray-100 font-medium group border border-gray-300 ${
                  boardsOpen ? "text-blue-600" : "text-gray-700"
                }`}
                onClick={() => setBoardsOpen((v) => !v)}
                label={
                  <>
                    <FolderOpenIcon
                      className={`w-5 h-5 ${
                        boardsOpen ? "text-blue-600" : "text-gray-500"
                      }`}
                    />
                    Boards
                    <span className="ml-auto">
                      {boardsOpen ? (
                        <ChevronDownIcon className="w-4 h-4" />
                      ) : (
                        <ChevronRightIcon className="w-4 h-4" />
                      )}
                    </span>
                  </>
                }
              />
              {boardsOpen && (
                <div className="mt-1 flex flex-col gap-1 border border-gray-300 rounded text-sm">
                  {boards.map((board) => (
                    <Link
                      key={board.id}
                      href="#"
                      className={`px-3 py-1 rounded-lg  hover:bg-gray-100 flex items-center gap-2 font-medium ${
                        board.id === "3" ? "text-blue-600" : "text-gray-600"
                      }`}
                    >
                      <ChevronRightIcon className="w-4 h-4" />
                      {board.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium group"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              Messages
              <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                3
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium group"
            >
              <CalendarDaysIcon className="w-5 h-5" />
              Calendar
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium group"
            >
              <UsersIcon className="w-5 h-5" />
              Team members
            </Link>
          </nav>
        </div>

        <div className="px-6 mt-8 flex flex-col gap-2">
          <Button
            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition"
            label={
              <>
                <LifebuoyIcon className="w-5 h-5" />
                Support
              </>
            }
          />
          <Button
            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-red-500 font-semibold transition"
            label={
              <>
                <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                Logout
              </>
            }
          />
        </div>
      </aside>
    </>
  );
}
