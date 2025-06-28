import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiFirebase } from "react-icons/si";

const projects = [
  {
    title: "HobbyHub",
    description: "The Hobby Hub Group is developing a webpage to showcase and connect people with shared hobbies, interests, or creative projects. This platform may feature user profiles, hobby tutorials, community forums, or event listings—serving as a central hub for enthusiasts to collaborate and share their passions.",
    images: [" https://i.ibb.co/jvWHfQCX/1.png ", "https://i.ibb.co/Gvdf110L/2.png", "https://i.ibb.co/35zZGfrW/3.png","https://i.ibb.co/ccfMV93V/4.png"],
    tech: [<FaReact size={30} color="blue" />, <FaJs size={30} color="yellow" />, <SiMongodb size={30} color="green" />,<SiFirebase size={30} color="orange" /> ],
    live: "https://loquacious-marzipan-501228.netlify.app/",
    client: "https://github.com/tareqaziz1187/HobyHub-Web.git",
    server: "https://github.com/yourname/techbazaar-server",
  },
  {
    title: "HobbyHub",
    description: "The Hobby Hub Group is developing a webpage to showcase and connect people with shared hobbies, interests, or creative projects. This platform may feature user profiles, hobby tutorials, community forums, or event listings—serving as a central hub for enthusiasts to collaborate and share their passions.",
    images: [" https://i.ibb.co/jvWHfQCX/1.png ", "https://i.ibb.co/Gvdf110L/2.png", "https://i.ibb.co/35zZGfrW/3.png","https://i.ibb.co/ccfMV93V/4.png"],
    tech: [<FaReact size={30} color="blue" />, <FaJs size={30} color="yellow" />, <SiMongodb size={30} color="green" />,<SiFirebase size={30} color="orange" /> ],
    live: "https://loquacious-marzipan-501228.netlify.app/",
    client: "https://github.com/yourname/techbazaar-client",
    server: "https://github.com/yourname/techbazaar-server",
  },
  {
    title: "HobbyHub",
    description: "The Hobby Hub Group is developing a webpage to showcase and connect people with shared hobbies, interests, or creative projects. This platform may feature user profiles, hobby tutorials, community forums, or event listings—serving as a central hub for enthusiasts to collaborate and share their passions.",
    images: [" https://i.ibb.co/jvWHfQCX/1.png ", "https://i.ibb.co/Gvdf110L/2.png", "https://i.ibb.co/35zZGfrW/3.png","https://i.ibb.co/ccfMV93V/4.png"],
    tech: [<FaReact size={30} color="blue" />, <FaJs size={30} color="yellow" />, <SiMongodb size={30} color="green" />,<SiFirebase size={30} color="orange" /> ],
    live: "https://loquacious-marzipan-501228.netlify.app/",
    client: "https://github.com/yourname/techbazaar-client",
    server: "https://github.com/yourname/techbazaar-server",
  },
 
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left: Image Slider */}
            <div className="w-full md:w-1/2">
              <Slider {...sliderSettings}>
                {project.images.map((img, i) => (
                  <img key={i} src={img} alt={project.title} className="w-full h-64 object-cover" />
                ))}
              </Slider>
            </div>

            {/* Right: Info */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-6 mb-6">
                  {project.tech.map((icon) => (
                    <div>
                    {icon}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark flex items-center gap-2 transition"
                >
                  <FaExternalLinkAlt /> Live View
                </a>
                <a
                  href={project.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center gap-2 transition"
                >
                  <FaGithub /> Client Repo
                </a>
                <a
                  href={project.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center gap-2 transition"
                >
                  <FaGithub /> Server Repo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
