"use client";

import { ThemeSwitcher } from "../ThemeSwitcher";
import { UserNav } from "./user-nav";

export function Navbar() {
  return (
    <nav className=" border-b ">
      <div className="container flex p-5 items-center space-x-4 justify-between">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-3xl mr-4">dev.clock</span>

          <a
            href="#"
            className="font-medium transition-colors hover:text-primary"
          >
            Painel
          </a>
          <a
            href="#"
            className="font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Clientes
          </a>
          <a
            href="#"
            className="font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Relatórios
          </a>
          <a
            href="#"
            className="font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Configurações
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <UserNav />
        </div>
      </div>
    </nav>
  );
}
