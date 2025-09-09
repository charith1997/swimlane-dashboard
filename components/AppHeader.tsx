"use client";

import { useState } from "react";
import {
  PlusIcon,
  MagnifyingGlassIcon,
  BellIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Button from "./Button";
import SearchBar from "./SearchBar";

type AppHeaderProps = {
  onSidebarToggle?: () => void;
};

export default function AppHeader({ onSidebarToggle }: AppHeaderProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="w-full bg-white flex items-center justify-between px-4 md:px-6 py-3 border-b border-gray-200">
      <Button
        className="md:hidden mr-2 p-2 rounded hover:bg-gray-100"
        onClick={onSidebarToggle}
        label={<Bars3Icon className="w-6 h-6 text-gray-700" />}
      />
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded flex items-center justify-center">
          <Image src="/images/logo.png" alt="Logo" width={200} height={100} />
        </div>
        <span className="font-bold text-gray-900 text-lg">
          Board <span className="text-blue-600">App</span>
        </span>
      </div>

      <div className="flex items-center flex-1 justify-end">
        <Button
          className="hidden sm:flex items-center mr-4 gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition"
          label={
            <div className="flex items-center gap-2">
              Create new board
              <PlusIcon className="w-5 h-5" />
            </div>
          }
          onClick={() => setShowModal(true)}
        />

        {showModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
              <h2 className="text-lg font-bold mb-4">Create New Board</h2>
              <input
                className="w-full border rounded px-3 py-2 mb-4"
                placeholder="Board name"
                value=""
                onChange={() => {}}
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <Button
                  className="px-4 py-2 rounded bg-gray-200"
                  onClick={() => setShowModal(false)}
                  label="Cancel"
                />
                <Button
                  className="px-4 py-2 rounded bg-blue-600 text-white"
                  label="Create"
                />
              </div>
            </div>
          </div>
        )}

        <div className="relative hidden sm:block">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <SearchBar />
        </div>

        <Button
          className="p-2 rounded-full hover:bg-gray-100 transition hidden sm:inline-flex"
          label={
            <Image
              src="/images/settings.png"
              alt="Settings"
              width={20}
              height={20}
            />
          }
        />

        <div className="relative hidden sm:inline-flex">
          <Button
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
            label={
              <>
                <BellIcon className="w-5 h-5 text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
              </>
            }
          />
        </div>

        <Button
          className="ml-2 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition inline-flex"
          label={
            <Image src="/images/avatar.png" alt="Logo" width={30} height={30} />
          }
        />
      </div>
    </header>
  );
}
