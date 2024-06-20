'use client'

import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Link from 'next/link';

const AdminPage = () => {

    const logoImage = './BluBee.png';

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [waitList, setWaitList] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const fetchContacts = async () => {
            const { data, error } = await supabase
                .from('contacts')
                .select('*');

            if (error) {
                console.error('Error fetching contacts:', error);
            } else {
                setContacts(data);
            }
            setLoading(false);
        };

        const fetchWaitList = async () => {
            const { data, error } = await supabase
                .from('emails')
                .select('*');

            if (error) {
                console.error('Error fetching contacts:', error);
            } else {
                setWaitList(data);
            }
            setLoading(false);
        };

        fetchContacts();
        fetchWaitList();
    }, []);

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
            </nav>
            <div className="w-full md:w-[80%] mx-auto py-20 px-5 md:px-0 font-medium text-lg">
                <h1 className="text-center text-3xl md:text-4xl font-semibold mb-10">Admin</h1>
                {loading ? (
                    <p className="text-center">Loading...</p>
                ) : (
                    <div>
                        <h2 className='my-5 text-2xl font-semibold'>Contact Us Users:</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white border">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b text-left">ID</th>
                                        <th className="py-2 px-4 border-b text-left">Name</th>
                                        <th className="py-2 px-4 border-b text-left">Email</th>
                                        <th className="py-2 px-4 border-b text-left">Phone</th>
                                        <th className="py-2 px-4 border-b text-left">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.map((contact) => (
                                        <tr key={contact.id}>
                                            <td className="py-2 px-4 border-b">{contact.id}</td>
                                            <td className="py-2 px-4 border-b">{contact.uname}</td>
                                            <td className="py-2 px-4 border-b">{contact.email}</td>
                                            <td className="py-2 px-4 border-b">{contact.phone}</td>
                                            <td className="py-2 px-4 border-b">{contact.message}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <h2 className='my-5 text-2xl font-semibold'>Wait List Users:</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white border">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 border-b text-left">ID</th>
                                        <th className="py-2 px-4 border-b text-left">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {waitList.map((item) => (
                                        <tr key={item.id}>
                                            <td className="py-2 px-4 border-b">{item.id}</td>
                                            <td className="py-2 px-4 border-b">{item.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPage;
