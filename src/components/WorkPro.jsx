import React from "react";
import {
  FaGithub,
  FaHotel,
  FaReact,
  FaChartBar,
  FaLaptopCode,
} from "react-icons/fa";
import { SiNetflix, SiUdemy } from "react-icons/si";
import { motion } from "framer-motion";

const WorkPro = () => {
  const projects = [
    {
      name: "Business Website",
      icon: <FaLaptopCode className="text-5xl text-blue-400" />,
      desc: "A professional corporate website built with React and Tailwind, focusing on clean UI and responsive design.",
      link: "https://github.com/asad3407886839/Business-Website",
    },
    {
      name: "Hotel Booking System",
      icon: <FaHotel className="text-5xl text-rose-400" />,
      desc: "Hotel booking web app with room management, real-time availability, and payment integration.",
      link: "https://github.com/asad3407886839/Hotel",
    },
    {
      name: "Netflix Clone",
      icon: <SiNetflix className="text-5xl text-red-500" />,
      desc: "A streaming UI inspired by Netflix, built using React, Tailwid css.",
      link: "https://github.com/asad3407886839/Netflix-Clone",
    },
    {
      name: "Udemy Clone",
      icon: <SiUdemy className="text-5xl text-purple-500" />,
      desc: "An e-learning platform with course listings, user authentication, and responsive layout.",
      link: "https://github.com/asad3407886839/Udmey-Clone",
    },
    {
      name: "Real Estate Website",
      icon: <FaReact className="text-5xl text-cyan-400" />,
      desc: "Property listing platform with filters, map view, and smooth animations for buyers and sellers.",
      link: "https://github.com/asad3407886839/Real-Estate-website",
    },
    {
      name: "ERP Management System",
      icon: <FaChartBar className="text-5xl text-green-400" />,
      desc: "A complete ERP dashboard that includes Student, Teacher, and Admin panels, as well as Hospital Management, E-Commerce, Ambulance Management, and many other systems — all of which I have worked on in this project.",
      link: "https://github.com/asad3407886839/ERP-system",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-9400 via-gray-800 to-black flex flex-col items-center py-14 px-5">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold  to-teal-400 mb-10 tracking-wide"
      >
        My React Projects 🚀
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.06 }}
            className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{project.icon}</div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              {project.name}
            </h2>
            <p className="text-gray-300 text-sm mb-5 px-2">{project.desc}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg font-medium shadow-md hover:from-blue-600 hover:to-teal-500 transition-all"
            >
              <FaGithub className="text-lg" />
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkPro;
