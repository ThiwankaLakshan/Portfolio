import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Layout, Terminal } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-900/50">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">About Me</h2>
                        <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                            <p>
                                Hello! I'm <span className="text-slate-200 font-medium">Thiwanka</span>, a dedicated software enthusiast currently pursuing my degree at the <span className="text-cyan-400">University of Vavuniya</span>.
                            </p>
                            <p>
                                My journey involves deep-diving into backend architectures and playing with data. I enjoy the logic behind the scenes—making sure APIs are fast, databases are optimized, and servers are secure.
                            </p>
                            <p>
                                When I'm not coding, you can find me volunteering with <span className="text-blue-400">IEEE</span>, organizing tech events, or exploring the latest in cloud computing.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {[
                            { icon: Server, title: "Backend Dev", desc: "Node.js, Express, C#" },
                            { icon: Database, title: "Databases", desc: "PostgreSQL, MongoDB" },
                            { icon: Terminal, title: "DevOps", desc: "Docker, Git, CI/CD" },
                            { icon: Layout, title: "Frontend", desc: "React, Tailwind CSS" }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-slate-800 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                                <item.icon className="w-8 h-8 text-cyan-400 mb-4" />
                                <h3 className="text-lg font-bold text-slate-200 mb-1">{item.title}</h3>
                                <p className="text-sm text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
