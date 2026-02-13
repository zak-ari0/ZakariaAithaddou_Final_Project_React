import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#F2F2F2] pt-20 pb-10">
      <div className="max-w-7xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">

          {/* Column 1 */}
          <div>
            <h3 className="font-semibold tracking-wider mb-6">
              GET IN TOUCH
            </h3>

            <p className="text-gray-600 text-sm leading-6 max-w-[260px]">
              Any questions? Let us know in store at 8th floor,
              379 Hudson St, New York, NY 10018 or call us on
              (+1) 96 716 6879
            </p>

            <div className="flex gap-4 mt-6 text-gray-500 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-[#E65540] transition duration-300" />
              <FaTwitter className="cursor-pointer hover:text-[#E65540] transition duration-300" />
              <FaPinterestP className="cursor-pointer hover:text-[#E65540] transition duration-300" />
              <FaGooglePlusG className="cursor-pointer hover:text-[#E65540] transition duration-300" />
              <FaInstagram className="cursor-pointer hover:text-[#E65540] transition duration-300" />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold tracking-wider mb-6">
              CATEGORIES
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              {["Men", "Women", "Dresses", "Sunglasses"].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-[#E65540] transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold tracking-wider mb-6">
              LINKS
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              {["Search", "About Us", "Contact Us", "Returns"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-[#E65540] transition duration-300"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold tracking-wider mb-6">
              HELP
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              {["Track Order", "Returns", "Shipping", "FAQs"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:text-[#E65540] transition duration-300"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold tracking-wider mb-6">
              NEWSLETTER
            </h3>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-gray-400 py-2 outline-none text-sm focus:border-[#E65540] transition"
            />

            <button className="mt-6 bg-black text-white px-8 py-3 rounded-full hover:bg-[#E65540] transition duration-300">
              SUBSCRIBE
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 text-center text-gray-600 text-sm">
          Copyright © 2022 Shopify Theme Developed by
          <span className="font-medium"> MassTechnologist </span>
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
