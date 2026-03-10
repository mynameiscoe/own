"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  Facebook, 
  MessageCircle, 
  SendHorizontal 
} from "lucide-react";

const ACCENT_COLOR = "#00FF7F";
const BACKGROUND_COLOR = "#1f1d2b";

export default function ContactPage() {
  const glassClass = "bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl";
  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#00FF7F]/50 transition-all text-gray-200";

  return (
    <div 
      className="min-h-screen text-white pt-28 pb-20 px-4 sm:px-8"
      style={{ backgroundColor: BACKGROUND_COLOR }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-4"
          >
            Get In <span style={{ color: ACCENT_COLOR }}>Touch.</span>
          </motion.h1>
          <p className="text-gray-400 text-lg">Have a project in mind? Let&apos;s build something amazing together.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className={glassClass}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10" style={{ color: ACCENT_COLOR }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Email</p>
                    <p className="text-lg text-gray-200">chitminthu@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10" style={{ color: ACCENT_COLOR }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Location</p>
                    <p className="text-lg text-gray-200">Yangon, Myanmar</p>
                  </div>
                </div>
              </div>

              {/* Quick Social Links */}
              <div className="mt-12">
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {[
                    { icon: <Facebook size={20} />, label: "Facebook" },
                    { icon: <MessageCircle size={20} />, label: "Viber" },
                    { icon: <SendHorizontal size={20} />, label: "Telegram" }
                  ].map((social, i) => (
                    <button key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className={glassClass}
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Name</label>
                  <input type="text" placeholder="Your Name" className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Email</label>
                  <input type="email" placeholder="email@example.com" className={inputClass} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Subject</label>
                <input type="text" placeholder="Project Inquiry" className={inputClass} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Message</label>
                <textarea rows={5} placeholder="Tell me about your project..." className={inputClass}></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:brightness-110 active:scale-95"
                style={{ backgroundColor: ACCENT_COLOR, color: BACKGROUND_COLOR }}
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}