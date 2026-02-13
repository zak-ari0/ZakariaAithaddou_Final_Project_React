import { Link } from "react-router-dom";
import React from "react";
import images from "../constents";

function OurBlog() {
  const blogs = [
    {
      img: images.blog_1,
      title: "Black Friday Guide: Best Sales & Discount Codes",
      desc: "Lorem ipsum dolor sit amet...",
    },
    {
      img: images.blog_2,
      title: "The White Sneakers Nearly Every Fashion Girls Own",
      desc: "Duis ut velit gravida nibh bibendum...",
    },
    {
      img: images.blog_3,
      title: "New York SS 2018 Street Style: By Annina Mislin",
      desc: "Lorem ipsum dolor sit amet...",
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
            <Link to={`/blog/${index}`} key={index} className="group block">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurBlog;
