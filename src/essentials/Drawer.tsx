"use client";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faViber,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faUser,
  faAddressCard,
  faFolderOpen,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { X } from "lucide-react";

type DrawerOpen = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ACCENT_COLOR = "#00FF7F";
const BACKGROUND_COLOR = "#1f1d2b";

export default function Drawer({ open, setOpen }: DrawerOpen) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      setOpen(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div className="md:hidden">
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-md transition-opacity duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-4 bottom-4 right-4 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open
            ? "w-[280px] translate-x-0 opacity-100"
            : "w-[280px] translate-x-[110%] opacity-0 pointer-events-none"
        } overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
        style={{ backgroundColor: BACKGROUND_COLOR }}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="px-8 mb-8">
          <div className="relative w-20 h-20 mb-4 rounded-2xl overflow-hidden border border-white/10">
            <Image src="/doll.jpg" alt="Logo" fill className="object-cover" />
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Chit Min Thu
          </h2>
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: ACCENT_COLOR }}
          >
            Frontend Developer
          </p>
        </div>

        <nav className="flex flex-col gap-1 px-4">
          <DrawerItem
            icon={faHouse}
            text="Home"
            onClick={() => scrollTo("home")}
          />
          <DrawerItem
            icon={faUser}
            text="About"
            onClick={() => scrollTo("about")}
          />
          <DrawerItem
            icon={faFolderOpen}
            text="Project"
            onClick={() => scrollTo("project")}
          />
          <DrawerItem
            icon={faTrophy}
            text="Skill"
            onClick={() => scrollTo("skill")}
          />
          <DrawerItem
            icon={faAddressCard}
            text="Contact"
            onClick={() => scrollTo("contact")}
          />
        </nav>

        <div className="absolute bottom-8 left-0 w-full px-8">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4">
            Let&apos;s Connect
          </p>
          <div className="flex gap-4">
            <SocialIcon
              icon={faViber}
              href="viber://chat?number=959942620449"
            />
            <SocialIcon
              icon={faFacebook}
              href="https://facebook.com/nameiscoe"
            />
            <SocialIcon icon={faTelegram} href="https://t.me/coe_2005" />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function DrawerItem({
  icon,
  text,
  onClick,
}: {
  icon: IconDefinition;
  text: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex items-center space-x-4 w-full px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group text-gray-400 hover:text-white hover:bg-white/5"
    >
      <FontAwesomeIcon
        icon={icon}
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <span className="text-sm font-bold">{text}</span>
    </div>
  );
}

function SocialIcon({ icon, href }: { icon: IconDefinition; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-xl flex justify-center items-center bg-white/5 border border-white/5 hover:border-[#00FF7F]/30 hover:bg-[#00FF7F]/5 transition-all duration-300 group"
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-gray-500 group-hover:text-[#00FF7F] transition-colors"
        size="lg"
      />
    </a>
  );
}
