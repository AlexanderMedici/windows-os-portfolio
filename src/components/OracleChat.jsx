import { useMemo, useState } from "react";

const OracleChat = () => {
  const qaPairs = useMemo(
    () => [
      {
        question:
          "What MERN projects has Alexander Medici shipped end-to-end?",
        answer:
          "He has delivered full-stack apps with React, Node.js, Express, and MongoDB, including dashboards, real-time features, and responsive UIs.",
      },
      {
        question: "How does Alexander structure a React app for scale?",
        answer:
          "He uses feature-based folders, shared UI primitives, and clear state boundaries for maintainable growth.",
      },
      {
        question: "How does Alexander manage client and server state?",
        answer:
          "He combines React Query for server state with Context or Redux for UI state, keeping data flows predictable.",
      },
      {
        question: "How does Alexander secure Node/Express APIs?",
        answer:
          "He adds validation, auth, rate limiting, and careful error handling to keep APIs secure and reliable.",
      },
      {
        question: "What is his approach to MongoDB schema design?",
        answer:
          "He models data around access patterns, adds indexes for hot queries, and keeps documents consistent.",
      },
      {
        question: "How does Alexander handle deployment and env config?",
        answer:
          "He uses CI/CD pipelines, separates environments, and manages secrets through platform env vars.",
      },
      {
        question: "How does Alexander test MERN applications?",
        answer:
          "He writes focused unit tests, integration tests for APIs, and user-flow checks for critical paths.",
      },
      {
        question: "How does he optimize performance?",
        answer:
          "He optimizes React rendering, trims payloads, indexes DB queries, and monitors bottlenecks.",
      },
      {
        question: "How does Alexander collaborate on teams?",
        answer:
          "He uses Git workflows, clear PRs, and proactive communication to keep work aligned.",
      },
      {
        question: "Describe a tough MERN bug he solved.",
        answer:
          "He diagnosed a real-time update issue by tracing API events and socket state, then stabilized the flow with retries and cleanup.",
      },
      {
        question:
          "Culture fit: how does Alexander handle feedback and cross-team work?",
        answer:
          "He welcomes feedback, documents decisions, and stays aligned with product and design to ship polished results.",
      },
      {
        question: "What business problems does Alexander solve fastest?",
        answer:
          "He quickly delivers responsive UIs, clean API integrations, and performance fixes that unblock launches.",
      },
      {
        question: "How does Alexander estimate scope and timelines?",
        answer:
          "He breaks work into milestones, identifies risks early, and provides clear delivery ranges.",
      },
      {
        question: "What is his process for discovery and requirements?",
        answer:
          "He runs a short discovery to align goals, user flows, and priorities before building.",
      },
      {
        question: "How does he handle maintenance and post-launch support?",
        answer:
          "He offers fixes, updates, and monitoring support to keep apps stable after launch.",
      },
      {
        question: "What communication cadence does Alexander prefer?",
        answer:
          "He prefers weekly updates with async check-ins for fast feedback and alignment.",
      },
      {
        question: "Can he work within an existing design system or codebase?",
        answer:
          "Yes. He can extend existing components and follow team conventions without disruption.",
      },
      {
        question: "How does he handle accessibility and performance?",
        answer:
          "He follows accessibility best practices and optimizes rendering and network performance.",
      },
      {
        question: "What is his availability and typical engagement length?",
        answer:
          "He is available for both short sprints and longer-term engagements based on project needs.",
      },
    ],
    []
  );

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi, I am Oracle. Ask about Alexander Medici or pick a question.",
    },
  ]);

  const handleAsk = (question, answer) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      { role: "assistant", text: answer },
    ]);
  };

  return (
    <div className="h-full w-full bg-[#0f1117] text-white">
      <div className="flex h-full flex-col">
        <div className="border-b border-white/10 px-4 py-3 sm:px-6">
          <p className="text-xs uppercase tracking-wide text-white/50">
            Oracle
          </p>
          <h2 className="text-base sm:text-lg font-semibold">
            Alexander Medici Q&A
          </h2>
        </div>

        <div className="flex flex-1 flex-col lg:flex-row min-h-0">
          <aside className="lg:w-72 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0b0e14]">
            <div className="px-4 py-4">
              <p className="text-xs uppercase tracking-wide text-white/40 mb-3">
                Suggested questions
              </p>
              <div className="flex flex-col gap-2">
                {qaPairs.map((item) => (
                  <button
                    key={item.question}
                    type="button"
                    className="text-left rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                    onClick={() => handleAsk(item.question, item.answer)}
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1 overflow-y-auto">
            <div className="mx-auto flex h-full w-full max-w-3xl flex-col px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex-1 space-y-4 overflow-y-auto pr-1">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm sm:text-base ${
                        message.role === "user"
                          ? "bg-blue-500 text-white"
                          : "bg-white/10 text-white/90"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/60">
                Select a question from the left to simulate an AI response.
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default OracleChat;
