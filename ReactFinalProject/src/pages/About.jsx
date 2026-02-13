import React from 'react';
import images from '../constents';

function About() {
    return (
        <div>
            <div className="w-full relative md:h-96 mb-12 overflow-hidden">
                <img
                    src={images.banner}
                    alt="Contact Banner"
                    className="w-full h-60 object-cover"
                />
                <h2 className="absolute  -top-40 inset-0 flex items-center justify-center uppercase text-white text-6xl md:text-6xl font-bold">
                    About
                </h2>
            </div>

            <div className="flex items-center px-4 md:px-8 lg:px-16 mb-16 m-auto">
                <div className='w-[22rem]  overflow-hidden'>
                    <img src={images.aboutImg} className='w-full h-full hover:scale-110 duration-500' />
                </div>
                <div className="max-w-4xl mx-auto text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-light mb-6">Our Story</h3>
                    <p className="text-gray-400 text-[17px] font-light leading-relaxed mb-8 text-base">
                        Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                    </p>

                    <blockquote className=" px-6 text-gray-400 font-light border-l-4 border-l-[3px] border-gray-300">
                        <p className="text-[17px] mb-4">
                            "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while."
                        </p>
                        <cite className="text-left block font-semibold">- Steve Jobs</cite>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default About;