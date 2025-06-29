import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "HobbyHub",
    image: "https://i.ibb.co/jvWHfQCX/1.png",
  },
  {
    id: 2,
    title: "Historical Artifacts",
    image: "https://i.ibb.co/jv80MXNm/Screenshot-234.png",
  },
  {
    id: 3,
    title: "Drum Set",
    image: "https://i.ibb.co/6cmSKNQ4/Screenshot-238.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={cardVariants}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                {project.title}
              </h3>
              <Link
                to={`/projectdetail/${project.id}`}
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition transform duration-300 shadow-md"
              >
                View More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
