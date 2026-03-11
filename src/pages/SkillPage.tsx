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
    // The core of the glass effect: border, background transparency, and blur.
    <div
      className={`p-6 rounded-xl border border-gray-600/50 bg-white/10 backdrop-blur-md shadow-2xl 
                  transition-all duration-300 transform hover:scale-[1.03] hover:shadow-cyan-500/50 
                  cursor-pointer text-center relative overflow-hidden mt-2`}
    >
      {/* 1. Progress Indicator (Top Border Glow based on Percentage) */}
      <div
        className={`absolute top-0 left-0 h-1 ${colorClass} transition-all duration-700`}
        style={{
          width: `${percentage}%`,
          boxShadow: `0 0 10px 0 ${colorClass.split("-")[1]}`,
          borderRadius: "0 0 4px 4px",
        }}
      ></div>

      {/* 2. Icon (The focal point) */}
      <div className="flex justify-center my-4">
        <div className={`p-4 rounded-full bg-black/30 ${colorClass} shadow-lg`}>
          <IconComponent
            className={`${skill === "Next.js" ? "text-black" : "text-white"} text-4xl`}
          />
        </div>
      </div>

      {/* 3. Skill Name & Percentage */}
      <h3 className="text-xl font-bold text-white mb-1">{skill}</h3>
      <p className="text-gray-200 text-lg font-semibold">
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
      percentage: 80,
      icon: FaCss3Alt,
      colorClass: "bg-blue-500",
    },
    {
      skill: "JavaScript",
      percentage: 70,
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
      percentage: 60,
      icon: SiNextdotjs,
      colorClass: "bg-white text-gray-900",
    },
    {
      skill: "Git & GitHub",
      percentage: 75,
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
    // Assume a dark background is applied to the parent element for the glass effect to be visible
    <div className="py-16 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white sm:text-6xl">
          My <span className="text-cyan-400">Technical Stack</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300">
          Chit Min Thu&apos; areas of expertise, presented with a futuristic
          design.
        </p>
      </div>

      {/* Skills Grid - Highly Responsive (2-col to 4-col) */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
