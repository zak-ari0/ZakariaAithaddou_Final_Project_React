import React from "react";
import images from "../constents";

function Contact() {
  return (
    <main className="container mx-auto">

      <div className="w-full relative md:h-96 mb-12">
        <img
          src={images.banner}
          className="w-full h-60 object-cover"
        />
        <h2 className="absolute  -top-40 inset-0 flex items-center justify-center uppercase text-white text-6xl md:text-6xl font-bold">
    Contact
  </h2>
      </div>


      <div className="flex flex-col md:flex-row md:space-x-8 px-[10rem] mb-36">

        <form className="w-full md:w-1/2 space-y-6">
        <h1 className="text-3xl font-light">sent us your message</h1>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-[90%] border border-gray-300 px-4 py-3 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-[90%] border border-gray-300 px-4 py-3 outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            className="w-[90%] border border-gray-300 px-4 py-3 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-[90%] border border-gray-300 px-4 py-3 outline-none"
            rows="6"
          ></textarea>
          <button
            type="submit"
            className="w-[28%] bg-black text-[17px] font-light tracking-wide text-white py-2.5 rounded-full hover:bg-[#E65540] transition ease-in duration-300 cursor-pointer"
          >
            SEND
          </button>
        </form>

        {/* Map */}
        <div className=" md:w-1/2 mt-8 md:mt-0 h-80 md:h-96">
          <iframe
            title="Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.888662377115!2d-74.00594168459397!3d40.71278397933006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31665a4df7%3A0x18f97f1a1fa4b1cf!2s379%20Hudson%20St%2C%20New%20York%2C%20NY%2010018!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
            className="w-[40vw] h-[75vh] border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </main>
  );
}

export default Contact;
