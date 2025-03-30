"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 초기 세션 확인
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };

    checkSession();

    // 인증 상태 변화 구독
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link className="text-2xl font-bold text-blue-500" href={"/"}>
          <h1>Todo App</h1>
        </Link>
        <div className="space-x-4">
          {loading ? (
            <span>로딩 중...</span>
          ) : user ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">{user.email}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
