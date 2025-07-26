import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import bg from "../../assets/code.png";
import image from "../../assets/contact.svg";
import Gmail from "../../assets/Social/Gmail.png";
import linkedin from "../../assets/Social/Linkedin.png";
import github from "../../assets/Social/GitHub.png";

// Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_2trn9si",
        "template_tundixb",
        formRef.current,
        "Nt7JsiNpq-RjweGN2"
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
      {/* Header Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center gap-20 mb-16"
      >
        <img
          src={image}
          alt="Contact illustration"
          className="w-full lg:w-1/2"
        />
        <div>
          <h2 className="text-5xl font-extrabold text-[#FC530A] mb-4">
            Contact Me
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Great code starts with a great conversation — let’s talk
          </p>
          <div className="flex flex-col md:flex-row gap-5 mt-6 mx-auto md:mx-0 items-center justify-start">
            <div className="flex items-center gap-x-3">
              {[github, linkedin, Gmail].map((icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href={
                    [
                      "https://github.com/SivaKumar202",
                      "https://www.linkedin.com/in/siva-kumar-jujjavarapu/",
                      "mailto:sivakumarjujjavarapu123@gmail.com",
                    ][index]
                  }
                  target="_blank"
                >
                  <img width={45} height={45} src={icon} alt="icon" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 sm:px-10 py-20 bg-gradient-to-br from-black via-gray-900 to-[#0F0F0F]">
  {/* Form Section */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="w-full lg:w-1/2 bg-white/5 backdrop-blur-lg border border-white/10 p-10 sm:p-14 rounded-3xl shadow-2xl"
  >
    <motion.h3
      variants={fadeUp}
      custom={1.1}
      className="text-4xl sm:text-5xl font-bold text-center text-[#FC530A] mb-6"
    >
      Let's Talk
    </motion.h3>

    <motion.p
      variants={fadeUp}
      custom={1.2}
      className="text-center text-gray-400 text-lg mb-12"
    >
      Got an idea or opportunity? Let’s connect! Whether it’s freelance,
      collaboration, or just tech talk—I'm all ears.
    </motion.p>

    <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.input
          variants={fadeUp}
          custom={1.3}
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="bg-transparent border border-gray-600 text-white rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#FC530A] transition"
        />
        <motion.input
          variants={fadeUp}
          custom={1.4}
          whileFocus={{ scale: 1.02 }}
          type="email"
          name="reply_to"
          placeholder="Your Email"
          required
          className="bg-transparent border border-gray-600 text-white rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#FC530A] transition"
        />
      </div>

      {/* Message */}
      <motion.textarea
        variants={fadeUp}
        custom={1.5}
        whileFocus={{ scale: 1.01 }}
        name="message"
        placeholder="Your Message"
        rows="6"
        required
        className="w-full bg-transparent border border-gray-600 text-white rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#FC530A] transition"
      />

      {/* Status Message */}
{status && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-center text-base font-medium"
  >
    {status === "sending" && (
      <p className="text-yellow-400">Sending...</p>
    )}
    {status === "success" && (
      <p className="text-green-400">Message sent successfully! ✅</p>
    )}
    {status === "error" && (
      <p className="text-red-400">Oops, something went wrong. ❌</p>
    )}
  </motion.div>
)}


      {/* Submit Button */}
      <motion.div
        variants={fadeUp}
        custom={1.7}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex justify-center"
      >
        <button
          type="submit"
          className="bg-[#FC530A] text-black font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#e24d00] transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </motion.div>
    </form>

    {/* Direct Email Option */}
    <motion.div
      variants={fadeUp}
      custom={1.8}
      className="mt-10 text-center text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-3"
    >
      Or reach me directly at
      <a
        href="mailto:sivakumarjujjavarapu123@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-2xl hover:underline"
      >
        <img width={28} src={Gmail} alt="Gmail Icon" />
        Gmail
      </a>
    </motion.div>
  </motion.div>

  {/* Right Side Image */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="w-full lg:w-1/2 flex justify-center"
  >
    <img
      src={bg}
      alt="code"
      className="w-full h-fit object-fill"
    />
  </motion.div>
</div>

    </section>
  );
}

export default Contact;
