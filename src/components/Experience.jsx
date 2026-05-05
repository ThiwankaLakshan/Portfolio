import React from 'react';
import { motion } from 'framer-motion';
import {
    SiJavascript,
    SiNodedotjs,
    SiReact,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiDotnet,
    SiPython,
    SiDocker,
    SiGit,
    SiHtml5,
    SiCss3
} from 'react-icons/si';
import { Globe } from 'lucide-react';

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
            description: "Focusing on Full Stack Development, Data Structures, and Software Engineering principles."
        }
    ];

    const skillCategories = [
        {
            title: "Frontend & Web",
            skills: [
                { name: "React", icon: <SiReact className="w-5 h-5" />, level: "Intermediate" },
                { name: "HTML5", icon: <SiHtml5 className="w-5 h-5" />, level: "Intermediate" },
                { name: "CSS3", icon: <SiCss3 className="w-5 h-5" />, level: "Intermediate" },
                { name: "JavaScript (ES6+)", icon: <SiJavascript className="w-5 h-5" />, level: "Advanced" },
                { name: "REST APIs", icon: <Globe className="w-5 h-5" />, level: "Advanced" }
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" />, level: "Advanced" },
                { name: "Express.js", icon: <SiExpress className="w-5 h-5" />, level: "Advanced" },
                { name: "C# / .NET", icon: <SiDotnet className="w-5 h-5" />, level: "Intermediate" },
                { name: "Python", icon: <SiPython className="w-5 h-5" />, level: "Intermediate" },
                { name: "Java", icon: <span className="font-bold text-xs">Java</span>, level: "Intermediate" }
            ]
        },
        {
            title: "Database & Tools",
            skills: [
                { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" />, level: "Advanced" },
                { name: "MySQL", icon: <SiMysql className="w-5 h-5" />, level: "Advanced" },
                { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" />, level: "Intermediate" },
                { name: "Docker/Kubernetes", icon: <SiDocker className="w-5 h-5" />, level: "Intermediate" },
                { name: "Git / GitHub", icon: <SiGit className="w-5 h-5" />, level: "Advanced" }
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-slate-950">
            <div className="container mx-auto px-6 max-w-6xl">
                
                {/* Experience Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">My journey and involvement in the tech community.</p>
                    </div>
                    
                    <div className="max-w-3xl mx-auto space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="pl-6 border-l-2 border-slate-800 hover:border-cyan-500 transition-colors"
                            >
                                <span className="text-sm font-mono text-cyan-400 mb-1 block">{exp.date}</span>
                                <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                                <h4 className="text-slate-400 font-medium mb-2">{exp.company}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Section */}
                <div id="skills" className="relative scroll-mt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">My technical stack focuses on modern web and full stack development, complemented by a strong foundation in software engineering.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {skillCategories.map((category, catIndex) => (
                            <motion.div 
                                key={catIndex}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: catIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors"
                            >
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>{category.title}
                                </h3>
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="flex items-center justify-between group">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors text-cyan-400">
                                                    {skill.icon}
                                                </div>
                                                <span className="text-slate-300 font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-xs text-slate-500 font-mono bg-slate-900 px-2 py-1 rounded border border-slate-800">
                                                {skill.level}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
