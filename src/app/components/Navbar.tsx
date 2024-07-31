"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-xl font-bold">
                    <Link href="/">
                        My Website
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/Home" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-300 hover:text-white">
                        About
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
