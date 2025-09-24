import React from 'react';

const Navbar = () => {
    return (
        <div className=' bg-[#FFFFFF]  py-4 border-1 border-gray-200'>
            <nav className='flex justify-between items-center max-w-[1440px] mx-auto'>
                <div>
                    <h2 className='text-2xl font-bold' >CS — Ticket System</h2>
                </div>

                <div className='flex gap-8 items-center'>
                    <ul className='flex space-x-8 items-center'>
                        <li>Home</li>
                        <li>FAQ</li>
                        <li>Changelog</li>
                        <li>Blog</li>
                        <li>Download</li>
                        <li>Contact</li>
                    </ul>
                      <button className='bg-linear-to-l from-[#9F62F2] to-[#632EE3] px-4 py-3 rounded-sm font-bold text-white ' > <span>+</span> New Ticket </button> 
                </div>
            </nav>
        </div>
    );
};

export default Navbar; 