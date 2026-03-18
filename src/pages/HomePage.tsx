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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <div
      className="text-white pb-20 pt-40 overflow-hidden"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col xl:flex-row items-center justify-between gap-12"
      >
        <div className="flex-2 w-full md:max-w-2xl text-center md:text-left order-2 xl:order-1">
          <motion.div
            variants={itemVariants}
            className={`p-6 ${glassClass} mb-8`}
          >
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

            <motion.h1 className="text-4xl text-gray-200 md:text-6xl font-extrabold mb-4 leading-tight">
              Chit Min Thu
            </motion.h1>

            <div className="text-2xl sm:text-3xl font-bold mt-4">
              <span className="text-gray-300">I&apos;m a </span>
              <span
                style={{ color: ACCENT_COLOR }}
                className="font-extrabold tracking-wide drop-shadow-lg text-nowrap"
              >
                Frontend Developer
              </span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 max-w-md mx-auto md:mx-0"
          >
            I&apos;m a motivated junior developer passionate about building
            clean, responsive, and user-friendly web applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <a
              href="/coe-cv.pdf"
              download
              className={`inline-flex items-center justify-center gap-3 px-8 py-3 font-bold ${buttonClass}`}
              style={{ color: ACCENT_COLOR }}
            >
              <span>Download CV</span>
              <ArrowDownToLine size={24} />
            </a>

            <div className="flex justify-center md:justify-start gap-5">
              {[
                {
                  icon: faFacebookF,
                  href: "https://facebook.com/nameiscoe",
                  color: "hover:bg-[#1877F2]",
                },
                {
                  icon: faViber,
                  href: "viber://chat?number=959942620449",
                  color: "hover:bg-[#7360F2]",
                },
                {
                  icon: faTelegramPlane,
                  href: "https://t.me/coe_2005",
                  color: "hover:bg-[#24A1DE]",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.href}
                  className={`w-10 h-10 flex justify-center items-center ${social.color} ${socialBtn}`}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="text-white"
                    size="lg"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 flex justify-center order-1 xl:order-2"
        >
          <div className="w-70 h-70 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative p-4">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4a387f] to-[#7c77cf] blur-xl"
            ></motion.div>

            <Image
              src="/boy.png"
              alt="Chit Min Thu Profile Image"
              fill
              objectFit="cover"
              className="rounded-full shadow-2xl z-10 relative border-2 border-white/10"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
