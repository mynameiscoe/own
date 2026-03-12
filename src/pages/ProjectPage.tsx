"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Image from "next/image";

const ACCENT_COLOR = "#00FF7F";
const BACKGROUND_COLOR = "#1f1d2b";

const projects = [
  {
    title: "Topup Nation",
    description:
      "A specialized platform for selling Mobile Legends diamonds and game top-ups with a focus on speed and security.",
    tags: ["Laravel", "Inertia", "React"],
    link: "https://topupnation.gg/",
    github: "https://github.com/iconicdigitalbrandingsolution/top-up-nation",
    image: "/tpn.png", // Replace with your project screenshot
  },
  {
    title: "Segent",
    description:
      "My professional showcase featuring glassmorphism design and smooth animations.",
    tags: ["Laravel", "jquery", "bootstrap"],
    link: "https://staging.segent.my",
    github: "https://github.com/iconicdigitalbrandingsolution/segent",
    image: "/luoyi.jpg",
  },
  {
    title: "Homeplus",
    description:
      "My professional showcase featuring responsive and smooth animations.",
    tags: ["Nextjs", "TypeScript", "Tailwind Css"],
    link: "https://homeplus.iconicmyanmar.com/",
    github: "https://github.com/iconicdigitalbrandingsolution/home-plus-fe",
    image: "/home.jpg",
  },
  // Add more projects here
];

export default function ProjectsPage() {
  const glassClass =
    "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-green-500/20 hover:-translate-y-2";

  return (
    <div
      className="min-h-screen text-white pt-24 pb-12"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <div className="mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4 justify-center md:justify-start"
          >
            <Code2 style={{ color: ACCENT_COLOR }} size={32} />
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Featured <span style={{ color: ACCENT_COLOR }}>Projects</span>
            </h2>
          </motion.div>
          <p className="text-gray-400 max-w-2xl text-lg">
            A collection of web applications I&apos;ve built, focusing on UI/UX
            and clean code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={glassClass}
            >
              {/* Image Container */}
              <div className="relative h-48 w-full bg-gray-800">
                {/* Fallback color if image is missing */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Content */}
              <div className="p-6 group">
                <h3
                  className={`text-xl font-bold mb-2 text-gray-100 transition duration-300 group-hover:text-[#00FF7F] `}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
                    style={{ color: ACCENT_COLOR }}
                  >
                    <ExternalLink size={18} /> View
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
