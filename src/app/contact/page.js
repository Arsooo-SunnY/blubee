'use client'

import { useState } from 'react';
import { supabase } from '../supabaseClient';
import Link from 'next/link';

const ContactUs = () => {
    const logoImage = './BluBee.png';

    const [formData, setFormData] = useState({
        uname: '',
        email: '',
        phone: '',
        message: '', // Added message state
    });

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
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error.message);
            alert('Error submitting form. Please try again.');
        }
    };

    return (
        <div className="bg-custom-gradient h-[100vh]">
            <nav className='flex flex-row'>
                <Link href="/">
                <div className='flex flex-row ml-10 pt-5'>
                    <img src={logoImage} alt="BluBee Logo" className='w-12 h-12 mr-1' />
                    <h1><span className='text-5xl font-bold'>BluBee</span><span className='text-3xl'>.AI</span></h1>
                </div>
                </Link>
                <div className='space-x-10 text-xl font-medium pt-7 ml-auto mr-10'>
                    <Link href="/">Home</Link>
                    <Link href="/contact" className='font-extrabold'>Contact Us</Link>
                    <Link href="/about">About Us</Link>
                </div>
            </nav>
            <div className="w-[60%] mx-auto space-y-8 my-20">
                <h1 className="text-4xl font-semibold text-center">Contact Us</h1>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-3">
                        <label htmlFor="uname" className="text-lg font-medium">Enter your Full name: <span className='text-red-600'>*</span></label><br />
                        <input
                            type="text"
                            name="uname"
                            id="uname"
                            value={formData.uname}
                            onChange={handleChange}
                            placeholder="e.g., John Hammond"
                            className="px-5 py-2 rounded-xl w-[35%]"
                            required
                        /><br />
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="email" className="text-lg font-medium">Enter your Email Address: <span className='text-red-600'>*</span></label><br />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g., john@example.com"
                            className="px-5 py-2 rounded-xl w-[35%]"
                            required
                        /><br />
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="phone" className="text-lg font-medium">Enter your Phone Number:</label><br />
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g., +91123456789"
                            className="px-5 py-2 rounded-xl w-[35%]"
                        /><br />
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="message" className="text-lg font-medium">Enter your Message: <span className='text-red-600'>*</span></label><br />
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type your message here..."
                            className="px-5 py-2 rounded-xl w-[35%] h-32"
                            required
                        ></textarea><br />
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded-xl">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
