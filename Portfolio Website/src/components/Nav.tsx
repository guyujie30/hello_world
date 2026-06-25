"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { to: "/", label: "首页" },
  { to: "/about", label: "关于" },
  { to: "/projects", label: "项目" },
  { to: "/notes", label: "笔记" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span>PORT</span>
        <span>FOLIO</span>
      </Link>

      <nav className="desktop-nav" aria-label="主导航">
        {navItems.map((item) => (
          <Link key={item.to} href={item.to} className={`nav-link ${pathname === item.to ? "active" : ""}`}>
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        className="menu-button"
        type="button"
        aria-label={isOpen ? "关闭菜单" : "打开菜单"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {isOpen && (
        <nav className="mobile-nav" aria-label="移动端主导航">
          {navItems.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={`mobile-nav-link ${pathname === item.to ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
