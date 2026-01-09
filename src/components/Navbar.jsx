import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <a href="#" className="text-2xl font-bold tracking-tighter text-slate-100">
                    TL<span className="text-cyan-500">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="/resume.pdf" className="px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-500/50 rounded-md hover:bg-cyan-500/10 transition-colors">
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-slate-300 hover:text-white"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-4 flex flex-col items-center">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-300 hover:text-cyan-400"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
