import React from 'react';
import { motion } from 'framer-motion';
import { Github, Folder, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "FloodSense - Monitoring System",
            description: "A complete real-time flood prediction and alert system. The frontend provides a dashboard while the backend manages sensor data nodes efficiently.",
            tags: ["React", "Node.js", "Express", "PostgreSQL"],
            githubFrontend: "https://github.com/ThiwankaLakshan/FloodSense-Frontend",
            githubBackend: "https://github.com/ThiwankaLakshan/FloodSense-Backend",
            image: "/flood_monitoring.png",
        },
        {
            title: "MooMap",
            description: "Real-time free range cattle monitoring system using IoT smart collars and LoRa communication.",
            tags: ["Node.js", "Express", "IoT", "APIs"],
            githubBackend: "https://github.com/ThiwankaLakshan",
            liveSite: "https://www.moomap.app/",
            image: "/moomap_preview.png",
        },
        {
            title: "To Do App",
            description: "Streamlined task management web application focusing on productivity, responsiveness, and ease of use.",
            tags: ["JavaScript", "HTML5", "CSS3"],
            githubBackend: "https://github.com/ThiwankaLakshan/To-Do-App",
            liveSite: "https://to-do-app-thiwanka.vercel.app/",
            image: "/todo_preview.png",
        },
        {
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
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3">
                                    {project.githubFrontend ? (
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <a 
                                                href={project.githubFrontend} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/70 text-white border border-white/10 backdrop-blur-md hover:bg-black/90 transition-colors text-sm"
                                            >
                                                <Github className="w-4 h-4" />
                                                Frontend Code
                                            </a>
                                            <a 
                                                href={project.githubBackend} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/70 text-white border border-white/10 backdrop-blur-md hover:bg-black/90 transition-colors text-sm"
                                            >
                                                <Github className="w-4 h-4" />
                                                Backend Code
                                            </a>
                                        </div>
                                    ) : project.liveSite ? (
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <a 
                                                href={project.liveSite} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600/90 text-white border border-cyan-500/50 backdrop-blur-md hover:bg-cyan-500 transition-colors text-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                View Site
                                            </a>
                                            <a 
                                                href={project.githubBackend} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/70 text-white border border-white/10 backdrop-blur-md hover:bg-black/90 transition-colors text-sm"
                                            >
                                                <Github className="w-4 h-4" />
                                                View Code
                                            </a>
                                        </div>
                                    ) : (
                                        <a 
                                            href={project.githubBackend} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/70 text-white border border-white/10 backdrop-blur-md hover:bg-black/90 transition-colors"
                                        >
                                            <Github className="w-5 h-5" />
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs text-slate-500 font-mono bg-slate-900 px-2 py-1 rounded border border-slate-800">
                                        #{tag.replace(/\s+/g, '')}
                                    </span>
                                ))}
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
