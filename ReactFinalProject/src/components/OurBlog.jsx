import React from "react";
import images from "../constents";

function OurBlog() {
  const blogs = [
    {
      img: images.blog_1,
      title: "Black Friday Guide: Best Sales & Discount Codes",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
    },
    {
      img: images.blog_2,
      title: "The White Sneakers Nearly Every Fashion Girls Own",
      desc: "Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et...",
    },
    {
      img: images.blog_3,
      title: "New York SS 2018 Street Style: By Annina Mislin",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl font-bold tracking-widest mb-16">
          OUR BLOG
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div key={index} className="group">

              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt=""
                  className="w-full h-[300px] cursor-pointer object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-normal text-gray-800 hover:text-[#E65540] duration-300 ease-in cursor-pointer transition">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  by fashe-theme Admin on Dec 28,2017
                </p>

                <p className="text-gray-500 font-light mt-4 leading-relaxed">
                  {blog.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
      <h1 className="text-center text-3xl font-bold mt-[8rem] tracking-wide">@ FOLLOW US ON INSTAGRAM</h1>
      <div className="flex items-center h-[12vh] w-[100%] mt-20">
        <div className="w-[33.33%] text-center h-full flex items-center justify-center flex-col gap-1">
            <h1 className="text-[20px] text-gray-700 font-light">Free Delivery Worldwide</h1>  
            <p className="text-gray-600 text-[15px] font-light italic">Mirum est notare quam littera gothica</p>
        </div>
        <div className="w-[33.33%] text-center h-full border-x-[1px] border-gray-300 flex items-center justify-center flex-col gap-1">
            <h1 className="text-[20px] text-gray-700 font-light">30 Days Return</h1>
            <p className="text-gray-600 text-[15px] font-light italic">Simply return it within 30 days for an exchange.</p>
        </div>
        <div className="w-[33.33%] text-center h-full  flex items-center justify-center flex-col gap-1">
            <h1 className="text-[20px] text-gray-700 font-light">Store Opening</h1>
            <p className="text-gray-600 text-[15px] font-light italic">Shop open from Monday to Sunday</p>
        </div>
      </div>
    </div>
  );
}

export default OurBlog;
