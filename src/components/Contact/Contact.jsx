import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Gmail from "../../assets/SocialIcons/Gmail.png";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_2trn9si",     // e.g. "service_123xyz"
        "template_tundixb",    // e.g. "template_abc123"
        formRef.current,
        "Nt7JsiNpq-RjweGN2"      // e.g. "e9qXYZabc123456"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative text-white py-24 px-4 sm:px-10 lg:px-32 bg-gradient-to-br from-black via-gray-900 to-[#0F0F0F]"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-10 sm:p-14 rounded-3xl shadow-2xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-center text-[#FC530A]"
        >
          Let's Talk
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-400 mb-12 text-lg leading-relaxed"
        >
          Got an idea or opportunity? Let’s connect! Whether it's freelance,
          collaboration, or just tech talk—I'm all ears.
        </motion.p>

        {/* ✅ Contact Form with EmailJS */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="bg-transparent border border-gray-600 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#FC530A] transition"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
              className="bg-transparent border border-gray-600 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#FC530A] transition"
            />
          </div>

          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="w-full bg-transparent border border-gray-600 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#FC530A] transition"
          ></motion.textarea>

          {/* Status Message */}
          {status === "success" && (
            <p className="text-green-400 text-center">Message sent successfully! ✅</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">Oops, something went wrong. ❌</p>
          )}
          {status === "sending" && (
            <p className="text-yellow-400 text-center">Sending...</p>
          )}

          {/* Send Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <button
              type="submit"
              className="bg-[#FC530A] text-black font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#e24d00] transition duration-300 ease-in-out cursor-pointer"
            >
              Send Message
            </button>
          </motion.div>
        </form>

        {/* Direct Email Option */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          Or reach me directly at
          <button className="px-6 py-3 bg-black text-white items-center rounded-2xl">
            <a
              href="mailto:sivakumarjujjavarapu123@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:underline text-white"
            >
              <img width={30} src={Gmail} alt="Gmail" /> Gmail
            </a>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
