'use client'

import { useState } from 'react';
import { supabase } from '../supabaseClient';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const ContactUs = () => {
    const logoImage = './BluBee.png';

    const [formData, setFormData] = useState({
        uname: '',
        email: '',
        phone: '',
        message: '',
    });
    const [menuOpen, setMenuOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase
                .from('contacts')
                .insert([formData]);
            if (error) throw error;
            alert('Thank you for contacting us! We have received your message.');
        } catch (error) {
            console.error('Error submitting form:', error.message);
            alert('Error submitting form. Please try again.');
        }
    };

    const menuVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="bg-custom-gradient text-white min-h-screen">
            <div className="bg-black bg-opacity-50 min-h-screen">
                <nav className="flex items-center justify-between p-4">
                    <Link href="/">
                        <div className="flex items-center">
                            <img src={logoImage} alt="BluBee Logo" className="w-12 h-12 mr-1" />
                            <h1>
                                <span className="text-3xl md:text-5xl font-bold">BluBee</span>
                                <span className="text-xl md:text-3xl">.AI</span>
                            </h1>
                        </div>
                    </Link>
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex md:space-x-10 text-lg md:text-xl font-medium">
                        <Link href="/" className="block py-2 md:py-0">Home</Link>
                        <Link href="/contact" className="block py-2 md:py-0 font-extrabold">Contact Us</Link>
                        <Link href="/about" className="block py-2 md:py-0">Founders Note</Link>
                    </div>
                </nav>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={menuVariants}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-700 bg-opacity-90 text-white text-2xl"
                        >
                            <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 text-white">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="space-y-8 text-center text-white text-2xl">
                                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link><br/><br/>
                                <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link><br/><br/>
                                <Link href="/about" onClick={() => setMenuOpen(false)}>Founders Note</Link><br/><br/>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="w-full md:w-[60%] mx-auto space-y-8 my-3 p-5">
                    <h1 className="text-4xl font-semibold text-center">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-3">
                            <label htmlFor="uname" className="text-lg font-medium">Full name: <span className="text-red-600">*</span></label><br/>
                            <input
                                type="text"
                                name="uname"
                                id="uname"
                                value={formData.uname}
                                onChange={handleChange}
                                maxLength={100}
                                placeholder="e.g., John Hammond"
                                className="px-5 py-2 rounded-xl w-full xl:w-[45%] text-black"
                                required
                            />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="email" className="text-lg font-medium">Email Address: <span className="text-red-600">*</span></label><br/>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                maxLength={100}
                                placeholder="e.g., john@example.com"
                                className="px-5 py-2 rounded-xl w-full xl:w-[45%] text-black"
                                required
                            />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="phone" className="text-lg font-medium">Phone Number:</label><br/>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                maxLength={100}
                                placeholder="e.g., +91123456789"
                                className="px-5 py-2 rounded-xl w-full xl:w-[45%] text-black"
                            />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="message" className="text-lg font-medium">Message: <span className="text-red-600">*</span></label><br/>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                maxLength={2000}
                                placeholder="Type your message here..."
                                className="px-5 py-2 rounded-xl w-full xl:w-[45%] h-32 text-black"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded-xl">
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className="pb-10">
                        <p className="font-medium text-xl">Alternatively Email:</p>
                        <a href="mailto: sunny@blubee.ai" target="_blank">sunny@blubee.ai</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
