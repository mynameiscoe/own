"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faViber,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { ArrowDownToLine, Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const ACCENT_COLOR = "#00FF7F";
const BACKGROUND_COLOR = "#1f1d2b";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const glassClass =
    "bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl transition duration-500 hover:shadow-green-500/50";
  const buttonClass =
    "bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-lg transition duration-300 hover:bg-white/30";

  const socialBtn =
    "bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-lg transition duration-300";

  return (
    <div
      className="min-h-screen text-white pt-20 pb-10"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
        <div className="flex-2 w-full md:max-w-2xl text-center md:text-left order-2 xl:order-1">
          <div className={`p-6 ${glassClass} mb-8`}>
            {mounted && (
              <p className="text-lg sm:text-xl text-gray-200 mb-2 flex items-center justify-center md:justify-start">
                <Zap
                  size={20}
                  className="mr-2"
                  style={{ color: ACCENT_COLOR }}
                />
                Code and Design by
              </p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl text-gray-200 md:text-6xl font-extrabold mb-4 leading-tight"
            >
              {/* CHIT MIN THU */}
              Coe
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold mt-4"
            >
              <span className="text-gray-300">I&apos;m a </span>
              <span
                style={{ color: ACCENT_COLOR }}
                className="font-extrabold tracking-wide drop-shadow-lg text-nowrap"
              >
                Frontend Developer
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-400 mb-8 max-w-md mx-auto md:mx-0"
          >
            I&apos;m a motivated junior developer passionate about building
            clean, responsive, and user-friendly web applications.
          </motion.p>

          <a
            href="#"
            download
            className={`inline-flex items-center justify-center gap-3 px-8 py-3 font-bold ${buttonClass}`}
            style={{ color: ACCENT_COLOR }}
          >
            <span>Download CV</span>
            <ArrowDownToLine size={24} />
          </a>

          <div className="flex justify-center md:justify-start gap-5 mt-10">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="viber://chat?number=959942620449"
              className={`w-10 h-10 flex justify-center items-center hover:bg-purple-500 ${socialBtn}`}
            >
              <FontAwesomeIcon
                icon={faViber}
                className="text-white"
                size="xl"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/nameiscoe"
              className={`w-10 h-10 flex justify-center items-center hover:bg-blue-700 ${socialBtn}`}
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-white"
                size="lg"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/coe_2005"
              className={`w-10 h-10 flex justify-center items-center hover:bg-blue-500 ${socialBtn}`}
            >
              <FontAwesomeIcon
                icon={faTelegramPlane}
                className="text-white"
                size="lg"
              />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center order-1 xl:order-2">
          <div className="w-70 h-70 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative p-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4a387f] to-[#7c77cf] opacity-50 blur-xl"></div>
            <Image
              src="/boy.png"
              alt="Chit Min Thu Profile Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-2xl z-10 relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
