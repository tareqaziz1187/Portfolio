import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const education = [
  {
    title: "B.Sc. in Computer Science",
    institution: "DUET",
    year: "2020 – 2024",
    details: "Focused on software engineering and full-stack development.",
  },
  {
    title: "H.S.C. in Science",
    institution: "Govt. XYZ College",
    year: "2017 – 2019",
    details: "Studied Physics, Chemistry, Higher Math.",
  },
];

const courses = [
  {
    title: "Full-Stack Web Development",
    provider: "Programming Hero",
    year: "2024",
    details: "Built real-world projects using React, Node.js, MongoDB, and Firebase.",
  },
  {
    title: "JavaScript Mastery",
    provider: "Udemy",
    year: "2023",
    details: "Deep dive into ES6+, DOM, async/await, and API integration.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const EducationAndCourses = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460]">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🎓 Education & Certifications
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {[...education, ...courses].map((item, index) => (
          <motion.div
            key={index}
            className="group p-6 rounded-2xl shadow-xl bg-white/10 opacity-70 group-hover:opacity-100 backdrop-blur-lg border border-white/10 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 relative overflow-hidden dark:bg-gray-900/30"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            {/* Glowing border highlight */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md rounded-xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl text-purple-500">
                  {index < education.length ? <FaGraduationCap /> : <FaCertificate />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-700 dark:text-white/70 text-sm mb-1">
                {item.institution || item.provider} ({item.year})
              </p>
              <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed">
                {item.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationAndCourses;
