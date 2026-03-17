"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";

import { FaFacebookF, FaTelegramPlane, FaViber } from "react-icons/fa";

const ACCENT_COLOR = "#00FF7F";
const BACKGROUND_COLOR = "#1f1d2b";

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(form);
    formData.append("access_key", "8742fb18-c978-4297-a8d1-8a52e87e048a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      form.reset();
      setTimeout(() => setResult(""), 3000);
    } else {
      setResult(data.message);
    }
    setIsSubmitting(false);
  };

  const glassClass =
    "bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-4 sm:p-8 shadow-2xl";
  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#00FF7F]/50 transition-all text-gray-200 focus:ring-1 focus:ring-[#00FF7F]/30";

  return (
    <div
      className="text-white py-20"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <div>
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-black mb-4"
          >
            Get In <span style={{ color: ACCENT_COLOR }}>Touch.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Have a project in mind? Let&apos;s build something amazing together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className={glassClass}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-8">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="p-3 rounded-2xl bg-white/5 border border-white/10"
                    style={{ color: ACCENT_COLOR }}
                  >
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-lg text-gray-200">
                      chitminthu2005c@gmail.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="p-3 rounded-2xl bg-white/5 border border-white/10"
                    style={{ color: ACCENT_COLOR }}
                  >
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-lg text-gray-200">
                      Yangon, Thingangyun Township, Myanmar
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12">
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-4">
                  Connect with me
                </p>
                <div className="flex gap-4">
                  {[
                    {
                      icon: <FaFacebookF size={20} />,
                      href: "https://facebook.com/nameiscoe",
                    },
                    {
                      icon: <FaViber size={20} />,
                      href: "viber://chat?number=959942620449",
                    },
                    {
                      icon: <FaTelegramPlane size={20} />,
                      href: "https://t.me/coe_2005",
                    },
                  ].map((social, i) => (
                    <motion.a
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={social.href}
                      key={i}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 transition-all shadow-lg"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={glassClass}
          >
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-gray-400 ml-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Your Name"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-gray-400 ml-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="email@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-gray-400 ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={inputClass}
                ></textarea>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 0 20px ${ACCENT_COLOR}66`,
                }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="w-full py-4 cursor-pointer rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
                style={{
                  backgroundColor: ACCENT_COLOR,
                  color: BACKGROUND_COLOR,
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                <motion.div>
                  <Send size={20} />
                </motion.div>
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              <AnimatePresence>
                {result && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center mt-4 text-sm font-semibold"
                    style={{ color: ACCENT_COLOR }}
                  >
                    {result}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
