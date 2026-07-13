import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // EmailJS Configuration
        // Replace these with your actual EmailJS credentials
        const serviceId = 'service_3hypeff';
        const templateId = 'template_kcx78pn';
        const publicKey = 'XnjsRM2qxKvZZ7t9f';

        try {
            const result = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Thiwanka', // Your name
                },
                publicKey
            );

            console.log('Email sent successfully:', result);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Email send error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="section-container relative z-10 px-6 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                >
                    {/* Left Column: Contact Form */}
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send me a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors text-slate-900 dark:text-white"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors text-slate-900 dark:text-white"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors text-slate-900 dark:text-white resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl text-green-800 dark:text-green-300">
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl text-red-800 dark:text-red-300">
                                    ✗ Failed to send message. Please try again or email me directly at hello@thiwankalakshan.dev
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-8">
                            <span className="text-cyan-500 font-semibold tracking-wider text-sm uppercase">Let's Connect</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-slate-900 dark:text-white">
                                Get In Touch
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                                I'm currently looking for new opportunities and would love to hear from you.
                                Whether you have a question or just want to say hi, my inbox is always open!
                            </p>
                        </div>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</h4>
                                    <a href="mailto:hello@thiwankalakshan.dev" className="text-lg font-semibold text-slate-900 dark:text-white hover:text-cyan-500 transition-colors">
                                        hello@thiwankalakshan.dev
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</h4>
                                    <p className="text-lg font-semibold text-slate-900 dark:text-white">
                                        Anuradhapura, Sri Lanka
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/ThiwankaLakshan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/thiwankalakshan07/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                                >
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
