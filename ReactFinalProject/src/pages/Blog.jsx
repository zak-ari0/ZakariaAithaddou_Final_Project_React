import React from "react";
import images from "../constents";
import { IoSearch } from "react-icons/io5";

function Blog() {
  const posts = [
    {
      img: images.blog_1,
      date: "28 DEC, 2017",
      title: "The White Sneakers Nearly Every Fashion Girls Own",
      excerpt:
        "Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod.",
    },
    {
      img: images.blog_2,
      date: "26 DEC, 2017",
      title: "Black Friday Guide: Best Sales & Discount Codes",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate.",
    },
    {
      img: images.blog_1,
      date: "22 DEC, 2017",
      title: "New Collection: Backpack Style 2018",
      excerpt:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
  ];

  const featured = [
    {
      img: images.shopItem7,
      title: "Boxy7 T-Shirt with Roll Sleeve",
      price: "$20.00",
    },
    {
      img: images.shopItem6,
      title: "Boxy6 T-Shirt with Roll Sleeve",
      price: "$20.00",
    },
    {
      img: images.shopItem5,
      title: "Boxy5 T-Shirt with Roll Sleeve",
      price: "$20.00",
    },
    {
      img: images.shopItem4,
      title: "Boxy4 T-Shirt with Roll Sleeve",
      price: "$20.00",
    },
  ];

  return (
    <>
      <div className="w-full relative md:h-96  overflow-hidden">
        <img
          src={images.banner}
          alt="Contact Banner"
          className="w-full h-60 object-cover"
        />
        <h2 className="absolute  -top-40 inset-0 flex items-center justify-center uppercase text-white text-6xl md:text-6xl font-bold">
          NEWS
        </h2>
      </div>
      <section className="container mx-auto  flex gap-12">
        <div className="w-[70%] flex flex-col gap-16">
          {posts.map((post, index) => (
            <div key={index} className=" ml-60 flex flex-col gap-6">
              <div className="relative overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-[50vw] h-[70vh] object-cover hover:scale-110 duration-300 cursor-pointer"
                />

                <span className="absolute bottom-4 left-4 bg-black text-white text-xs px-4 py-2">
                  {post.date}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-medium hover:text-[#E65540] cursor-pointer transition">
                  {post.title}
                </h2>

                <p className="text-gray-500 text-sm">
                  by fashe-theme Admin | crafts, street style | 0 Comments
                </p>

                <p className="text-gray-500 leading-7">{post.excerpt}</p>

                <button className="text-black font-medium flex items-center gap-2 hover:text-[#E65540] transition">
                  Continue Reading →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[30%] flex flex-col gap-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search all articles..."
              className="w-[18vw] border rounded-full py-3 px-6 outline-none text-gray-500"
            />
            <IoSearch className="absolute right-45 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold">Featured Products</h3>

            {featured.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-center cursor-pointer group "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-24 object-cover"
                />
                <div>
                  <p className="text-sm group-hover:text-[#E65540] transition">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-sm">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold">Tags Cloud</h3>
            <div className="flex gap-3 flex-wrap">
              <span className="border px-4 py-2 rounded-full text-gray-500 text-sm hover:border-[#E65540] hover:text-[#E65540] cursor-pointer transition">
                crafts
              </span>
              <span className="border px-4 py-2 rounded-full text-gray-500 text-sm hover:border-[#E65540] hover:text-[#E65540] cursor-pointer transition">
                street style
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
