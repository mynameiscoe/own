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

  if (!mounted) return null;

  return createPortal(
    <div className="md:hidden">
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-screen transition-all duration-300 ease-in-out ${
          open ? "w-[300px]" : "w-0"
        } overflow-hidden bg-gradient-to-b from-[#3d0c6d] to-[#594e90] border border-white/20 `}
      >
        <div
          className={`flex justify-between flex-row-reverse py-3 pr-6 transition-all duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <X
            className="w-7 h-7 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <div
          className={`mt-6 transition-all duration-300 ${
            open ? "" : "translate-x-20 translate-y-[-40px]"
          }`}
        >
          <div className="relative w-[120px] h-[120px] border border-[#ff6ec4] bg-white mx-auto rounded-full">
            <Image
              src="/temp.jpg"
              alt="Logo"
              fill
              className="rounded-full object-cover p-[5px]"
            />
          </div>
          <span className="flex justify-center mt-3 font-extrabold text-2xl gradient-text">
            Chit Min Thu
          </span>
        </div>

        <div className="border-t mt-5" />

        <div
          className={`flex flex-col gap-3 items-start space-y-5 px-10 mt-5 transition-all duration-300 ${
            open ? "" : "translate-x-20 translate-y-[40px]"
          }`}
        >
          <DrawerItem icon={faHouse} text="Home" />
          <DrawerItem icon={faUser} text="About" />
          <DrawerItem icon={faFolderOpen} text="Project" />
          <DrawerItem icon={faTrophy} text="Skill" />
          <DrawerItem icon={faAddressCard} text="Contact" />
        </div>

        <div className="flex justify-between px-10 mt-8 w-full">
          <SocialIcon icon={faViber} color="bg-purple-500" />
          <SocialIcon icon={faFacebook} color="bg-blue-800" />
          <SocialIcon icon={faTelegram} color="bg-blue-500" />
        </div>
      </div>
    </div>,
    document.body
  );
}

function DrawerItem({ icon, text }: { icon: IconDefinition; text: string }) {
  return (
    <div className="flex items-center space-x-5">
      <FontAwesomeIcon icon={icon} size="lg" />
      <span>{text}</span>
    </div>
  );
}

function SocialIcon({ icon, color }: { icon: IconDefinition; color: string }) {
  return (
    <div
      className={`${color} w-[34px] h-[34px] rounded-full flex justify-center items-center`}
    >
      <FontAwesomeIcon icon={icon} className="text-white" size="lg" />
    </div>
  );
}
