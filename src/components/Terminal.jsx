import { useState, useEffect, useRef } from "react";
import { FaTerminal } from "react-icons/fa";

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: "output", text: "Portfolio Terminal [Version 1.0.0]" },
    { type: "output", text: "(c) Alexander Medici. All rights reserved." },
    { type: "output", text: "" },
    { type: "output", text: 'Type "help" for available commands.' },
    { type: "output", text: "" },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const commands = {
    help: {
      description: "Display available commands",
      execute: () => [
        "Available commands:",
        "  help       - Display this help message",
        "  about      - About Alexander Medici",
        "  skills     - List technical skills",
        "  projects   - View featured projects",
        "  contact    - Get contact information",
        "  education  - View education background",
        "  experience - View work experience",
        "  social     - Social media links",
        "  clear      - Clear terminal screen",
        "  date       - Display current date and time",
        "  echo       - Echo a message (usage: echo <message>)",
        "",
      ],
    },
    about: {
      description: "About Alexander Medici",
      execute: () => [
        "╔════════════════════════════════════════════════════════╗",
        "║                   Alexander Medici                        ║",
        "║                Full-Stack  Developer                     ║",
        "╚════════════════════════════════════════════════════════╝",
        "",
        "Full-Stack  Developer passionate about building",
        "responsive, user-friendly web applications. Proficient in",
        "MongoDB,Express.js, React.js, NodeJs  JavaScript, and modern web technologies.",
        "Location: Toronto, Ontario, Canada",
        "Experience: 8+years",
        "",
      ],
    },
    skills: {
      description: "List technical skills",
      execute: () => [
        "TECHNICAL SKILLS:",
        "",
        "├─ Frontend:",
        "│  ├─ HTML5, CSS3, JavaScript (ES6+)",
        "│  ├─ TypeScript",
        "│  ├─ React.js",
        "│  └─ Redux, Context API",
        "│",
        "├─ Styling & UI:",
        "│  ├─ Tailwind CSS",
        "│  ├─ SASS/SCSS",
        "│  ├─ Bootstrap",
        "│  ├─ ShadCN",
        "│  └─ Material UI",
        "│",
        "├─ Backend:",
        "│  ├─ Node.js, Express.js",
        "│  └─ MongoDB, MySQL",
        "│",
        "└─ Tools & Others:",
        "   ├─ Git, GitHub",
        "   ├─ VS Code",
        "   ├─ Figma",
        "   └─ Vercel, Netlify",
        "",
      ],
    },
    projects: {
      description: "View featured projects",
      execute: () => [
        "FEATURED PROJECTS:",
        "",
        "1. VYBE",
        "   A full-stack e-commerce app built on the MERN stack.",
        "   Tech: React.js, Node.js, MongoDB, PayPal, Multer",
        "   Features: User auth, Searching by category, Cart, Checkout",
        "",
        "2. Personal Portfolio",
        "   A fully interactive  Portfolio site built on React Three Fiber, Drei, and React Spring for 3D scenes and animation",
        "   Tech: React Three Fiber, Drei, and React Spring for 3D scenes and animation",
        "   Features: Project showcase, contact form, ",
        "",
        "3. Stock Watch List  Application",
        "   Finsage is a Next.js app that helps retail investors research, track, and optimize their portfolios.",
        "   Tech: App: Next.js 15, React 19, TypeScript, Tailwind CSS Data + Auth: MongoDB (Mongoose), Better Auth Jobs + AI: Inngest (cron + event), OpenAI/Gemini for summaries/chat Email: Nodemailer (Gmail transport by default), HTML templates Market data: Finnhub API UI: Radix primitives (customized), TradingView widgets, Lucide icons",
        "   Features: Employee management, responsive design",
        "",
      ],
    },
    contact: {
      description: "Get contact information",
      execute: () => [
        "CONTACT INFORMATION:",
        "",
        "📧 Email:    hellomedici@gmail.com",
        "📱 Phone:    +1(850)905-4948",
        "📍 Location: Toronto, Ontario, Canada",
        "",
        "Feel free to reach out for collaborations or opportunities!",
        "",
      ],
    },
    education: {
      description: "View education background",
      execute: () => [
        "EDUCATION:",
        "",
        "🎓 Software Engineering Immersive",
        "   General Assembly",
        "   8/6/2021",
        "",
        "🎓 Post Graduate Program in Full Stack Web Development(PGP)",
        "   California Institute of Technology",
        "   June 2020",
        "",
      ],
    },
    experience: {
      description: "View work experience",
      execute: () => [
        "WORK EXPERIENCE:",
        "",
        "💼 Full-Stack Developer",
        "   Scarborough Health Network",
        "  Oct 2022 – Oct 2025",
        "",
        "  •Developed responsive and reusable UI components using React and Material-UI, enhancing user interface consistency and reducing development time.",
        "•Built a secure internal mailing and notification system with NodeMailer, improving interdepartmental communication efficiency by 40%.",
        "•Integrated external applications into file import and parsing workflows, reducing manual data entry errors by 30%.",
        "•Implemented persistent data storage using UUID-based document retrieval, boosting access reliability and speed by 45%.",
        "•Optimized SQL queries across CRUD operations, reducing query response times by 50% and improving application performance.",
        "•Collaborated with cross-functional teams in an Agile environment to deploy new modules supporting over 5000, internal users.",
        "•Utilized Git for version control, ensuring reliable code traceability and reducing merge conflicts by 20%.",
        "",
        "💼 Full Stack Developer",
        "   Corsameccanica Inc.",
        "   Jun 2022 – Oct 2022",
        "",
        "•Developed and deployed a mobile-first web application integrating the Google Maps API and Dijkstra’s Algorithm to optimize route generation, improving navigation accuracy and performance for end users.",
        "•Enhanced an e-commerce platform by maintaining product data, updating inventory, and integrating Stripe API for secure online payments, ensuring seamless checkout and PCI-compliant transactions.",
        "•Refactored and modernized legacy front-end architecture using React.js and Styled Components, resulting in a 25% reduction in code redundancy and improved UI scalability.",
        "•Implemented CI/CD practices with Git-based version control and Agile sprint cycles, ensuring rapid delivery and consistent version tracking across multiple environments.",
        "•Collaborated with cross-functional teams to build RESTful APIs and modular backend components with Node.js and Express, improving system stability and integration speed.",
        "•Conducted code reviews, optimized API performance, and resolved production issues to maintain 99.9% application uptime and enhance user experience.",
        "",
        "💼 Full Stack  Developer",
        "  Property Management Squad ",
        "   Nov 2017 – Apr 2022",
        "",
        "•Developed a cross-platform property management web application using React, Node.js, and MongoDB, improving tenant–landlord communication and issue resolution time by 40%.",
        "• Implemented real-time bi-directional messaging with Socket.io, enhancing user engagement and platform responsiveness.",
        "• Designed and deployed a document and payment dashboard using Express File Upload and MongoDB, streamlining document storage and digital payment workflows.",
        "• Integrated Ethereum smart contracts (Solidity) and MetaMask for secure, blockchain-based payment processing, ensuring transparency and reducing third-party dependency.",
        "• Built scalable, responsive front-end interfaces with React and Tailwind CSS, optimizing performance and reducing development time by 30%.",
        "",
      ],
    },
    social: {
      description: "Social media links",
      execute: () => [
        "SOCIAL MEDIA:",
        "",
        "🔗 LinkedIn:  https://www.linkedin.com/in/alexmedici/",
        "🐙 GitHub:    https://github.com/AlexanderMedici",
        "",
      ],
    },
    clear: {
      description: "Clear terminal screen",
      execute: () => "CLEAR",
    },
    date: {
      description: "Display current date and time",
      execute: () => [new Date().toString(), ""],
    },
    echo: {
      description: "Echo a message",
      execute: (args) => [args.join(" "), ""],
    },
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    // Add command to history
    setHistory((prev) => [...prev, { type: "input", text: trimmedCmd }]);
    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Parse command and arguments
    const parts = trimmedCmd.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Execute command
    if (commands[command]) {
      const output = commands[command].execute(args);
      if (output === "CLEAR") {
        setHistory([]);
      } else {
        setHistory((prev) => [
          ...prev,
          ...output.map((line) => ({ type: "output", text: line })),
        ]);
      }
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: "error",
          text: `'${command}' is not recognized as a command. Type 'help' for available commands.`,
        },
        { type: "output", text: "" },
      ]);
    }

    setCurrentInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(currentInput);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="h-full bg-black p-4 font-mono text-sm overflow-y-auto cursor-text"
      onClick={handleTerminalClick}
    >
      <div className="text-green-400">
        {history.map((entry, index) => (
          <div key={index} className="mb-1">
            {entry.type === "input" ? (
              <div className="flex">
                <span className="text-yellow-400 mr-2">C:\Portfolio&gt;</span>
                <span className="text-white">{entry.text}</span>
              </div>
            ) : entry.type === "error" ? (
              <div className="text-red-400">{entry.text}</div>
            ) : (
              <div className="text-green-400">{entry.text}</div>
            )}
          </div>
        ))}

        {/* Current Input Line */}
        <div className="flex">
          <span className="text-yellow-400 mr-2">C:\Portfolio&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-white caret-green-400"
            spellCheck="false"
            autoComplete="off"
          />
        </div>

        <div ref={terminalEndRef} />
      </div>
    </div>
  );
};

export default Terminal;
