'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
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

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
      <nav className='flex flex-row'>
        <div className='flex flex-row ml-10 pt-5'>
          <img src={logoImage} alt="BluBee Logo" className='w-12 h-12 mr-1' />
          <h1><span className='text-5xl font-bold text-white'>BluBee</span><span className='text-3xl text-white'>.AI</span></h1>
        </div>
        <div className='space-x-10 text-xl font-medium text-white pt-7 ml-auto mr-10'>
          <Link href="/" className='font-extrabold'>Home</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/about">About Us</Link>
        </div>
      </nav>
      <div className='flex flex-row mt-20'>
        <div>
          <div className='m-10'>
            <h1 className='text-6xl font-bold text-white mb-5'>LAUNCHING SOON</h1>
            <p className='text-white font-medium text-xl'>An <span className='text-yellow-500'>AI-powered</span> career partner</p>
            <p className='text-white font-medium text-xl'>Your co-working partner</p>
          </div>
          <form onSubmit={handleSubmit} className='ml-10 space-y-5'>
            <input
              type="email"
              placeholder='Enter your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='px-5 py-5 rounded-lg w-96 bg-[#EEEEEE] placeholder-[#524C42]'
              required
            />
            <br />
            <button type='submit' className='bg-blue-600 text-white font-medium px-10 py-3 rounded-full text-2xl'>JOIN THE WAITLIST</button>
            <h4 className='text-white font-medium text-xl'>So, what are you waiting for?</h4>
            <p className='text-white w-80 font-medium'>{message}</p>
          </form>
        </div>
        <div className='ml-auto mr-2 space-y-3 mt-10'>
          <h2 className='text-white font-semibold text-xl '>Why you should Choose Us?</h2>
          <ul className='text-white text-lg'>
            <li><span className='text-yellow-500 font-medium'>Personalized Career Guidance</span> Our AI tailors career advice specifically to your skills and interests.</li>
            <li><span className='text-yellow-500 font-medium'>Real-Time Industry Trends</span> Stay updated with the latest career opportunities and market demands.</li>
            <li><span className='text-yellow-500 font-medium'>Comprehensive Resource Access</span> Get exclusive access to expert articles, webinars, and courses.</li>
            <li><span className='text-yellow-500 font-medium'>Interactive Support System</span> Engage with our AI chat assistant for instant answers and support.</li>
          </ul>
          <div className='flex items-center justify-center'>
            <iframe
              src="https://www.youtube.com/embed/2Cr-1nMpPYA?controls=0&showinfo=0&fs=1&iv_load_policy=3&modestbranding=0"
              allowFullScreen
              title="Embedded YouTube Video"
              className='w-[50%] h-[25vh] rounded-xl mt-5'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
