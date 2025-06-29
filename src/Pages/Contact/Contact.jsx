import React, { useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vgg64d6", // e.g., service_qwxyz
        "template_3v2vs9b", // e.g., template_abc12
        formRef.current,
        "R8lN3gDEwy7pBEsPS"   // e.g., XxYZpO_cVxxxxxx
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
        {/* Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col justify-center gap-6"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-xl" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h4>
              <p className="text-gray-600 dark:text-gray-400">aziztareq754@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-green-500 text-xl" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h4>
              <p className="text-gray-600 dark:text-gray-400">+8801517854691</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-green-600 text-xl" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">WhatsApp</h4>
              <p className="text-gray-600 dark:text-gray-400">+8801517854691</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            
            <div className="flex gap-3">
                <a href="https://github.com/tareqaziz1187"><FaGithub size={25}/></a>
                <a href="https://www.linkedin.com/in/tareq-aziz-185373268/"><FaLinkedinIn size={25} color="blue" /></a>
                <a href="https://x.com/TareqAz39544483"><FaTwitter size={25} color="blue"/></a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md space-y-5 flex flex-col justify-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your message..."
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Map */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-md h-full"
        >
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29182.388045181982!2d90.32544095!3d23.896762699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1751166694690!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full border-0"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
