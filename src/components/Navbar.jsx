import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="space-x-6 hidden md:block">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-block"
        
  
      >
        <Link to="/" className="text-white text-xl transform hover:scale-150 hover:text-purple-400 transition-all duration-500"
>
          Home
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="inline-block"
      >
        <Link to="/about" className="text-xl text-white hover:text-purple-400 transition-all duration-500">
          About
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="inline-block"
      >
        <Link to="/projects" className="text-xl text-white hover:text-purple-400 transition-all duration-500">
          Projects
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="inline-block"
      >
        <Link to="/contact" className="text-xl text-white hover:text-purple-400 ttransition-all duration-500">
          Contact
        </Link>
      </motion.div>
    </nav>
  )
}

export default Navbar
