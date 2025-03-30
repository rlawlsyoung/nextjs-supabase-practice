import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Next.js + Supabase 인증 예제</h1>
      <div className="flex gap-4">
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
  );
}
