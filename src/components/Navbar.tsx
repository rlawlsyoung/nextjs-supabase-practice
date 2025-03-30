import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link className="text-2xl font-bold text-blue-500" href={"/"}>
          <h1>Todo App</h1>
        </Link>
        <div className="space-x-4">
          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            회원가입
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            로그인
          </Link>
        </div>
      </div>
    </nav>
  );
}
