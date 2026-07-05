import React from 'react';
import { motion } from 'framer-motion';
import { Github, Folder, ExternalLink, ArrowRight, Globe, Cpu } from 'lucide-react';
import {
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiDotnet
} from 'react-icons/si';

const tagIcons = {
    "React": <SiReact />,
    "Node.js": <SiNodedotjs />,
    "Express": <SiExpress />,
    "PostgreSQL": <SiPostgresql />,
    "IoT": <Cpu />,
    "RESTful APIs": <Globe />,
    "JavaScript": <SiJavascript />,
    "HTML5": <SiHtml5 />,
    "CSS3": <SiCss3 />,
    ".NET": <SiDotnet />
};

const Projects = () => {
    const projects = [
        {
            slug: "floodsense",
            title: "FloodSense - Flood Prediction & Alert System",
            description: "A complete real-time flood prediction and alert system. The frontend provides a visual analytics while the backend fetch weather API data and calculate flood risk forecasting.",
            tags: ["React", "Node.js", "Express", "PostgreSQL"],
            githubFrontend: "https://github.com/ThiwankaLakshan/FloodSense-Frontend",
            githubBackend: "https://github.com/ThiwankaLakshan/FloodSense-Backend",
            liveSite: "https://floodsense-sl.vercel.app",
            image: "/flood_monitoring.png",
        },
        {
            slug: "moomap",
            title: "MooMap - Free-Range Cattle Tracking System",
            description: "Real-time free-range cattle monitoring system using IoT smart collars and LoRaWAN communication.",
            tags: ["Node.js", "Express", "IoT", "RESTful APIs"],
            githubBackend: "https://github.com/ThiwankaLakshan",
            liveSite: "https://moomap.app",
            image: "/moomap_preview.png",
        },
        {
            slug: "todo-app",
            title: "To Do App",
            description: "Streamlined task management web application focusing on productivity, responsiveness, and ease of use.",
            tags: ["JavaScript", "HTML5", "CSS3"],
            githubBackend: "https://github.com/ThiwankaLakshan/To-Do-App",
            liveSite: "https://to-do-app-thiwanka.vercel.app/",
            image: "/todo_preview.png",
        },
        {
            slug: "ticket-booking",
            title: "Online Ticket Booking System",
            description: "Desktop ticketing solution offering robust sales management, seat allocation, and reporting features for trains and cricket matches.",
            tags: ["C#", ".NET", "WindowsForms"],
            githubBackend: "https://github.com/ThiwankaLakshan/Online-Ticket-Selling-App",
            image: "/train_cricket_preview.png",
        }
    ];

    return (
        <section id="projects" className="py-24 bg-slate-950">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Work</h2>
                        <p className="text-slate-400 max-w-xl">A collection of projects showcasing my journey in full-stack development and system architecture.</p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                            onClick={() => {
                                window.location.hash = `#/project/${project.slug}`;
                            }}
                        >
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-slate-800 bg-slate-900">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <>
                                        {/* Gradient Fallback (Placeholder for Image) */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.fallbackGradient} opacity-50`}></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Folder size={64} className="text-slate-700/50 group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                    </>
                                )}

                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/70 transition-colors z-10"></div>

                                {/* Overlay Button(s) */}
                                <div 
                                    className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {project.liveSite && (
                                        <a
                                            href={project.liveSite}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600/90 text-white border border-cyan-500/50 backdrop-blur-md hover:bg-cyan-500 transition-colors text-sm font-semibold shadow-lg shadow-cyan-950/20"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View Site
                                        </a>
                                    )}

                                    {project.githubFrontend ? (
                                        <div className="flex flex-row gap-3">
                                            <a
                                                href={project.githubFrontend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/70 text-white border border-white/10 backdrop-blur-md hover:bg-black/90 transition-colors text-xs font-medium"
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                Frontend
                                            </a>
                                            <a
                                                href={project.githubBackend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/70 text-white border border-white/10 backdrop-blur-md hover:bg-black/90 transition-colors text-xs font-medium"
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                Backend
                                            </a>
                                        </div>
                                    ) : (
                                        project.githubBackend && (
                                            <a
                                                href={project.githubBackend}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/70 text-white border border-white/10 backdrop-blur-md hover:bg-black/90 transition-colors text-sm font-medium"
                                            >
                                                <Github className="w-4 h-4" />
                                                View Code
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                                <span>{project.title}</span>
                                <ArrowRight size={18} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                            </h3>
                            <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 relative z-30 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 hover:bg-slate-800 transition-all cursor-pointer hover:scale-105 shadow-sm hover:shadow-cyan-500/20">
                                        {tagIcons[tag] && React.cloneElement(tagIcons[tag], { className: "w-3.5 h-3.5" })}
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="text-cyan-500 group-hover:text-cyan-400 font-medium text-xs flex items-center gap-1 transition-colors">
                                View Details & Case Study
                                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://github.com/ThiwankaLakshan?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-slate-800 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 hover:border-cyan-500/50 transition-all group"
                    >
                        View More on GitHub
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-cyan-400" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;
