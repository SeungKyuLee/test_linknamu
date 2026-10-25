import type { Metadata } from "next";
// 페이지에 쓰인 글자가 포함된 조각만 내려받는 Pretendard 분할 폰트
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

// 저장된 테마가 없으면 시스템 설정을 따른다
const themeInitScript = `
try {
  var theme = localStorage.getItem("theme");
  if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
`;

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 첫 렌더 전에 테마를 적용해 화면 깜빡임 방지 */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
