import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Vice Chair - IEEE Computer Society",
            company: "IEEE Student Branch of University of Vavuniya",
            date: "Present",
            description: "Leading technical initiatives, organizing hackathons, and fostering technology adoption among students."
        },
        {
            role: "Research Presenter",
            company: "RCAICT 2025 - Research Conference",
            date: "2025",
            description: "Presented research on 'Real-Time Cattle Monitoring Using Low-Cost IoT Smart Collars'. Explored LoRa communication and environmental sensing for rural agriculture."
        },
        {
            role: "Finalist - Electronics Track",
            company: "IEEE FYP Arena 2025",
            date: "2025",
            description: "Selected as a finalist for the project 'MooMap - Real-Time Free Range Cattle System'. Competed in the Electronics, Robotics, and Automation category."
        },
        {
            role: "Student Volunteer",
            company: "IEEE Student Branch",
            date: "Present",
            description: "Organizing tech events, workshops, and fostering a community of student developers."
        },
        {
            role: "Undergraduate Student",
            company: "University of Vavuniya",
            date: "Present",
            description: "Focusing on Backend Development, Data Structures, and Software Engineering principles."
        }
    ];

    const skills = [
        "JavaScript (ES6+)", "Node.js", "React", "Express.js",
        "PostgreSQL", "MongoDB", "MySQL",
        "C#", ".NET", "Python", "Java",
        "Docker", "Git", "REST APIs"
    ];

    return (
        <section id="experience" className="py-24 bg-slate-950">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Experience Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8">Experience</h2>
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div key={index} className="pl-6 border-l-2 border-slate-800 hover:border-cyan-500 transition-colors">
                                    <span className="text-sm font-mono text-cyan-400 mb-1 block">{exp.date}</span>
                                    <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                                    <h4 className="text-slate-400 font-medium mb-2">{exp.company}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8">Technologies</h2>
                        <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span key={index} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-md text-sm border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
