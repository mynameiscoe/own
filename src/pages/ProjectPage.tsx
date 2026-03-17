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
    image: "/tpn.png",
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
];

export default function ProjectsPage() {
  const glassClass =
    "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-green-500/20";

  return (
    <div
      className="text-white py-20"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <div>
        <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4 justify-center md:justify-start"
          >
            <Code2 style={{ color: ACCENT_COLOR }} size={32} />
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Featured <span style={{ color: ACCENT_COLOR }}>Projects</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-lg"
          >
            A collection of web applications I&apos;ve built, focusing on UI/UX
            and clean code.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={glassClass}
            >
              <div className="relative h-48 w-full bg-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              </div>

              <div className="p-6 group">
                <h3 className="text-xl font-bold mb-2 text-gray-100 transition duration-300 group-hover:text-[#00FF7F]">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

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

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
                    style={{ color: ACCENT_COLOR }}
                  >
                    <ExternalLink size={18} /> View
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} /> Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
