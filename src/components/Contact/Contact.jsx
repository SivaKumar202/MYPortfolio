import React from "react";
import Gmail from "../../assets/SocialIcons/Gmail.png";

function Contact() {
  return (
    <section
      id="contact"
      className=" text-white py-20 px-4 sm:px-10 lg:px-32"
    >
      <div className="max-w-4xl mx-auto p-10 rounded-3xl ">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-[#FC530A] tracking-wide">
          📬 Let's Talk
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg leading-relaxed">
          Got an idea or opportunity? Just drop a message! I’m open to
          freelancing, collaborations, or tech discussions.
        </p>

        <form
          action="https://formspree.io/f/{your-form-id}" // Replace this with actual ID
          method="POST"
          className="space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-black/70 border border-gray-600 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#FC530A] transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-black/70 border border-gray-600 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#FC530A] transition"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="w-full bg-black/70 border border-gray-600 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#FC530A] transition"
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#FC530A] text-black font-bold px-8 py-3 rounded-xl shadow-md hover:bg-[#e24d00] hover:scale-105 transition duration-300 ease-in-out"
            >
              ✉️ Send Message
            </button>
          </div>
        </form>

        <div className="text-center mt-10 text-sm text-gray-500 flex items-center justify-center gap-4">
          Or email me directly at{" "}
          <a
            href="mailto:sivakumarjujjavarapu123@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img width={45} height={45} src={Gmail} alt="Gmail" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
