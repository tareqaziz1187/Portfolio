// ProjectDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { FaReact, FaJs, FaNodeJs, FaGithub, FaCheckCircle } from "react-icons/fa";
import { SiMongodb, SiFirebase } from "react-icons/si";
import { FaKey } from "react-icons/fa";


const projectData = {
  1: {
    title: "HobbyHub",
    description:
      "A platform to connect people with shared hobbies. Includes user profiles, tutorials, and forums.",
    tech: [<FaReact className="text-blue-500" />, <FaJs className="text-yellow-400" />, <SiMongodb className="text-green-500" />, <SiFirebase className="text-orange-500" />],
    live: "https://loquacious-marzipan-501228.netlify.app/",
    client: "https://github.com/tareqaziz1187/HobyHub-Web",
    challenges: "Integrating Firebase auth and managing real-time user data.",
    future: "Add real-time chat and AI-powered hobby suggestions.",
  },
  2: {
    title: "Historical Artifacts",
    description:
      "A collection-based UI for showcasing and categorizing ancient historical items.",
    tech: [<FaReact className="text-blue-500" />, <FaJs className="text-yellow-400" />, <SiMongodb className="text-green-500" />, <SiFirebase className="text-orange-500" />,<FaKey className="text-purple-600" title="JWT / Auth" />
],
    live: "https://aesthetic-heliotrope-e19b5a.netlify.app/",
    client: "https://github.com/yourname/techbazaar-client",
    challenges: "Data accuracy and responsive gallery design.",
    future: "Add artifact 3D views and AR compatibility.",
  },
  3: {
    title: "Drum Set",
    description: "An interactive drum set project built with HTML/CSS/JS.",
    tech: [<FaReact className="text-blue-500" />, <FaJs className="text-yellow-400" />],
    live: "https://tareqaziz1187.github.io/Drum-Set/",
    client: "https://github.com/tareqaziz1187/Drum-Set",
    challenges: "Synchronizing sound events with UI clicks.",
    future: "Enable custom sounds and recording feature.",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <p className="text-center mt-10">Project not found.</p>;

  return (
    <section className="flex justify-center px-4 py-16 bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460] min-h-screen">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl max-w-2xl w-full p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary dark:text-white">
          {project.title}
        </h2>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <FaCheckCircle className="text-green-500" /> Description
            </h4>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <FaCheckCircle className="text-green-500" /> Tech Stack
            </h4>
            <div className="flex gap-4 text-2xl mt-2">{project.tech}</div>
          </div>

          <div>
            <h4 className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <FaCheckCircle className="text-green-500" /> Live Link
            </h4>
            <a href={project.live} target="_blank" rel="noreferrer" className="text-blue-600 underline">
              {project.live}
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <FaCheckCircle className="text-green-500" /> Client Repository
            </h4>
            <a href={project.client} target="_blank" rel="noreferrer" className="text-blue-600 underline">
              {project.client}
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <FaCheckCircle className="text-green-500" /> Challenges
            </h4>
            <p className="text-gray-700 dark:text-gray-300">{project.challenges}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <FaCheckCircle className="text-green-500" /> Future Improvements
            </h4>
            <p className="text-gray-700 dark:text-gray-300">{project.future}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
