import { motion } from "framer-motion";
import Profile from "../../assets/DSC_0002.JPG";
import HeroBG from "../../assets/Hero background.jpg";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460] bg-cover bg-center relative"
      // style={{
      //   backgroundImage: `url(${HeroBG})`,
      //   backgroundBlendMode: "overlay",
      // }}
    >
      <div className="z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 backdrop-blur-sm bg-white/20 dark:bg-black/30 p-8 rounded-xl shadow-xl">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-gray-900 dark:text-white text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Tareq Aziz</span>
          </h1>
          <motion.p
            className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-cyan-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Frontend Developer & UI Enthusiast
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative group">
            <img
              src={Profile}
              alt="Tareq Aziz"
              className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 group-hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 blur-2xl z-[-1]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
