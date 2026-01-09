import React from 'react';
import { motion } from 'framer-motion';
import { Github, Folder, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "FloodSense-Backend",
            description: "Real-time flood monitoring/alert system for Western Province. Manages sensor data nodes efficiently.",
            tags: ["Node.js", "PostgreSQL", "React", "Express"],
            github: "https://github.com/ThiwankaLakshan/FloodSense-Backend",
        },
        {
            title: "Online Ticket System",
            description: "Desktop ticketing solution offering robust sales management and reporting features.",
            tags: ["C#", "Windows Forms", ".NET"],
            github: "https://github.com/ThiwankaLakshan/Online-Ticket-Selling-App",
        },
        {
            title: "To-Do Manager",
            description: "Streamlined task management app focusing on productivity and ease of use.",
            tags: ["JavaScript", "HTML5", "CSS3"],
            github: "https://github.com/ThiwankaLakshan/To-Do-App",
        },
        {
            title: "Portfolio v1",
            description: "This portfolio website, built with React and Tailwind CSS.",
            tags: ["React", "Tailwind", "Framer Motion"],
            github: "https://github.com/ThiwankaLakshan",
        }
    ];

    return (
        <section id="projects" className="py-24 bg-slate-950">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card group hover:-translate-y-1"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                    <Folder size={28} />
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 rounded-full border border-cyan-900/50">
                                        {tag}
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
                    className="mt-12 text-center"
                >
                    <a
                        href="https://github.com/ThiwankaLakshan?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/30 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all group"
                    >
                        View More Projects
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
