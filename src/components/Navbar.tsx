import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-500">Todo App</div>
        <div className="space-x-4">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
