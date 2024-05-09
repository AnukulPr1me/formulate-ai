import React, { Children, ReactNode } from "react";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwticher";
import { UserButton } from "@clerk/nextjs";

function Layout({ Children }: { Children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen- min-w-full bg-background min-h-screen">
      <nav className="flex justify-between item-center border-b border-border h-[60] px-4 py-2">
        <Logo />
        <div className="flex gap-4 item-center">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="sign-in" />
        </div>
      </nav>
      <main className="flex w-full flex-grow">{Children}</main>
    </div>
  );
}

export default Layout;
