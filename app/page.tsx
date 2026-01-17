"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  GraduationCap,
  Users,
  ExternalLink,
  ChevronRight,
  MessageSquare,
  Instagram,
  Terminal,
  Home as HomeIcon,
  BookOpen,
  Briefcase,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const education = [
    {
      school: "Universitas Muhammadiyah Surakarta",
      degree: "S1 Teknik Informatika",
      period: "2022 - Sekarang",
      desc: "Sedang menempuh pendidikan sarjana dengan fokus pada pengembangan perangkat lunak.",
    },
    {
      school: "SMA Negeri 1 Polanharjo",
      degree: "Ilmu Pengetahuan Alam",
      period: "2019 - 2022",
      desc: "Aktif dalam kegiatan akademik dan pengembangan diri dasar.",
    },
  ];

  const organizations = [
    {
      name: "Badan Eksekutif Mahasiswa FKI UMS",
      role: "Gubernur Mahasiswa",
      period: "2024 - 2025",
      desc: "Memimpin organisasi eksekutif di tingkat fakultas dan mengoordinasikan berbagai program kerja strategis.",
    },
    {
      name: "Himpunan Mahasiswa Teknik Informatika UMS",
      role: "Ketua Umum",
      period: "2023 - 2024",
      desc: "Bertanggung jawab atas jalannya organisasi profesi mahasiswa informatika.",
    },
  ];

  const projects = [
    {
      title: "Setyo Barbershop",
      description: "Eksperimen landing page modern dengan desain responsif untuk kebutuhan branding barber lokal.",
      tags: ["Web Design", "Frontend", "UI/UX"],
      color: "from-blue-500/10 to-transparent",
      link: "https://setyobarbershop.pribumics.my.id/",
      image: "/setyobarber.png",
    },
    {
      title: "Masjid Baiturrohiem",
      description: "Kanal informasi dan kegiatan Masjid Baiturrohiem dengan desain modern dan responsif.",
      tags: ["Next.js", "Tailwind"],
      color: "from-blue-600/10 to-transparent",
      link: "https://masjidbaiturrohiem.vercel.app/",
       image: "/masjid1.png",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.2 }
    }
  };

  // State untuk Bottom Menu aktif (Mobile)
  const [activeTab, setActiveTab] = useState("home");

  const bottomMenuItems = [
    { id: "home", label: "Home", icon: <HomeIcon size={20} />, href: "#home" },
    { id: "academic", label: "Edu", icon: <GraduationCap size={20} />, href: "#education" },
    { id: "project", label: "Work", icon: <Layers size={20} />, href: "#project" },
    { id: "contact", label: "Chat", icon: <MessageSquare size={20} />, href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 font-sans overflow-x-hidden pb-24 md:pb-0">
      
      {/* 1. BOTTOM NAVIGATION (MOBILE ONLY) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] md:hidden w-[90%] max-w-[400px]">
        <nav className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-2xl flex justify-around items-center">
          {bottomMenuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center p-3 rounded-2xl transition-all duration-300 ${
                activeTab === item.id ? "text-white" : "text-slate-500"
              }`}
            >
              {activeTab === item.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-blue-600 rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.icon}
              <span className="text-[10px] font-bold mt-1 uppercase tracking-tighter">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* 2. TOP NAVBAR (DESKTOP) */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-slate-100/50 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xs shadow-lg">L</div>
            <span className="font-bold tracking-tighter text-lg uppercase text-slate-950">Labib.</span>
          </div>
          <div className="flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
            {["Academic", "Leadership", "Project", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase() === 'academic' || item.toLowerCase() === 'leadership' ? 'education' : item.toLowerCase()}`} className="hover:text-blue-600 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <a href="mailto:labib.awwam@example.com" className="px-6 py-2.5 bg-slate-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
            Say Hello
          </a>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section id="home" className="relative z-10 max-w-6xl mx-auto pt-32 md:pt-48 pb-20 md:pb-32 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center text-center md:text-left">
          <motion.div className="lg:col-span-7" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-8 mx-auto md:mx-0 shadow-sm">
              <Sparkles size={12} className="text-blue-500" />
              <span>Personal Portfolio 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-950 mb-8 leading-[0.85]">
              Informatics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Student.
              </span>
            </h1>
            
            <p className="text-md md:text-lg text-slate-500 mb-10 max-w-lg leading-relaxed font-medium mx-auto md:mx-0">
              Mahasiswa Teknik Informatika UMS yang antusias dalam eksplorasi teknologi web. Berfokus pada pembangunan portofolio digital yang bersih, fungsional, dan bermakna.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button className="px-6 md:px-8 py-4 bg-slate-950 text-white rounded-2xl font-black text-[10px] md:text-[11px] uppercase tracking-widest flex items-center gap-3 hover:shadow-2xl hover:shadow-blue-100 transition-all group">
                Resume <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex gap-2">
                <a href="https://github.com/labibawwam" target="_blank" className="p-4 border border-slate-100 rounded-2xl hover:bg-blue-50 transition-all shadow-sm text-slate-400 hover:text-blue-600"><Github size={20} /></a>
                <a href="https://instagram.com/labib.awwam" target="_blank" className="p-4 border border-slate-100 rounded-2xl hover:bg-blue-50 transition-all shadow-sm text-slate-400 hover:text-blue-600"><Instagram size={20} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-5 relative order-first md:order-last" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative w-full aspect-[4/5] max-w-[320px] md:max-w-[420px] mx-auto group">
              <div className="absolute inset-0 bg-blue-100 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden bg-white border-[10px] md:border-[12px] border-white shadow-2xl transition-transform duration-500 group-hover:rotate-2">
                <Image src="/pplabib.jpeg" alt="Profile" fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-4 md:p-5 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-[9px] md:text-[10px] font-black text-slate-700 uppercase tracking-widest">Active Student</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. ACADEMIC & LEADERSHIP */}
      <section id="education" className="relative z-10 py-24 md:py-32 bg-slate-50/50 rounded-[3rem] md:rounded-[4rem] mx-4 border border-slate-100 shadow-inner">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            
            <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-12">
                <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-lg">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-slate-900">Academic</h2>
              </motion.div>

              <div className="space-y-12 md:space-y-16 border-l-2 border-slate-200 ml-5 md:ml-6 pl-8 md:pl-12 font-medium">
                {education.map((edu, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative group">
                    <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 md:w-5 h-4 md:h-5 bg-white border-4 border-blue-600 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-600 shadow-sm shadow-blue-100" />
                    <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">{edu.period}</span>
                    <h3 className="text-xl md:text-2xl font-black mt-4 md:mt-6 tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 leading-tight">{edu.school}</h3>
                    <p className="text-slate-500 mt-2 text-sm leading-relaxed font-semibold italic">{edu.degree}</p>
                    <p className="text-slate-400 mt-2 text-sm leading-relaxed font-normal">{edu.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={{ ...staggerContainer, whileInView: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } } }}>
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-12">
                <div className="p-4 bg-slate-950 text-white rounded-2xl shadow-lg">
                  <Users size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-slate-900">Leadership</h2>
              </motion.div>

              <div className="space-y-12 md:space-y-16 border-l-2 border-slate-200 ml-5 md:ml-6 pl-8 md:pl-12 font-medium">
                {organizations.map((org, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative group">
                    <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 md:w-5 h-4 md:h-5 bg-white border-4 border-slate-900 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-600 group-hover:border-blue-600 shadow-sm" />
                    <span className="text-[9px] font-black text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest">{org.period}</span>
                    <h3 className="text-xl md:text-2xl font-black mt-4 md:mt-6 tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 leading-tight">{org.name}</h3>
                    <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mt-2 italic">{org.role}</p>
                    <p className="text-slate-400 mt-4 text-sm leading-relaxed font-normal">{org.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. SELECTED PROJECTS */}
      <section id="project" className="relative z-10 py-24 md:py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-6">Selected <br className="hidden md:block" /> Work.</h2>
              <div className="w-16 md:w-20 h-2 bg-blue-600 rounded-full mb-6 mx-auto md:mx-0" />
              <p className="text-slate-400 font-bold italic text-sm">Showcasing my digital explorations.</p>
            </div>
            <button className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors border-b-2 border-slate-100 pb-2">View All Work</button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                <div className={`aspect-[4/3] md:aspect-[16/10] bg-gradient-to-br ${p.color} rounded-[2.5rem] md:rounded-[3rem] overflow-hidden relative border border-slate-100 shadow-sm transition-transform duration-500 hover:shadow-xl`}>
                  {p.image ? (
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[1s]" />
                  ) : (
                    <div className="flex items-center justify-center h-full opacity-30">{p.icon}</div>
                  )}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <a href={p.link} target="_blank" className="p-4 md:p-5 bg-white rounded-full text-slate-950 shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500 hover:bg-blue-600 hover:text-white">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
                <div className="mt-8 md:mt-10 px-2 md:px-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(t => <span key={t} className="text-[8px] md:text-[9px] font-black text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full uppercase tracking-widest">{t}</span>)}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-950 uppercase tracking-tight mb-4 group-hover:text-blue-600 transition-colors leading-tight">{p.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium text-sm">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT & FOOTER */}
      <footer id="contact" className="relative z-10 max-w-6xl mx-auto py-24 md:py-40 px-6 text-center border-t border-slate-100/50">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <h2 className="text-5xl md:text-[10rem] font-black mb-10 tracking-tighter leading-none uppercase italic text-slate-950">Let's <br /> Talk.</h2>
          <a href="mailto:labib.awwam@example.com" className="inline-flex items-center gap-3 px-10 md:px-12 py-6 md:py-7 bg-slate-950 text-white rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] shadow-2xl hover:bg-blue-600 transition-all active:scale-95">
            <MessageSquare size={18} /> Get in Touch
          </a>
        </motion.div>

        <div className="mt-32 md:mt-48 pt-12 md:pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg">L</div>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">© 2026 Crafted by Labib</p>
          </div>
          <div className="flex gap-8 md:gap-12 font-black uppercase tracking-widest text-[10px]">
            <a href="https://instagram.com/labib.awwam" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors">Instagram</a>
            <a href="https://github.com/labibawwam" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors">Github</a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Linkedin</a>
          </div>
        </div>
      </footer>
    </main>
  );
}