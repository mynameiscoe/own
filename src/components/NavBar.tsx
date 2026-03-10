"use client";
import Drawer from "@/essentials/Drawer";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";


export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div
      className="relative mt-7 border-b border-t border-white/30 backdrop-blur-2xl shadow-lg"
      style={{
        background: "#343148",
      }}
    >
      <Drawer open={open} setOpen={setOpen} />
      <div className="py-3 px-5 sm:px-10 md:px-18 w-full">
        <div className="flex justify-between items-center text-white">
          <p className="w-full">Hello</p>
          <div
            className={`md:hidden cursor-pointer transition-all duration-300`}
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </div>
          <div className="hidden md:block">
            <div className="flex justify-end items-center w-full  cursor-pointer text-white">
              <p className={`hover:text-[#00FFFF] px-5`}>Home</p>
              <p className={`hover:text-[#00FFFF] px-5`}>About</p>
              <p className={`hover:text-[#00FFFF] px-5`}>Project</p>
              <p className={`hover:text-[#00FFFF] px-5`}>Skill</p>
              <p className={`hover:text-[#00FFFF] px-5`}>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
