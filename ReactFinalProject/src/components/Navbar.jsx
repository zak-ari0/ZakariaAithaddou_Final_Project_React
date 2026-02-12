import React from 'react';
import images from '../constents';
import { SlUser } from 'react-icons/sl';
import { GrShop } from 'react-icons/gr';


function Navbar() {
    return (
        <div className='h-20 flex items-center justify-between px-13'>
            <div>
                <img src={images.logo} alt="" />
            </div>
            <div>
                <ul className='flex gap-9 text-[17px] font-stretch-50% font-[350]  '>
                    <li className='cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black'>Home</li>
                    <li className='cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black'>Shop</li>
                    <li className='cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black'>Sale</li>
                    <li className='cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black'>Features</li>
                    <li className='cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black'>Blog</li>
                    <li className='cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black'>About</li>
                    <li className='cursor-pointer border-b border-transparent transition-all duration-300 ease-in hover:border-black'>Contact</li>
                </ul>
            </div>
            <div className='flex items-center gap-10 text-[#C7C7C7]'>
                <SlUser className="text-[25px] cursor-pointer"/>
                <GrShop className='text-[28px] cursor-pointer font-light' />
            </div>
        </div>
    );
}

export default Navbar;