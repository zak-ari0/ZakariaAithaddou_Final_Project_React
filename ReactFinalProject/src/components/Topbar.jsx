import React from 'react';
import { FaChevronDown, FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';

function Topbar() {
    return (
        <div className='flex items-center justify-between h-[2.7rem] px-10 bg-[#F5F5F5]'>
            <div className=' h-full flex items-center gap-4 text-gray-500'>
                <FaFacebookF className='text-[18px]' />
                <FaTwitter className='text-[17px]' />
                <FaPinterestSquare className='text-[18px]' />
                <FaGooglePlusG className='text-[25px]' />
                <FaInstagram className='text-[18px]' />
            </div>
            <p className='text-gray-500 text-[14px]'>Free shipping for standard order over $100</p>
            <div className='flex gap-2.5'>
                <p className='text-gray-500 text-[14px]'>fashe@example.com</p>
                 <span className='flex items-center text-gray-500 text-[14px]'>USD <FaChevronDown className='text-2xs' /></span>
            </div>
               
        </div>
    );
}

export default Topbar;