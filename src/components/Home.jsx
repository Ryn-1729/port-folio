import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans">
      <div className="flex justify-end pr-8 md:pr-20 pt-6 mx-25">
  <Navbar />
</div>

      <header className="flex justify-between items-center p-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold"
        >
          Aryan Sharma
        </motion.h1>

     
       
      </header>

      <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 mt-20">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Hi, I’m Aryan 👋 <br />
            <span className="text-purple-400">Creative Developer</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I build modern and interactive websites, combining aesthetics with
            functionality. Let's create something amazing together.
          </p>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.img
          src="https://avatars.githubusercontent.com/u/9919?s=280&v=4" // Replace with your image
          alt="Profile"
          className="w-72 md:w-96 rounded-full mt-10 md:mt-0 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </main>
    </div>
  );
}

export default Homepage;
