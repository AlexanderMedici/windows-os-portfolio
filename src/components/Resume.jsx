import React from "react";
import resumePdf from "../assets/images/Resume.pdf";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCode,
  FaDownload,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapPin,
  FaPhone,
  FaTools,
  FaUser,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Resume = () => {
  return (
    <div className="p-4 lg:p-6">
      {/* Header Section */}
      <div className="bg-gray-700 bg-opacity-80 border border-gray-600 rounded-lg p-6 mb-6 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">
              Alexander Medici
            </h1>
            <p className="text-blue-100 text-lg mb-3">FullStack Developer</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <FaMapPin className="mr-2" />
                Toronto, Canada
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                +1(850)905-4948
              </div>
              <div className="flex items-center">
                <MdEmail className="mr-2" />
                hellomedici@gmail.com
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={resumePdf}
              download="AlexanderMedici.pdf"
              className="bg-white text-blue-600 px-4 py-2 rounded font-medium hover:bg-blue-50 transition-colors flex items-center justify-center cursor-pointer"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
            <div className="flex gap-2 mt-1">
              <a
                href="https://www.linkedin.com/in/alexmedici/"
                className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded text-sm transition-colors flex items-center border border-gray-500"
              >
                <FaLinkedin className="mr-1" />
                LinkedIn
              </a>
              <a
                href="https://github.com/AlexanderMedici"
                className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded text-sm transition-colors flex items-center border border-gray-500"
              >
                <FaGithub className="mr-1" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <FaUser className="mr-3 text-blue-400" />
          Professional Summary
        </h3>
        <p className="text-gray-300 leading-relaxed">
          With 8+ years of experience in the MERN stack, I specialize in
          building high-performance applications, designing RESTful APIs,
          developing microservices, and implementing secure, data-heavy
          solutions across modern cloud platforms Proficient in React.js,
          JavaScript, HTML, CSS, and Tailwind CSS, with expertise in
          component-based architecture and state management. Dedicated to
          writing clean, efficient code, optimizing performance, and continuous
          learning.
        </p>
      </div>

      {/* Experience Section */}
      <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <FaBriefcase className="mr-3 text-green-400" />
          Professional Experience
        </h3>

        <div className="border-l-4 border-gray-500 pl-6 relative">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-2">
              FullStack Developer
            </h4>
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <span className="text-blue-400 font-medium">Toronto, Ontario</span>
              <span className="bg-green-600 bg-opacity-20 text-green-400 px-2 py-1 rounded text-sm">
                Remote (Contract)
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <FaCalendarAlt className="mr-1" />
                Oct 2022 - Oct 2025
              </div>
            </div>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>
                 Developed responsive and reusable UI components using React
                and Material-UI, enhancing user interface consistency and
                reducing development time.
              </li>
              <li>
                 Built a secure internal mailing and notification system with
                NodeMailer, improving interdepartmental communication
                efficiency by 40%.
              </li>
              <li>
                 Integrated external applications into file import and
                parsing workflows, reducing manual data entry errors by 30%.
              </li>
              <li>
                 Implemented persistent data storage using UUID-based document
                retrieval, boosting access reliability and speed by 45%.
              </li>
              <li>
                 Optimized SQL queries across CRUD operations, reducing query
                response times by 50% and improving application performance.
              </li>
              <li>
                 Collaborated with cross-functional teams in an Agile
                environment to deploy new modules supporting over 5000
                internal users.
              </li>
              <li>
                 Utilized Git for version control, ensuring reliable code
                traceability and reducing merge conflicts by 20%.
              </li>
            </ul>
          </div>
        </div>
        <div className="border-l-4 border-gray-500 pl-6 relative">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-2">
              FullStack Developer
            </h4>
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <span className="text-blue-400 font-medium">
                Corsameccanica Inc.
              </span>
              <span className="bg-green-600 bg-opacity-20 text-green-400 px-2 py-1 rounded text-sm">
                Remote (Contract)
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <FaCalendarAlt className="mr-1" />
                Jun 2022 - Oct 2022
              </div>
            </div>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>
                 Developed and deployed a mobile-first web application
                integrating the Google Maps API and Dijkstra's Algorithm to
                optimize route generation, improving navigation accuracy and
                performance for end users.
              </li>
              <li>
                Enhanced an e-commerce platform by maintaining product data,
                updating inventory, and integrating Stripe API for secure
                online payments, ensuring seamless checkout and PCI-compliant
                transactions.
              </li>
              <li>
                 Refactored and modernized legacy front-end architecture using
                React.js and Styled Components, resulting in a 25% reduction in
                code redundancy and improved UI scalability.
              </li>
              <li>
                 Implemented CI/CD practices with Git-based version control
                and Agile sprint cycles, ensuring rapid delivery and consistent
                version tracking across multiple environments
              </li>
              <li>
                 Collaborated with cross-functional teams to build RESTful
                APIs and modular backend components with Node.js and Express,
                improving system stability and integration speed.
              </li>
              <li>
                 Conducted code reviews, optimized API performance, and
                resolved production issues to maintain 99.9% application uptime
                and enhance user experience.
              </li>
            </ul>
          </div>
        </div>
        <div className="border-l-4 border-gray-500 pl-6 relative">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-2">
              FullStack Developer
            </h4>
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <span className="text-blue-400 font-medium">
                Property Management Squad
              </span>
              <span className="bg-green-600 bg-opacity-20 text-green-400 px-2 py-1 rounded text-sm">
                Remote (Contract)
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <FaCalendarAlt className="mr-1" />
                November 2018 - January 2022
              </div>
            </div>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>
                 Developed a cross-platform property management web
                application using React, Node.js, and MongoDB, improving
                tenant-landlord communication and issue resolution time by 40%.
              </li>
              <li>
                 Implemented real-time bi-directional messaging with
                Socket.io, enhancing user engagement and platform
                responsiveness.
              </li>
              <li>
                 Designed and deployed a document and payment dashboard using
                Express File Upload and MongoDB, streamlining document storage
                and digital payment workflows.
              </li>
              <li>
                 Integrated Ethereum smart contracts (Solidity) and MetaMask
                for secure, blockchain-based payment processing, ensuring
                transparency and reducing third-party dependency.
              </li>
              <li>
                 Built scalable, responsive front-end interfaces with React
                and Tailwind CSS, optimizing performance and reducing
                development time by 30%.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <FaCode className="mr-3 text-purple-400" />
          Featured Projects
        </h3>

        <div className="space-y-6">
          {/* Amazon  Clone */}
          <div className="border border-gray-600 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Amazon Clone - VYBE
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              A full-stack e-commerce app built on the MERN stack. Tech:
              React.js, Node.js, MongoDB, PayPal, Multer Features: User auth,
              Searching by category, Cart, Checkout
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-600 bg-opacity-40 text-slate-300 px-2 py-1 rounded text-xs border border-slate-500">
                React.js
              </span>
              <span className="bg-emerald-700 bg-opacity-40 text-emerald-300 px-2 py-1 rounded text-xs border border-emerald-600">
                Node.js
              </span>
              <span className="bg-emerald-700 bg-opacity-40 text-emerald-300 px-2 py-1 rounded text-xs border border-emerald-600">
                MongoDB
              </span>
              <span className="bg-indigo-700 bg-opacity-40 text-indigo-300 px-2 py-1 rounded text-xs border border-indigo-600">
                Multer
              </span>
              <span className="bg-indigo-700 bg-opacity-40 text-indigo-300 px-2 py-1 rounded text-xs border border-indigo-600">
                PayPal
              </span>
              <span className="bg-indigo-700 bg-opacity-40 text-indigo-300 px-2 py-1 rounded text-xs border border-indigo-600">
                Multer
              </span>
            </div>
          </div>

          {/* Portfolio */}
          <div className="border border-gray-600 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Personal Portfolio
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              A fully interactive Portfolio site built on React Three Fiber,
              Drei, and React Spring for 3D scenes and animation
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-600 bg-opacity-40 text-slate-300 px-2 py-1 rounded text-xs border border-slate-500">
                React Three Fiber
              </span>
              <span className="bg-indigo-700 bg-opacity-40 text-indigo-300 px-2 py-1 rounded text-xs border border-indigo-600">
                Drei
              </span>
              <span className="bg-amber-700 bg-opacity-40 text-amber-300 px-2 py-1 rounded text-xs border border-amber-600">
                3D scenes and animation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Education */}
        <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <FaGraduationCap className="mr-3 text-yellow-400" />
            Education
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white">
                Software Engineering Immersive
              </h4>
              <p className="text-blue-400 text-sm">General Assembly</p>
              <p className="text-gray-400 text-sm">8/6/2021</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">
                Post Graduate Program in Full Stack Web Development(PGP)
              </h4>
              <p className="text-blue-400 text-sm">
                California Institute of Technology
              </p>
              <p className="text-gray-400 text-sm">June 2020</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <FaTools className="mr-3 text-orange-400" />
            Technical Skills
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">
                Frontend
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "React.js",
                  "Next.js",
                  "Redux",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-600 bg-opacity-40 text-slate-300 px-2 py-1 rounded text-xs border border-slate-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">
                Styling & UI
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Tailwind CSS",
                  "Bootstrap",
                  "Chakra UI",
                  "Material UI",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-indigo-700 bg-opacity-40 text-indigo-300 px-2 py-1 rounded text-xs border border-indigo-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">
                Backend & Database
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "MongoDB", "MySQL"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-emerald-700 bg-opacity-40 text-emerald-300 px-2 py-1 rounded text-xs border border-emerald-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">
                Tools & Deployment
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Vercel"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-amber-700 bg-opacity-40 text-amber-300 px-2 py-1 rounded text-xs border border-amber-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
