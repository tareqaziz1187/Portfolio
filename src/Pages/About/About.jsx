import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-blue-500"
        >
          <img
            src="/profile.png"
            alt="Tareq Aziz"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center md:justify-start gap-2">
            <FaUser className="text-blue-500" /> About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm <span className="font-semibold text-blue-500">Tareq Aziz</span>, a passionate Frontend Developer who crafts responsive,
            user-focused web applications using modern technologies like React, Tailwind CSS, and JavaScript. I love building
            interactive UIs, optimizing performance, and creating beautiful user experiences.
          </p>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            With a strong eye for detail and a drive to constantly learn, I’m always up for new challenges and exciting projects.
            I enjoy collaborating with teams, writing clean code, and contributing to open-source.
          </p>

          <div className="mt-6">
            <Link
              to="/projects"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
