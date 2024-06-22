'use client'

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const bgImage = './Rocket_Image.jpeg';
  const logoImage = './BluBee.png';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const res = await fetch('api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setMessage('Successfully joined the waitlist!');
    } else {
      setMessage('Failed to join the waitlist. Please try again.');
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-cover bg-center min-h-screen relative" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <nav className='relative flex items-center justify-between p-5 md:ml-10 z-10'>
        <div className='flex items-center'>
          <img src={logoImage} alt="BluBee Logo" className='w-12 h-12 mr-1' />
          <h1>
            <span className='text-3xl md:text-5xl font-bold text-white'>BluBee</span>
            <span className='text-xl md:text-3xl text-white'>.AI</span>
          </h1>
        </div>
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
        <div className={`hidden md:flex md:space-x-10 text-lg md:text-xl font-medium text-white`}>
          <Link href="/" className='block py-2 md:py-0 font-extrabold'>Home</Link>
          <Link href="/contact" className='block py-2 md:py-0'>Contact Us</Link>
          <Link href="/about" className='block py-2 md:py-0'>Founders Note</Link>
        </div>
      </nav>
      {menuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-700 bg-opacity-90 text-white text-2xl'
        >
          <button onClick={() => setMenuOpen(false)} className='absolute top-5 right-5 text-white focus:outline-none'>
            <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
          <Link href="/" className='py-2' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/contact" className='py-2' onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link href="/about" className='py-2' onClick={() => setMenuOpen(false)}>Founders Note</Link>
        </motion.div>
      )}
      <div className='relative z-10 flex flex-col md:flex-row mt-10 md:mt-20 p-5'>
        <div>
          <div className='mb-10'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-5'>LAUNCHING SOON</h1>
            <p className='text-white font-medium text-lg md:text-xl'>An <span className='text-yellow-500'>AI-powered</span> career partner</p>
            <p className='text-white font-medium text-lg md:text-xl'>Your co-working partner</p>
          </div>
          <form onSubmit={handleSubmit} className='space-y-5'>
            <input
              type="email"
              placeholder='Enter your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='px-5 py-3 md:py-5 rounded-lg w-full md:w-96 bg-[#EEEEEE] placeholder-[#524C42]'
              required
            /><br/>
            <button type='submit' className='bg-blue-600 text-white font-medium px-10 py-3 rounded-full text-lg md:text-2xl'>JOIN THE WAITLIST</button>
            <h4 className='text-white font-medium text-lg md:text-xl'>So, what are you waiting for?</h4>
            <p className='text-white w-full md:w-80 font-medium'>{message}</p>
          </form>
        </div>
        <div className='mt-10 md:mt-0 md:ml-auto mr-2 space-y-3'>
          <h2 className='text-white font-semibold text-lg md:text-xl'>Why you should Choose Us?</h2>
          <ul className='text-white text-md md:text-lg space-y-2'>
            <li><span className='text-yellow-500 font-medium'>Personalized Career Guidance:</span> Our AI tailors career advice specifically to your skills and interests.</li>
            <li><span className='text-yellow-500 font-medium'>Real-Time Industry Trends:</span> Stay updated with the latest career opportunities and market demands.</li>
            <li><span className='text-yellow-500 font-medium'>Comprehensive Resource Access:</span> Get exclusive access to expert articles, webinars, and courses.</li>
            <li><span className='text-yellow-500 font-medium'>Interactive Support System:</span> Engage with our AI chat assistant for instant answers and support.</li>
          </ul>
          <div className='flex items-center justify-center mt-5'>
            <iframe
              src="https://www.youtube.com/embed/2Cr-1nMpPYA?controls=0&showinfo=0&fs=1&iv_load_policy=3&modestbranding=0"
              allowFullScreen
              title="Embedded YouTube Video"
              className='w-full md:w-[50%] h-[25vh] rounded-xl'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
