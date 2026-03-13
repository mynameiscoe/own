"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaServer,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

// Consistency Constants from Home Page
const ACCENT_COLOR = "#00FF7F";
const BACKGROUND_COLOR = "#1f1d2b";

type Skill = {
  skill: string;
  percentage: number;
  icon: React.ElementType;
  colorClass: string;
};

const GlassSkillCard = ({
  skill,
  percentage,
  icon: IconComponent,
  colorClass,
}: Skill) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-6 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl 
                 transition-all duration-500 hover:shadow-green-500/30 
                 cursor-pointer text-center relative overflow-hidden"
    >
      {/* Progress Glow matching Home Page Accent */}
      <div
        className="absolute top-0 left-0 h-1 transition-all duration-700"
        style={{
          width: `${percentage}%`,
          backgroundColor: ACCENT_COLOR,
          boxShadow: `0 0 15px ${ACCENT_COLOR}`,
        }}
      ></div>

      <div className="flex justify-center my-4">
        <div className="p-4 rounded-full bg-white/10 border border-white/20 shadow-lg">
          <IconComponent
            className="text-4xl"
            style={{ color: skill === "Next.js" ? "#fff" : "white" }}
          />
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-200 mb-1">{skill}</h3>
      <p className="text-gray-400 text-lg font-semibold">
        <span style={{ color: ACCENT_COLOR }}>{percentage}%</span> Proficiency
      </p>
    </motion.div>
  );
};

export default function SkillPage() {
  const skillsData: Skill[] = [
    {
      skill: "HTML5",
      percentage: 80,
      icon: FaHtml5,
      colorClass: "bg-orange-500",
    },
    {
      skill: "CSS/Tailwind",
      percentage: 70,
      icon: FaCss3Alt,
      colorClass: "bg-blue-500",
    },
    {
      skill: "JavaScript",
      percentage: 60,
      icon: FaJs,
      colorClass: "bg-yellow-500",
    },
    {
      skill: "React.js",
      percentage: 60,
      icon: FaReact,
      colorClass: "bg-cyan-400",
    },
    {
      skill: "Next.js",
      percentage: 65,
      icon: SiNextdotjs,
      colorClass: "bg-white",
    },
    {
      skill: "Git & GitHub",
      percentage: 60,
      icon: FaGitAlt,
      colorClass: "bg-red-500",
    },
    {
      skill: "Backend/APIs",
      percentage: 50,
      icon: FaServer,
      colorClass: "bg-green-500",
    },
  ];

  return (
    <div
      className="py-16 min-h-screen"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-white sm:text-6xl"
        >
          My <span style={{ color: ACCENT_COLOR }}>Technical Stack</span>
        </motion.h1>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          Modern tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="max-w-7xl mx-auto gap-8 sm:gap-4 xl:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skillsData.map((skill, index) => (
          <GlassSkillCard
            key={index}
            skill={skill.skill}
            percentage={skill.percentage}
            icon={skill.icon}
            colorClass={skill.colorClass}
          />
        ))}
      </div>
    </div>
  );
}
