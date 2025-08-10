import React from "react";
import { motion } from "framer-motion";

// Example projects data
const projects = [
  {
    title: "PixelVerse",
    description: "A modern, multi-page creative website built with the MERN stack (excluding MongoDB), featuring smooth animations, interactive UI, and a Nodemailer-powered contact form.",
    link: "https://pixel-verse-eight.vercel.app/",
  },
  {
    title: "Sentence Construction",
    description: "Interactive and visually engaging React TS quiz feedback with animated score display, personalized messages, and detailed question review.",
    link: "https://sentence-construction-two.vercel.app/",
  },
  {
    title: "Fun Game",
    description: "A responsive and interactive Game Hub built with React Vite and Tailwind CSS — includes fun games like Rock Paper Scissors, Tic Tac Toe, and Memory Match!.",
    link: "https://fun-game-nine.vercel.app/",
  },
   {
    title: "Data Analytics",
    description: "A responsive, interactive dashboard to manage and display user data such as Name, Age, Email, and Country, perfect for admin panels and user management systems.",
    link: "https://data-analytics-three.vercel.app/",
  },
   {
    title: "Auth System",
    description: "A simple full-stack auth system using React, Express.js, and SQLite3 with registration, login, hashed passwords, error handling, and show/hide password toggle.",
    link: "https://github.com/Srinithi2905/Auth-System",
  },
   {
    title: "User Table",
    description: "A simple user table built with React that fetches data from JSONPlaceholder and includes features like sorting and filtering.",
    link: "https://github.com/Srinithi2905/User-Table",
  },

];

export default function Projects() {
  return (
    <section className="py-12 bg-[#f8f9fa] ">
      <div className="max-w-6xl mx-auto px-6 ">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="p-5 flex flex-col justify-between h-full">
        <h3 className="!text-xl sm:!text-2xl font-semibold !text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mt-2 flex-grow">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block !text-[#e66c8e] cursor-pointer font-medium hover:underline"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}
