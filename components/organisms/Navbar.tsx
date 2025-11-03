"use client";

import React from "react";
import Link from "next/link";
import { Text } from "../atoms";

const Navbar: React.FC = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Listings", href: "/listings" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-8 py-4 flex justify-between items-center">
      {  }
      <Text>
        <span className="text-blue-600 font-bold text-xl">House Rental</span>
      </Text>

      <div className="flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
