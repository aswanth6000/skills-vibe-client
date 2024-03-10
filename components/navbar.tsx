import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 py-6 bg-white shadow">
      <Link
        className="text-xl font-bold tracking-wider text-gray-900 dark:text-gray-100"
        href="#"
      >
        <span className="sr-only">Logo</span>
      </Link>
      <nav className="space-x-4 flex justify-between w-8/12">
        <Link className="text-gray-700 dark:text-gray-300" href="#">
          Home
        </Link>

        <Link className="text-gray-700 dark:text-gray-300" href="#">
          Services
        </Link>

        <Link className="text-gray-700 dark:text-gray-300" href="#">
          About
        </Link>

        <Link className="text-gray-700 dark:text-gray-300" href="#">
          Contact
        </Link>
      </nav>
    </header>
  );
}
