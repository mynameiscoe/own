"use client";
import Drawer from "@/essentials/Drawer";
import { Menu, Terminal } from "lucide-react"; // Terminal icon ထပ်ထည့်ထားတယ်
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ACCENT_COLOR = "#00FF7F"; // တခြား page တွေနဲ့ အရောင်ညှိထားတယ်

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "mt-0 bg-[#1f1d2b]/80 backdrop-blur-md shadow-2xl border-b border-white/10"
          : "mt-7 border-b border-t border-white/20"
      }`}
      style={{ background: scrolled ? "" : "#343148" }}
    >
      <Drawer open={open} setOpen={setOpen} />

      <div className="px-5 xl:px-18  py-3 mx-auto w-full">
        <div className="flex justify-between items-center text-white">
          {/* --- Hello နေရာမှာ အစားထိုးလိုက်တဲ့ Brand Logo Section --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollTo("home")}
          >
            <div className="p-1.5 bg-[#00FF7F]/10 rounded-lg group-hover:bg-[#00FF7F]/20 transition-colors">
              <Terminal size={20} style={{ color: ACCENT_COLOR }} />
            </div>
            <span className="text-lg sm:text-lg font-bold tracking-tighter">
              COE<span style={{ color: ACCENT_COLOR }}>.</span>DEV
            </span>
          </motion.div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden cursor-pointer p-2 hover:bg-white/10 rounded-lg transition-all"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex justify-end items-center gap-2 cursor-pointer text-white">
              {["Home", "About", "Skill", "Project", "Contact"].map((item) => (
                <motion.p
                  key={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="hover:text-[#00FF7F] px-4 py-2 text-sm font-medium transition-colors relative group"
                >
                  {item}
                  {/* Hover လိုင်းလေး */}
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#00FF7F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
