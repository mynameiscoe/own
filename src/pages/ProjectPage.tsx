// import FlipCard from "@/essentials/FlipCard";
// import Image from "next/image";

// export default function ProjectPage() {
//   return (
//     <div className="mb-15">
//       <h1 className="mt-15 text-3xl text-teal-300">Projects</h1>
//       <p className="mt-5 text-[#FFFFF0]">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla
//         veniam quia deleniti fugit necessitatibus error tempore doloribus
//         incidunt quidem exercitationem magni excepturi, iusto reiciendis
//         voluptates voluptate ad, nesciunt ab.
//       </p>

//       <div className="mt-15 flex flex-wrap gap-10 justify-center">
//         <FlipCard
//           frontImage="/present.png"
//           backImage="/luoyi.jpg"
//           title="Topup Nation"
//           link="https://topupnation.gg"
//         />

//         <FlipCard
//           frontImage="/present.png"
//           backImage="/ix.jpg"
//           title="For You"
//           link="#"
//         />

//         <FlipCard
//           frontImage="/present.png"
//           backImage="/pubg.jpg"
//           title="Segent"
//           link="https://staging.segent.my"
//         />
//         <FlipCard
//           frontImage="/present.png"
//           backImage="/bb.jpg"
//           title="Hello"
//           link="#"
//         />
//         <FlipCard
//           frontImage="/present.png"
//           backImage="/ll.jpg"
//           title="Hello"
//           link="some"
//         />
//         <FlipCard
//           frontImage="/present.png"
//           backImage="/doll.jpg"
//           title="Hello"
//           link="#"
//         />
//       </div>
//     </div>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Image from "next/image";

const ACCENT_COLOR = "#00FF7F";
const BACKGROUND_COLOR = "#1f1d2b";

// Sample Data for your projects
const projects = [
  {
    title: "Topup Nation",
    description: "A specialized platform for selling Mobile Legends diamonds and game top-ups with a focus on speed and security.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "https://github.com/iconicdigitalbrandingsolution/top-up-nation",
    image: "/project1.png", // Replace with your project screenshot
  },
  {
    title: "Personal Portfolio",
    description: "My professional showcase featuring glassmorphism design and smooth animations.",
    tags: ["React", "Lucide Icons", "Glassmorphism"],
    link: "#",
    github: "#",
    image: "/project2.png",
  },
  {
    title: "Personal Portfolio",
    description: "My professional showcase featuring glassmorphism design and smooth animations.",
    tags: ["React", "Lucide Icons", "Glassmorphism"],
    link: "#",
    github: "#",
    image: "/project2.png",
  },
  // Add more projects here
];

export default function ProjectsPage() {
  const glassClass = "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-green-500/20 hover:-translate-y-2";

  return (
    <div 
      className="min-h-screen text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4 justify-center md:justify-start"
          >
            <Code2 style={{ color: ACCENT_COLOR }} size={32} />
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Featured <span style={{ color: ACCENT_COLOR }}>Projects</span>
            </h2>
          </motion.div>
          <p className="text-gray-400 max-w-2xl text-lg">
            A collection of web applications I&apos;ve built, focusing on UI/UX and clean code.
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
                  src={'/luoyi.jpg'}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
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
                    href={project.link} 
                    className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
                    style={{ color: ACCENT_COLOR }}
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                  <a 
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
