"use client";

import { ReactNode } from "react";
import { Navbar } from "../organisms";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} House Rental System — All rights reserved.
      </footer>
    </div>
  );
}

