import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" w-full flex justify-around bg-black text-white h-[55px] items-center ">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
