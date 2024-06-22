'use client'

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const AboutUs = () => {
    const logoImage = './BluBee.png';
    const [menuOpen, setMenuOpen] = useState(false);

    const menuVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="bg-custom-gradient min-h-screen">
            <nav className='flex items-center justify-between p-5 md:ml-10'>
                <Link href="/">
                    <div className='flex items-center'>
                        <img src={logoImage} alt="BluBee Logo" className='w-12 h-12 mr-1' />
                        <h1>
                            <span className='text-3xl md:text-5xl font-bold'>BluBee</span>
                            <span className='text-xl md:text-3xl'>.AI</span>
                        </h1>
                    </div>
                </Link>
                <div className='md:hidden'>
                    <button onClick={() => setMenuOpen(!menuOpen)} className='text-white focus:outline-none'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            {menuOpen ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                            ) : (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                            )}
                        </svg>
                    </button>
                </div>
                <div className={`md:flex hidden md:space-x-10 text-lg md:text-xl font-medium`}>
                    <Link href="/" className='block py-2 md:py-0'>Home</Link>
                    <Link href="/contact" className='block py-2 md:py-0'>Contact Us</Link>
                    <Link href="/about" className='block py-2 md:py-0 font-extrabold'>Founders Note</Link>
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
                        className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-700 bg-opacity-90 text-white text-2xl'
                    >
                        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-white">
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

            <div className="w-full md:w-[80vw] mx-auto py-20 px-5 md:px-0 font-medium text-lg">
                <h1 className="text-center text-3xl md:text-4xl font-semibold mb-10">Founder's Note</h1>
                <span className="font-semibold text-2xl block md:text-3xl">Hello!</span>
                <br /><br />
                Welcome to BluBee.ai, where your career aspirations take flight with the help of cutting-edge AI technology. My name is Sunny Chawla, and I am the founder of BluBee.ai with a prime vision: to empower oneself to navigate through the career path with confidence and ease.
                <br /><br />
                Having navigated many twists and turns in my own professional journey, I understand the challenges and uncertainties that come with career progression. That’s why at BluBee.ai, we are passionate about offering personalized, AI-driven solutions that help demystify the job market and align skills with fulfilling opportunities.
                <br /><br />
                Our mission is simple yet ambitious—to provide each one with insights, tools, and support that make a real difference in their career. Whether you're considering a job change, seeking to upskill, or exploring new industries, BluBee.ai is here to guide at every step of the way.
                <br /><br />
                A platform harnesses the power of sophisticated algorithms to deliver career advice that’s tailored just for you. From job matching and skill assessment to market trends and growth opportunities, we strive to equip you with everything you need to be informed for making decisions about your future.
                <br /><br />
                Thank you for exploring BluBee.ai as your career partner. We will be excited to be part of your career journey and can't wait to see where your career takes you.
                <br /><br />
                <span className="font-semibold">Warm regards,</span>
                <br />
                Sunny Chawla<br />
                Founder, BluBee.ai
            </div>
        </div>
    );
};

export default AboutUs;
