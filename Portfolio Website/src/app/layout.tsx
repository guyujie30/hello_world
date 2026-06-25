import type { Metadata } from "next";
import Nav from "../components/Nav";
import "../styles.css";

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "个人网站，展示作品、经历和笔记。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="app-shell">
          <Nav />
          <main>{children}</main>
          <footer className="site-footer">
            <p>持续构建，持续记录。</p>
            <a href="/">回到首页</a>
          </footer>
        </div>
      </body>
    </html>
  );
}
