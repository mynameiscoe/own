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

type Skill = {
  skill: string;
  percentage: number;
  icon: React.ElementType;
  colorClass: string;
};

// --- Reusable Glassmorphism Skill Card Component ---
const GlassSkillCard = ({
  skill,
  percentage,
  icon: IconComponent,
  colorClass,
}: Skill) => {
  return (
    <div
      className={`p-6 rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl 
                  transition-all duration-300 transform hover:scale-[1.03] hover:shadow-cyan-500/20 
                  cursor-pointer text-center relative overflow-hidden mt-2`}
    >
      {/* 1. Progress Indicator (Top Border Glow) */}
      <div
        className={`absolute top-0 left-0 h-1 ${colorClass} transition-all duration-700`}
        style={{
          width: `${percentage}%`,
          boxShadow: `0 0 15px 0 ${colorClass.split("-")[1] || "cyan"}`,
          borderRadius: "0 0 4px 4px",
        }}
      ></div>

      {/* 2. Icon Section */}
      <div className="flex justify-center my-4">
        <div className={`p-4 rounded-full bg-white/5 ${colorClass} shadow-lg`}>
          <IconComponent
            className={`${skill === "Next.js" ? "text-black" : "text-white"} text-4xl`}
          />
        </div>
      </div>

      {/* 3. Skill Name & Percentage */}
      <h3 className="text-xl font-bold text-white mb-1">{skill}</h3>
      <p className="text-gray-400 text-lg font-semibold">
        <span className="text-cyan-400">{percentage}%</span> Proficiency
      </p>
    </div>
  );
};

// --- Main Skill Page Component ---
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
      colorClass: "bg-white text-gray-900",
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
    <div className="py-16 min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white sm:text-6xl">
          My <span className="text-cyan-400">Technical Stack</span>
        </h1>
        <p className="mt-6 text-xl text-gray-400">
          Chit Min Thu’s skills shown in a futuristic design.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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