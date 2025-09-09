"use client";

import AppHeader from "@/components/AppHeader";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <AppHeader onSidebarToggle={() => setSidebarOpen(true)} />
        <div className="flex">
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main
            className="flex-1 overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 65px)" }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
