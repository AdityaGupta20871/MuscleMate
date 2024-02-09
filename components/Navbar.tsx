"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
const routes = [
  {
    name: "Chat",
    path: "/",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-black p-4 text-white">
      <Link href="/">
        <h1 className="text-2xl font-bold">GYMBOT</h1>
      </Link>
      <div className="flex gap-6 items-center">
        {routes.map((route, idx) => (
          <Link key={idx} href={route.path}>
            {route.name}
          </Link>
        ))}
        <UserButton afterSignOutUrl="/" />
      </div>
      
    </div>
  );
};

export default Navbar;
