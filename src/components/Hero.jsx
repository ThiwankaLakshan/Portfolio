import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="section-container relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                        Available for Hire
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Thiwanka Lakshan.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                        A passionate <span className="text-slate-200 font-semibold">Backend Developer</span> and Undergraduate Student crafting scalable systems and real-time applications.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a href="#projects" className="btn-primary flex items-center gap-2 group">
                            View My Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/ThiwankaLakshan" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/thiwankalakshan07/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:thiwankalakshan07@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Visual Element / Profile or Abstract */}
                {/* Visual Element / Profile or Abstract */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block relative"
                >
                    <div className="relative z-10 w-80 h-80 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <img
                            src={profileImg}
                            alt="Thiwanka Lakshan"
                            className="relative w-full h-full object-cover rounded-full border-4 border-slate-800/50 shadow-2xl hover:scale-105 transition-transform duration-500"
                        />

                        {/* Floating Tech Badge */}
                        <div className="absolute -bottom-4 -right-4 bg-slate-900/80 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-sm font-mono text-cyan-400">BackEnd Dev</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
