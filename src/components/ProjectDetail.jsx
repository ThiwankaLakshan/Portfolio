import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    ArrowLeft, 
    Github, 
    ExternalLink, 
    Calendar, 
    User, 
    Code2, 
    Cpu, 
    Layers, 
    CheckCircle2, 
    BookOpen, 
    Server, 
    Database, 
    TrendingUp,
    ShieldCheck
} from 'lucide-react';
import {
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiDotnet,
    SiPython,
    SiFlask,
    SiTailwindcss,
    SiLeaflet,
    SiChartdotjs
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';

const techIcons = {
    // Languages & Frameworks
    "React": <SiReact className="text-cyan-400" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    "Express": <SiExpress className="text-slate-400" />,
    "PostgreSQL": <SiPostgresql className="text-blue-400" />,
    "JavaScript": <SiJavascript className="text-yellow-400" />,
    "HTML5": <SiHtml5 className="text-orange-500" />,
    "CSS3": <SiCss3 className="text-blue-500" />,
    "C#": <TbBrandCSharp className="text-purple-500 w-4 h-4" />,
    ".NET": <SiDotnet className="text-purple-400" />,
    "WindowsForms": <Layers className="text-purple-300 w-4 h-4" />,
    "Python": <SiPython className="text-yellow-500" />,
    "Flask": <SiFlask className="text-slate-300" />,
    "TailwindCSS": <SiTailwindcss className="text-cyan-400" />,
    "Leaflet": <SiLeaflet className="text-green-400" />,
    "Recharts": <SiChartdotjs className="text-pink-400" />,
    "SQL Server": <DiMsqlServer className="text-red-400 w-4 h-4" />,
    "LoRaWAN": <Cpu className="text-blue-400 w-4 h-4" />,
    "IoT": <Cpu className="text-indigo-400 w-4 h-4" />,
    "RESTful APIs": <Server className="text-slate-400 w-4 h-4" />,
    "localStorage": <Database className="text-yellow-500 w-4 h-4" />
};

const projectDetails = {
    "floodsense": {
        title: "FloodSense",
        subtitle: "Flood Prediction & Alert System",
        category: "Full Stack System",
        role: "Full Stack Developer",
        timeline: "Feb 2026 - Present",
        image: "/flood_monitoring.png",
        githubFrontend: "https://github.com/ThiwankaLakshan/FloodSense-Frontend",
        githubBackend: "https://github.com/ThiwankaLakshan/FloodSense-Backend",
        tags: ["React", "Node.js", "Express", "PostgreSQL", "Leaflet", "Recharts", "TailwindCSS"],
        overview: "FloodSense is an advanced, real-time flood monitoring and early warning system designed specifically for Sri Lanka's Western Province. Built to address the devastating impact of seasonal monsoonal floods, the system automates weather telemetry collection, runs predictive risk assessment models, and immediately alerts citizens and emergency management officials of rising danger levels.",
        problem: "Seasonal monsoons in Sri Lanka lead to severe flooding, blockages, and loss of life. Standard monitoring networks lack real-time localized forecasting and accessible visualization, meaning citizens are often surprised by floodwaters, and authorities are slow to coordinate alerts.",
        solution: "FloodSense closes this loop by integrating high-frequency OpenWeatherMap telemetry with localized elevation mappings. It processes data using a custom risk scoring engine and provides a highly reactive dashboard with visual Leaflet tracking and charts. The moment a location's risk index tips into danger, automated SMTP channels notify all subscribed users.",
        features: [
            {
                title: "Interactive Leaflet Risk Mapping",
                desc: "A responsive, color-coded geographical map illustrating risk zones (Safe, Low, Moderate, High, Critical) in Colombo and surrounding areas using GPS coordinates."
            },
            {
                title: "Rainfall & Risk Analytics",
                desc: "Beautiful charts built using Recharts to present rain accumulation trends and risk fluctuations over 24-hour, 7-day, 30-day, and 90-day intervals."
            },
            {
                title: "Rule-Based Risk Scoring Algorithm",
                desc: "A multi-factor scoring model (0-15 scale) that assesses current precipitation, location elevation metrics, seasonal patterns, and historical flood frequencies."
            },
            {
                title: "Automated Early Warning Emails",
                desc: "A background node-cron worker checks data every 30 minutes, automatically dispatching emails via Nodemailer when thresholds cross critical levels."
            },
            {
                title: "JWT-Protected Administrator Control Room",
                desc: "A secure admin panel with bcrypt hashing where coordinates, elevation baselines, and warning thresholds can be modified on the fly."
            }
        ],
        architecture: [
            {
                component: "React Frontend",
                detail: "Vite-based SPA utilizing Tailwind CSS for modern aesthetics, React Router DOM, and React Leaflet for interactive overlays."
            },
            {
                component: "Express Backend API",
                detail: "Node.js service managing location queries, user subscriptions, and API endpoints, logging diagnostics via Winston."
            },
            {
                component: "PostgreSQL & PostGIS",
                detail: "Relational database utilizing spatial data extensions to query geographic regions and log location-based historical telemetry."
            }
        ]
    },
    "moomap": {
        title: "MooMap",
        subtitle: "Free-Range Cattle Tracking System",
        category: "IoT & Data Analytics",
        role: "Backend Developer",
        timeline: "Oct 2025 - Jan 2026",
        image: "/moomap_preview.png",
        githubBackend: "https://github.com/ThiwankaLakshan",
        liveSite: "https://moomap.app",
        tags: ["Node.js", "Express", "Python", "Flask", "IoT", "LoRaWAN", "RESTful APIs"],
        overview: "MooMap is a smart, low-power agricultural technology solution for livestock tracking. Developed to support cattle farmers managing free-range herds, MooMap combines GPS tracking collars, LoRaWAN long-range radio gateways, and a Python analyzer to track cattle location, monitor animal health, and prevent stock theft.",
        problem: "Free-range cattle wander over vast unmapped terrains, leaving them vulnerable to theft, predators, or sickness that goes unnoticed. Farmers struggle to locate individual cows and lack telemetry to check on animal health in remote pastures.",
        solution: "MooMap utilizes lightweight GPS collars that transmit location coordinates and motion tracking data via LoRaWAN. The Express backend receives and catalogs these packets, while a Flask-based telemetry analyzer logs activity levels and calculates boundary behaviors (geofencing) to flag cows showing signs of disease or escape.",
        features: [
            {
                title: "Live GPS Herd Mapping",
                desc: "Displays active coordinates of all collars on a map dashboard, allowing farmers to find cattle instantly."
            },
            {
                title: "Smart Geofencing Boundaries",
                desc: "Allows farmers to draw virtual fence lines on a map, generating notifications if a collar breaches the perimeter."
            },
            {
                title: "Low-Power Telemetry Logging",
                desc: "Utilizes LoRaWAN networks to receive collar telemetry with minimal battery consumption, maximizing sensor longevity."
            },
            {
                title: "Health & Activity Classification",
                desc: "Processes step counts and temperature data via python-based analyzers to identify cattle distress, heat cycles, or signs of illness."
            }
        ],
        architecture: [
            {
                component: "Node.js / Express API",
                detail: "Handles high-throughput data streams from LoRaWAN network server integrations and acts as the primary data interface."
            },
            {
                component: "Python / Flask Analyser",
                detail: "A specialized service (`moomap-analyser`) that runs statistics and parses accelerometer telemetry to determine cow behaviors."
            },
            {
                component: "IoT Collar Hardware",
                detail: "Custom collar units carrying GPS modules, 3-axis sensors, and low-power transceivers optimized for open fields."
            }
        ]
    },
    "todo-app": {
        title: "To Do App",
        subtitle: "Advanced Task Management Application",
        category: "Frontend Development",
        role: "Frontend Developer",
        timeline: "Nov 2025",
        image: "/todo_preview.png",
        githubBackend: "https://github.com/ThiwankaLakshan/To-Do-App",
        liveSite: "https://to-do-app-thiwanka.vercel.app/",
        tags: ["JavaScript", "HTML5", "CSS3", "localStorage"],
        overview: "This Advanced To-Do application is a lightweight, responsive task manager designed for maximum ease-of-use and productivity. Built entirely with vanilla web technologies, it features data persistence, scheduling, and progress analytics to help users manage their days efficiently.",
        problem: "Modern task managers are often bloated, slow, and require user accounts that store personal schedules in cloud databases. Users need a lightning-fast, privacy-respecting offline dashboard that operates entirely inside the browser.",
        solution: "The To-Do App runs entirely client-side using Vanilla JavaScript. It leverages the browser's native localStorage API to secure schedules locally. Key features include active progress tracking, target dates/times, status indicators, and clean CSS animations.",
        features: [
            {
                title: "Full Task CRUD Operations",
                desc: "Users can effortlessly create, edit titles and descriptions, delete, and toggle task items on the fly."
            },
            {
                title: "Active Progress Dashboard",
                desc: "An dynamic, gradient progress bar that calculates and visualizes task completion percentage in real time."
            },
            {
                title: "Deadline Scheduler",
                desc: "Built-in calendar and time selector fields that apply red highlight tags to approaching deadlines or overdue items."
            },
            {
                title: "localStorage Persistence",
                desc: "Instantly serializes the list array to browser storage, ensuring schedules survive browser crashes and tab closures."
            },
            {
                title: "Micro-Interactions & Confetti",
                desc: "Smooth CSS transitions and a full canvas-confetti celebration when users complete 100% of their listed tasks."
            }
        ],
        architecture: [
            {
                component: "Vanilla JavaScript (ES6+)",
                detail: "App logic, localStorage synchronization, date evaluations, and DOM manipulation scripts written without external libraries."
            },
            {
                component: "HTML5 & CSS3 Utility Layers",
                detail: "Responsive viewport configuration, flexbox layout formatting, and transitions implementing modern styling aesthetics."
            },
            {
                component: "Canvas Confetti Integration",
                detail: "A high-performance particle animation library used to deliver satisfying visual rewards upon list completion."
            }
        ]
    },
    "ticket-booking": {
        title: "Online Ticket Booking System",
        subtitle: "Desktop Ticketing & Reservation Platform",
        category: "Desktop Application Development",
        role: "C# .NET Developer",
        timeline: "May 2025 - Jul 2025",
        image: "/train_cricket_preview.png",
        githubBackend: "https://github.com/ThiwankaLakshan/Online-Ticket-Selling-App",
        tags: ["C#", ".NET", "WindowsForms", "SQL Server"],
        overview: "This Online Ticket Booking System is a standalone desktop application built to streamline offline and online seat reservations. Combining an interactive visual grid map with sales reporting tools, the software manages seat inventories for passenger trains and cricket stadiums.",
        problem: "Ticket desks at stadiums and train terminals suffer from latency lags and database sync drops. They need a highly reliable, high-speed interface to select seats, check availability, and issue tickets without depending on external web connections.",
        solution: "A local C# application designed using Windows Forms and the .NET framework. It utilizes a SQL database to track transactions and inventory, and provides ticket agents with a point-and-click seat editor to reserve tickets in milliseconds.",
        features: [
            {
                title: "Visual Seat Allocation Editor",
                desc: "A graphical grid system letting agents click available seats, view reservations, and select multiple seats in real time."
            },
            {
                title: "Multi-domain Ticket Dispatch",
                desc: "Unified framework capable of managing ticketing inventories for both public railway trains and stadium sports matches."
            },
            {
                title: "Audit Logs & Sales Reporting",
                desc: "Automatically logs transactions, tracks cashier shifts, calculates revenue totals, and prints detailed daily summaries."
            },
            {
                title: "Offline Standalone Reliability",
                desc: "Direct database storage ensures high-speed transaction speeds and keeps the counter active during network outages."
            }
        ],
        architecture: [
            {
                component: "C# Language & .NET Framework",
                detail: "Runs core booking logic, user authentication layers, object mappings, and controls system-level UI instances."
            },
            {
                component: "Windows Forms UI Engine",
                detail: "Renders the desktop layout, seat selection grids, administration modals, and reporting tab interfaces."
            },
            {
                component: "SQL Database Backend",
                detail: "Maintains relational transaction logs, train seat grids, stadium ticket levels, and administrator credentials."
            }
        ]
    }
};

const ProjectDetail = ({ slug, onBack }) => {
    const project = projectDetails[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-6">
                <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen bg-slate-950 text-slate-100 font-inter pb-24"
        >
            {/* Header / Sub Nav */}
            <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 py-4">
                <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
                    <button 
                        onClick={onBack}
                        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </button>
                    <div className="flex gap-4">
                        {project.githubFrontend && (
                            <a 
                                href={project.githubFrontend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-white transition-colors"
                                title="Frontend GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {project.githubBackend && (
                            <a 
                                href={project.githubBackend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-white transition-colors"
                                title={project.githubFrontend ? "Backend GitHub" : "GitHub Repository"}
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {project.liveSite && (
                            <a 
                                href={project.liveSite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-cyan-400 transition-colors"
                                title="Live Site"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Banner Section */}
            <div className="relative border-b border-slate-900 overflow-hidden bg-slate-900 py-16 md:py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-10" />
                
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

                {project.image && (
                    <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 md:opacity-40 hidden md:block z-0">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover object-left"
                        />
                    </div>
                )}

                <div className="container mx-auto px-6 max-w-6xl relative z-20">
                    <span className="text-cyan-500 font-semibold text-xs uppercase tracking-widest">{project.category}</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mt-3 mb-4 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl">
                        {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-8">
                        {project.tags.map(tag => (
                            <span 
                                key={tag} 
                                className="flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800 backdrop-blur-sm"
                            >
                                {techIcons[tag] && React.cloneElement(techIcons[tag], { className: "w-3.5 h-3.5" })}
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Case Study Content */}
            <div className="container mx-auto px-6 max-w-6xl mt-12 md:mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Main Columns */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Executive Summary */}
                        <section className="bg-slate-900/20 p-8 rounded-2xl border border-slate-900 backdrop-blur-sm">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-cyan-400" />
                                Project Overview
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                                {project.overview}
                            </p>
                        </section>

                        {/* Problem & Solution */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-900/80">
                                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-red-400" />
                                    The Challenge
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {project.problem}
                                </p>
                            </div>
                            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-900/80">
                                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-green-400" />
                                    The Solution
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>
                        </div>

                        {/* Features */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                                Key Capabilities & Features
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                {project.features.map((feature, idx) => (
                                    <div 
                                        key={idx}
                                        className="flex gap-4 p-5 rounded-xl bg-slate-900/30 border border-slate-900 hover:border-slate-800 transition-colors"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 text-sm font-bold border border-cyan-850">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-white mb-1">{feature.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Technical Architecture */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <Code2 className="w-5 h-5 text-cyan-400" />
                                System Architecture
                            </h2>
                            <div className="space-y-4">
                                {project.architecture.map((layer, idx) => (
                                    <div 
                                        key={idx}
                                        className="p-5 rounded-xl border border-slate-900 bg-slate-950 flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
                                    >
                                        <div className="md:w-1/3 flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
                                            <div className="w-2 h-2 rounded-full bg-cyan-400" />
                                            {layer.component}
                                        </div>
                                        <div className="md:w-2/3 text-slate-400 text-sm leading-relaxed">
                                            {layer.detail}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Columns */}
                    <div className="space-y-8">
                        {/* Meta Summary Card */}
                        <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-6 backdrop-blur-sm">
                            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">Project Metadata</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <User className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="block text-xs text-slate-500 font-medium uppercase">My Role</span>
                                        <span className="text-sm font-semibold text-slate-200">{project.role}</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Calendar className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="block text-xs text-slate-500 font-medium uppercase">Timeline</span>
                                        <span className="text-sm font-semibold text-slate-200">{project.timeline}</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="block text-xs text-slate-500 font-medium uppercase">System Context</span>
                                        <span className="text-sm font-semibold text-slate-200">Production Ready</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Actions */}
                        <div className="space-y-3">
                            {project.githubFrontend && (
                                <a 
                                    href={project.githubFrontend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white hover:bg-slate-800 hover:border-slate-700 transition-all font-semibold text-sm text-center shadow-lg"
                                >
                                    <Github className="w-5 h-5" />
                                    Frontend Source Code
                                </a>
                            )}
                            {project.githubBackend && (
                                <a 
                                    href={project.githubBackend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white hover:bg-slate-800 hover:border-slate-700 transition-all font-semibold text-sm text-center shadow-lg"
                                >
                                    <Github className="w-5 h-5" />
                                    {project.githubFrontend ? "Backend Source Code" : "Source Code Repository"}
                                </a>
                            )}
                            {project.liveSite && (
                                <a 
                                    href={project.liveSite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-600 text-white hover:bg-cyan-500 transition-all font-semibold text-sm text-center shadow-lg shadow-cyan-950/40"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Launch Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
