"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaBirthdayCake,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCode,
  FaUserAlt,
} from "react-icons/fa";

const ACCENT_COLOR = "#00FF7F";
const BACKGROUND_COLOR = "#1f1d2b";

export default function AboutPage() {
  const glassClass =
    "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl";

  const personalDetails = [
    { icon: FaBirthdayCake, label: "Birthday", value: "10 May 2005" },
    { icon: FaPhone, label: "Phone", value: "09 942620449" },
    {
      icon: FaMapMarkerAlt,
      label: "City",
      value: "Yangon, Thingangyun Township",
    },
    { icon: FaEnvelope, label: "Email", value: "chitminthu2005c@gmail.com" },
  ];

  return (
    <div
      className="min-h-screen text-white pt-24 pb-12"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <div className="mx-auto">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center md:text-left"
        >
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <FaUserAlt style={{ color: ACCENT_COLOR }} size={28} />
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              About <span style={{ color: ACCENT_COLOR }}>Me</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl text-lg">
            My Journey: Building responsive and scalable web solutions.
          </p>
        </motion.div>

        {/* --- Main Content Split Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 1. Left Column: Image and Main Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`lg:col-span-4 p-8 ${glassClass} flex flex-col items-center text-center self-start`}
          >
            <div className="w-48 h-48 mb-6 relative rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image
                src="/boy.png" // Using your profile image
                alt="Chit Min Thu"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <h1 className="text-3xl font-extrabold text-white">Chit Min Thu</h1>
            <p
              className="text-lg font-semibold mt-2 px-4 py-1 rounded-full bg-white/5 border border-white/10"
              style={{ color: ACCENT_COLOR }}
            >
              <FaCode className="inline mr-2" /> Web Developer
            </p>
          </motion.div>

          {/* 2. Right Column: Bio and Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Short Bio */}
            <div className={`${glassClass} p-8`}>
              <h3
                className="text-xl font-bold mb-4 uppercase tracking-wider"
                style={{ color: ACCENT_COLOR }}
              >
                About My Role
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I am a motivated junior developer passionate about building
                clean, responsive, and user-friendly web applications. I focus
                on UI/UX excellence and writing clean, maintainable code.
              </p>
            </div>

            {/* Personal Details Cards */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                Personal Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalDetails.map((item, index) => (
                  <div
                    key={index}
                    className={`${glassClass} p-5 transition-all duration-300 hover:shadow-green-500/10 hover:-translate-y-1`}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon
                        style={{ color: ACCENT_COLOR }}
                        className="text-2xl"
                      />
                      <div>
                        <span className="text-xs font-medium text-gray-500 block uppercase tracking-widest">
                          {item.label}
                        </span>
                        <span className="text-md font-semibold text-gray-200">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Fact / Age */}
            <div
              className={`${glassClass} p-5 border-l-4`}
              style={{ borderLeftColor: ACCENT_COLOR }}
            >
              <span className="text-xs font-medium text-gray-500 block uppercase tracking-widest">
                Current Status
              </span>
              <span className="text-xl font-bold text-white">
                20 Years Old & Open to Work
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
