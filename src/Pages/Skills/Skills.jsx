import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaComments,
  FaUserTie,
  FaUsers,
  FaSync,
  FaRetweet,
  FaClock,
} from "react-icons/fa";

// Color map for progress bars
const progressColors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-yellow-500",
  "bg-pink-500",
  "bg-indigo-500",
];

const skills = [
  { name: "Communication", level: 75, icon: <FaComments className="text-blue-500 text-xl" /> },
  { name: "Leadership", level: 70, icon: <FaUserTie className="text-green-500 text-xl" /> },
  { name: "Teamwork", level: 80, icon: <FaUsers className="text-purple-500 text-xl" /> },
  { name: "Flexibility", level: 80, icon: <FaSync className="text-yellow-500 text-xl" /> },
  { name: "Adaptability", level: 70, icon: <FaRetweet className="text-pink-500 text-xl" /> },
  { name: "Time Management", level: 95, icon: <FaClock className="text-indigo-500 text-xl" /> },
];

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        width: `${skills[i].level}%`,
        transition: { duration: 1 + i * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-4 sm:px-6 py-16"
    >
      <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white text-center">
        My Skills
      </h2>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-7">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-y-2 mb-4">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200 text-lg font-medium">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-3 rounded-full ${progressColors[i % progressColors.length]}`}
                initial={{ width: 0 }}
                animate={controls}
                custom={i}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
