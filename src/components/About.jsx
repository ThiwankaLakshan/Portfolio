import React from 'react';
import { motion } from 'framer-motion';

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
                                Hello! I'm <span className="text-slate-200 font-medium">Thiwanka</span>, a dedicated software enthusiast currently pursuing my degree at the <a href="https://vau.ac.lk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">University of Vavuniya</a>.
                            </p>
                            <p>
                                My journey involves building end-to-end applications, from intuitive user interfaces to robust backend architectures. I enjoy both crafting seamless user experiences and the logic behind the scenes—making sure APIs are fast, databases are optimized, and applications are secure.
                            </p>
                            <p>
                                When I'm not coding, you can find me volunteering with <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">IEEE</a>, organizing tech events, or exploring the latest in <span className="text-cyan-400">emerging technologies</span>.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-800">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
                            <h3 className="text-xl font-bold text-white mb-6 relative z-10">My Values</h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    { title: "User-Centric Solutions", desc: "Designing intuitive, seamless experiences by putting the user's needs at the center of every decision." },
                                    { title: "Analytical Problem-Solving", desc: "Breaking down complex technical challenges into manageable components to build robust, high-performance systems." },
                                    { title: "Collaborative Leadership", desc: "Leveraging my experience in team management to foster clear communication and ensure project goals are met efficiently." },
                                    { title: "Code Excellence", desc: "Prioritizing clean, maintainable, and scalable architecture to ensure long-term stability and security." },
                                    { title: "Continuous Learning", desc: "Staying at the forefront of modern tech and cloud computing to bring the most effective tools to every project." }
                                ].map((value, idx) => (
                                    <li key={idx} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-cyan-400 font-bold text-sm border border-slate-700">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">{value.title}</h4>
                                            <p className="text-sm text-slate-400">{value.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
