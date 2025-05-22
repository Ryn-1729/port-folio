import React, { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function Contact() {
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_c4j3yvc",
        "template_2h0hex1",
        e.target,
        "-2q3rZNAD1RBUDCVv06-s"
      )
      .then(
        (result) => {
          alert("Message sent! I'll get back to you soon.");
          e.target.reset();
          setSending(false);
        },
        (error) => {
          alert("Failed to send message, please try again later.");
          setSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 p-6">
      {/* Navbar placed inside the gradient container */}
      <div className="flex justify-end relative w-full top-0">
        <div className="flex justify-end pr-8 md:pr-20 pt-6 mx-25 top-0 my-[-55px]">
          <Navbar />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 mt-8"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center tracking-wide">
          Contact Me
        </h2>

        <form className="space-y-6" onSubmit={sendEmail}>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition resize-none"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl shadow-lg transition disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
