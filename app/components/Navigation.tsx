"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-50/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="font-medium text-gray-800">jmoyson.me</div>

          <Link
            href="https://blog.jmoyson.me"
            className="text-blue-500 hover:text-blue-600 font-medium transition-colors px-4 cursor-pointer"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
