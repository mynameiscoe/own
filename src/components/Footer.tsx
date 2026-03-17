"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaViber,
  FaGithub,
  FaCode,
} from "react-icons/fa";

const Footer = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <footer className="relative bg-[#1f1d2b] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      <motion.div
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "50%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#00FF7F]/50 to-transparent"
      ></motion.div>

      <div className="flex flex-col md:flex-row justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 max-w-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="p-2 bg-[#00FF7F]/10 rounded-lg"
            >
              <FaCode className="text-[#00FF7F]" size={20} />
            </motion.div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Coe Portfolio
            </h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Building modern, high-performance web experiences with a focus on
            clean code and interactive design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="font-bold mb-5 text-white uppercase tracking-widest text-xs">
            Navigation
          </h4>

          <ul className="space-y-3">
            {["Project", "About", "Contact"].map((item) => (
              <li key={item}>
                <motion.p
                  onClick={() => scrollTo(item.toLowerCase())}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-[#00FF7F] transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                >
                  <span className="w-0 h-[1px] bg-[#00FF7F] group-hover:w-3 transition-all"></span>
                  {item}
                </motion.p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="font-bold mb-5 text-white uppercase tracking-widest text-xs">
            Stay Connected
          </h4>

          <div className="flex gap-3">
            {[
              {
                icon: <FaFacebookF />,
                link: "https://facebook.com/nameiscoe",
                hover: "hover:bg-[#1877F2] hover:border-[#1877F2]",
                glow: "shadow-blue-600/20",
              },
              {
                icon: <FaViber />,
                link: "viber://chat?number=959942620449",
                hover: "hover:bg-[#7360F2] hover:border-[#7360F2]",
                glow: "shadow-purple-500/20",
              },
              {
                icon: <FaTelegramPlane />,
                link: "https://t.me/coe_2005",
                hover: "hover:bg-[#24A1DE] hover:border-[#24A1DE]",
                glow: "shadow-sky-500/20",
              },
              {
                icon: <FaGithub />,
                link: "https://github.com/mynameiscoe",
                hover: "hover:bg-[#2b3137] hover:border-[#2b3137]",
                glow: "shadow-gray-400/20",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 shadow-lg 
                hover:text-white 
                ${social.hover}
                hover:shadow-xl ${social.glow}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 pt-8 border-t border-white/5 text-center"
      >
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Coe Portfolio</span>.
          Designed with in <span className="text-gray-300">Yangon</span>.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
