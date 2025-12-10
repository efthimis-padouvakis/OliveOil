"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-sm h-16">
      {/* Logo / Home */}
      <Link href="/" className="font-semibold text-lg">
        Olive Oil
      </Link>

      {/* Navigation menu */}
      <div className="flex gap-6 items-center text-sm font-medium text-black">
        <Link href="/epafes">Επαφές</Link>
        <Link href="/proionta">Προϊόντα</Link>
        <Link href="/timologia">Τιμολόγια</Link>
        <Link href="/kataxhorisi">Καταχώρηση</Link>
      </div>

      {/* User menu */}
      <UserButton />
    </nav>
  );
}
