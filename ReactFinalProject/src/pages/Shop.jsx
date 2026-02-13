import React from "react";
import images from "../constents";
import { IoSearch } from "react-icons/io5";

function Shop() {
  const colors = ["black", "gray", "red"];
  const products = [
    {
      img: images.shopItem3,
      title: "Boxy3 T-Shirt with Roll sleeve",
      price: "$20,00",
    },
    {
      img: images.shopItem2,
      title: "Boxy2 T-Shirt with Roll sleeve",
      price: "$20,00",
    },
    {
      img: images.shopItem1,
      title: "Boxy1 T-Shirt with Roll sleeve",
      price: "$20,00",
    },
    {
      img: images.shopItem9,
      title: "Boxy T-Shirt with Roll sleeve Details",
      price: "$20,00",
    },
    {
      img: images.shopItem7,
      title: "Boxy7 T-Shirt with Roll sleeve",
      price: "$20,00",
    },
    {
      img: images.shopItem6,
      title: "Boxy6 T-Shirt with Roll sleeve",
      price: "$20,00",
    },
    {
      img: images.shopItem5,
      title: "Boxy5 T-Shirt with Roll sleeve",
      price: "$20,00",
    },
    {
      img: images.shopItem4,
      title: "Boxy4 T-Shirt with Roll sleeve",
      price: "$20,00",
    },
  ];

  return (
    <>
      <section className=" w-full h-60 relative">
        <img src={images.banner} alt="" />
        <h1 className="text-white z-111 font-extrabold text-5xl absolute top-20 right-150">
          PRODUCTS
        </h1>
      </section>
      <section className="container w-full h-380 mx-auto">
        <div className="flex w-full h-full ">
          <div className=" h-[99%] w-100 gap-8 pl-40 flex flex-col">
            <div className="flex flex-col">
              <h1 className="font-bold text-lg">Categories</h1>
              <span className="text-gray-500 hover:text-orange-300">
                Best Seller (8 items)
              </span>
              <span className="text-gray-500 hover:text-orange-300">
                Featured (8 items)
              </span>
              <span className="text-gray-500 hover:text-orange-300">
                Men (8 items)
              </span>
              <span className="text-gray-500 hover:text-orange-300">
                Women (8 items)
              </span>
            </div>
            <div className="flex flex-col gap-1 p-4">
              <h1 className="font-bold text-2xl ">color</h1>

              {colors.map((color) => (
                <label
                  key={color}
                  className="flex items-center cursor-pointer gap-1"
                >
                  <input type="checkbox" />
                  <span className="text-gray-600 text-[15px] hover:text-[#E65540]">
                    {color}
                  </span>
                </label>
              ))}
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-lg">Categories</h1>
              <label className="flex items-center cursor-pointer gap-1 text-gray-600">
                <input type="checkbox" />
                0-20
              </label>

              <label className="flex items-center cursor-pointer gap-1 text-gray-600">
                <input type="checkbox" />
                20-40
              </label>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-lg">Categories</h1>
              <label className="flex items-center cursor-pointer gap-1 text-gray-600">
                <input type="checkbox" />L
              </label>
              <label className="flex items-center cursor-pointer gap-1 text-gray-600">
                <input type="checkbox" />M
              </label>
              <label className="flex items-center cursor-pointer gap-1 text-gray-600">
                <input type="checkbox" />S
              </label>
              <label className="flex items-center cursor-pointer gap-1 text-gray-600">
                <input type="checkbox" />
                XL
              </label>
            </div>
            <div className="flex flex-col relative">
              <h1 className="font-bold text-lg">Categories</h1>
              <input
                type="text"
                placeholder="Search..."
                className="text-gray-500 border w-60 py-2 px-2 outline-0 "
              />
              <IoSearch className="absolute cursor-pointer  top-10 right-2" />
            </div>
          </div>
          <div className=" h-[99%] w-350 flex flex-col">
            <div className="b w-[] h-25 flex gap-3 justify-between p-5">
              <div className="flex gap-2">
                <select className="border-gray-300 text-gray-600 font-light border w-50 h-10 outline-none">
                  <option value="">Featured</option>
                  <option value="">Best Selling</option>
                  <option value="">Alphabetically, A-Z</option>
                  <option value="">Alphabetically, Z-A</option>
                  <option value="">Price, low to high</option>
                  <option value="">Price, high to low</option>
                  <option value="">Date, old to new</option>
                </select>
                <select className="border-gray-300 text-gray-600 font-light border w-50 h-10 outline-none">
                  <option value="">10</option>
                  <option value="">20</option>
                  <option value="">30</option>
                  <option value="">ALL</option>
                </select>
              </div>
              <div className="text-gray-500">
                <p>Showing 1 to 6 of 8 items</p>
              </div>
            </div>

           <section>
  <div className="grid grid-cols-2 md:grid-cols-3 w-[60vw] gap-8 mb-16 p-2">
    {products.map((item, index) => (
      <div key={index} className=" group">
        
        <div className="relative w-full h-[50vh] overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition duration-500 group-hover:brightness-75"
          />

          <button className="absolute bottom-[-50px] text-[18px] left-1/2 -translate-x-1/2 
                             bg-black text-white w-[10rem] py-2  rounded-full
                             opacity-0 transition-all duration-300
                             group-hover:bottom-6 group-hover:opacity-100 
                             hover:bg-[#E65540]">
            ADD TO CART
          </button>
        </div>

        <div className="mt-3">
          <h3 className="text-gray-800 text-[18px] font-light hover:text-[#E65540] transition">
            {item.title}
          </h3>
          <p className="text-gray-500 text-[17px] font-light mt-1">{item.price}</p>
        </div>
      </div>
    ))}
  </div>
</section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
