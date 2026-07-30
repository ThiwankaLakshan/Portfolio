import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, ArrowRight, Users, Calendar } from 'lucide-react';

const Publications = () => {
    const publications = [
        {
            title: "Real-Time Cattle Monitoring Using Low-Cost IoT Smart Collars with LoRa Communication in Sri Lanka's Dry Zones",
            authors: [
                "Udapola, W.A.K.B.",
                "Ravichandran, R.",
                "Imalka Randev, K.T.",
                "Shashika Theekshana, V.P.",
                "Roshan, S.",
                "Nanduni Sanjana Wanniarachchi, D.",
                "Yohan Shanuka, J.A.D.",
                "Silva, K.C.N.A.",
                "Bandara, S.M.S.G.T.L. (Thiwanka Lakshan)"
            ],
            conference: "Research Conference on Advances in Information and Communication Technology (RCAICT 2025)",
            date: "2025",
            institution: "Faculty of Technological Studies, University of Vavuniya, Sri Lanka",
            abstract: "A research study detailing the design, implementation, and deployment of a low-cost, low-power GPS and temperature tracking collar system for free-range cattle in rural Sri Lanka. Utilizing LoRaWAN networks to overcome remote communication barriers and Flask-based activity analysis to monitor health patterns and support local cattle farmers.",
            paperLink: "https://drr.vau.ac.lk/handle/123456789/1355",
            caseStudySlug: "moomap-research"
        }
    ];

    return (
        <section id="publications" className="py-24 bg-transparent relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Publications & Research</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Academic research and publications detailing my work in Internet of Things (IoT), systems architecture, and software development.</p>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                                            Conference Paper
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                                    <Calendar className="w-4 h-4 text-cyan-400" />
                                    <span>{pub.date}</span>
                                </div>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors leading-snug">
                                {pub.title}
                            </h3>

                            {/* Authors */}
                            <div className="flex items-start gap-2.5 mb-4 text-slate-400 text-sm">
                                <Users className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-semibold text-slate-300">Authors: </span>
                                    {pub.authors.map((author, idx) => {
                                        const isUser = author.includes("Bandara, S.M.S.G.T.L.") || author.includes("Thiwanka Lakshan");
                                        return (
                                            <span key={idx}>
                                                <span className={isUser ? "text-cyan-400 font-bold underline decoration-cyan-500/50" : ""}>
                                                    {author}
                                                </span>
                                                {idx < pub.authors.length - 1 ? ", " : ""}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="text-sm text-slate-400 mb-4">
                                <span className="font-semibold text-slate-300">Venue: </span>
                                <span className="text-slate-300">{pub.conference}</span>
                                <span className="block text-xs text-slate-500 mt-0.5">{pub.institution}</span>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-sm font-semibold text-slate-300 mb-2">Abstract Summary</h4>
                                <p className="text-slate-400 text-sm leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-900">
                                    {pub.abstract}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {pub.caseStudySlug && (
                                    <button
                                        onClick={() => {
                                            window.location.hash = `#/project/${pub.caseStudySlug}`;
                                        }}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600/90 text-white border border-cyan-500/50 hover:bg-cyan-500 transition-all text-sm font-semibold cursor-pointer shadow-lg shadow-cyan-950/20"
                                    >
                                        View Research Details
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                )}
                                {pub.paperLink && (
                                    <a
                                        href={pub.paperLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-sm font-semibold"
                                    >
                                        Read Paper
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
