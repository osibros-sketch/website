"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <span className="text-lg font-semibold">Osemekhian Omoifo</span>
        <ul className="flex gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-blue-600 ${
                  pathname === href ? "text-blue-600 font-medium" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
