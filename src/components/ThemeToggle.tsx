"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // 서버 렌더 시점에는 테마를 알 수 없으므로 마운트 후에 읽는다
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground/80 text-lg transition hover:bg-foreground/10"
    >
      {isDark === null ? null : isDark ? "☀️" : "🌙"}
    </button>
  );
}
