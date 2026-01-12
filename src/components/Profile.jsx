import React from "react";
import me from "../assets/images/alex.jpg";
import resumePdf from "../assets/images/Resume.pdf";
import {
  FaDownload,
  FaRocket,
  FaBolt,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaLaptopCode,
  FaPalette,
  FaMobile,
  FaTools,
  FaProjectDiagram,
} from "react-icons/fa";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Profile = ({ currentTheme }) => {
  const themeColor = currentTheme?.color || "#60a5fa";

  return (
    <div className="p-4 lg:p-6">
      {/* Hero Section */}
      <div className="relative bg-gray-700 bg-opacity-80 rounded-xl p-6 lg:p-8 mb-6 overflow-hidden border border-gray-600">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-6">
          <div className="relative">
            <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={me}
                alt="Alexander Medici"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>{" "}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Alexander Medici
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-4 flex items-center justify-center lg:justify-start">
              <HiSparkles className="mr-2" />
              Senior Full-Stack Engineer
            </p>
            <p className="text-blue-100 text-sm lg:text-base leading-relaxed mb-6">
              Crafting digital experiences that blend creativity with
              functionality. Passionate about turning complex problems into
              simple, beautiful solutions.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href={resumePdf}
                download="AlexanderMedici.pdf"
                className="cursor-pointer text-white px-6 py-2 rounded-full font-semibold hover:opacity-80 transition-all flex items-center"
                style={{
                  backgroundColor: `${themeColor}50`,
                  borderColor: themeColor,
                  borderWidth: "2px",
                }}
              >
                <FaDownload className="mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats & Quick Info */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600 text-center">
          <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1">
            8+
          </div>
          <div className="text-xs lg:text-sm text-gray-300">
            Years in Full-Stack Engineer
          </div>
        </div>
        <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600 text-center">
          <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-1">
            20+
          </div>
          <div className="text-xs lg:text-sm text-gray-300">
            Production Platforms Deployed
          </div>
        </div>
        <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600 text-center">
          <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-1">
            10+
          </div>
          <div className="text-xs lg:text-sm text-gray-300">
            Organizations Powered
          </div>
        </div>
        <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600 text-center">
          <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-1">
            20+
          </div>
          <div className="text-xs lg:text-sm text-gray-300">
            Core Technologies in Daily Use
          </div>
        </div>
      </div>

      {/* About & Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* About Me */}
        <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg border border-gray-600">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <FaRocket className="text-2xl mr-3 text-blue-400" />
            About Me
          </h3>
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
            I design and lead the development of production-grade digital
            platforms that power real businesses. From secure cloud
            infrastructure and microservice backends to high-performance
            front-end systems, I build scalable application ecosystems
            engineered for reliability, growth, and long-term evolution. I
            specialize in architecting MERN-based platforms, secure API
            infrastructures, and cloud-deployed systems that support thousands
            of users, automate operations, and move real data, capital, and
            workflows at scale. I don't just ship features - I build the systems
            companies run on.
          </p>
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
            My toolkit includes React.js, JavaScript, HTML, CSS, MongoDB and
            Tailwind CSS - with a focus on component-based development and
            smooth state management. I take pride in writing clean, efficient
            code and constantly improving my skills to build faster,
            better-performing web applications.
          </p>
        </div>

        {/* Certifications */}
        <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg border border-gray-600">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <HiLightningBolt className="text-2xl mr-3 text-yellow-400" />
            Certifications
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-300">
                  Aviatrix Certified Engineer Multi-cloud networking, routing
                  architecture, and enterprise connectivity systems
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-300">
                  Scrum Foundation Professional Certificate (SFPC) Agile
                  delivery leadership, sprint governance, and engineering team
                  workflows
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-300">
                  Gremlin Certified Chaos Engineering Fault tolerance,
                  resilience testing, and production system reliability
                  engineering
                </span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-300">
                  Responsive Web Design Certification Modern UI architecture,
                  accessibility standards, and mobile-first engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services & Specializations */}
      <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg border border-gray-600 mb-6">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <FaProjectDiagram className="text-2xl mr-3 text-purple-400" />
          What I Do Best
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-600 bg-opacity-50 p-4 rounded-lg text-white border border-gray-500">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-3">
              <FaLaptopCode className="text-white text-2xl" />
            </div>
            <h4 className="font-semibold mb-2">Platform Architecture</h4>
            <p className="text-sm opacity-90">
              Designing scalable, secure, cloud-deployed application ecosystems
              that support real-world business operations and long-term system
              growth.
            </p>
          </div>
          <div className="bg-gray-600 bg-opacity-50 p-4 rounded-lg text-white border border-gray-500">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-3">
              <FaPalette className="text-white text-2xl" />
            </div>
            <h4 className="font-semibold mb-2">
              Full-Stack Systems Engineering
            </h4>
            <p className="text-sm opacity-90">
              Building production-grade front-end and back-end infrastructures
              using modern frameworks, modular architecture, and
              performance-first engineering.
            </p>
          </div>
          <div className="bg-gray-600 bg-opacity-50 p-4 rounded-lg text-white border border-gray-500">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-3">
              <FaMobile className="text-white text-2xl" />
            </div>
            <h4 className="font-semibold mb-2">
              Cloud & API Infrastructure
            </h4>
            <p className="text-sm opacity-90">
              Ensuring perfect experiences across all devices and screen sizes
            </p>
          </div>
          <div className="bg-gray-600 bg-opacity-50 p-4 rounded-lg text-white border border-gray-500">
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-3">
              <FaBolt className="text-white text-2xl" />
            </div>
            <h4 className="font-semibold mb-2">Performance Optimization</h4>
            <p className="text-sm opacity-90">
              Making websites lightning-fast with advanced optimization
              techniques
            </p>
          </div>
          <div className="bg-gray-600 bg-opacity-50 p-4 rounded-lg text-white border border-gray-500">
            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mb-3">
              <FaTools className="text-white text-2xl" />
            </div>
            <h4 className="font-semibold mb-2">
              Technical Leadership & Consulting
            </h4>
            <p className="text-sm opacity-90">
              Guiding architecture decisions, modernizing legacy systems, and
              helping teams select technologies that support scalability,
              security, and long-term maintainability.
            </p>
          </div>
        </div>
      </div>

      {/* Contact & Social */}
      <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg border border-gray-600">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <FaPhone className="text-2xl mr-3 text-green-400" />
          Let's Connect
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-500 bg-opacity-50 rounded-full flex items-center justify-center mr-4 border border-gray-500">
                <MdEmail className="text-white text-lg" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <div className="text-white">hellomedici@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <MdPhone className="text-white text-lg" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Phone</div>
                <div className="text-white">+1(850)905-0948</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                <MdLocationOn className="text-white text-lg" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Location</div>
                <div className="text-white">Toronto, Canada</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-4">
              Follow me on social media
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/alexmedici/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 cursor-pointer hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors flex items-center border border-gray-500"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a
                href="https://github.com/AlexanderMedici"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center border border-gray-600"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href="https://www.instagram.com/AlexanderMedici.pdf.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors flex items-center cursor-pointer border border-gray-500"
              >
                <FaInstagram className="mr-2" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
