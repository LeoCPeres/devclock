"use client";

import { ThemeSwitcher } from "../ThemeSwitcher";

export function Navbar() {
  return (
    <nav className="flex p-5 items-center space-x-4 border-b">
      <span>dev.clock</span>
      <ThemeSwitcher />
    </nav>
  );
}
