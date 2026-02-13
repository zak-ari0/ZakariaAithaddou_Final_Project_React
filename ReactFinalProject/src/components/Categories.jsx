import React from "react";
import images from "../constents";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    { title: "DRESSES", image: images.cards1 },
    { title: "WATCHES", image: images.cards2 },
    { title: "BAGS", image: images.cards3 },
    { title: "SUNGLASSES", image: images.cards4 },
    { title: "FOOTERWEAR", image: images.cards5 },
    { title: "ACCESSORIES", image: images.cards6 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-x-6 gap-y-6 md:h-[900px]">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate("/shop")}
            className={`
              group relative overflow-hidden cursor-pointer
              ${index === 0 || index === 2 || index === 4 ? "h-[60vh]" : ""}
            `}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/3 transition duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => navigate("/shop")}
                className="duration-300 cursor-pointer absolute bottom-5 text-black text-[18px] font-light uppercase tracking-wide py-2 w-45 bg-white opacity-90 hover:bg-[#E65540] hover:opacity-100 hover:text-white"
              >
                {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
