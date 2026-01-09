import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import outlookIcon from "../assets/images/outlook.png";

const OutlookMail = () => {
  const [formData, setFormData] = useState({
    fromName: "",
    fromEmail: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

  const canSend = useMemo(
    () => Boolean(serviceId && templateId && publicKey),
    [serviceId, templateId, publicKey]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!canSend) {
      setStatus({
        type: "error",
        message: "Email service is not configured. Check your .env values.",
      });
      return;
    }

    if (
      !formData.fromName.trim() ||
      !formData.fromEmail.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all fields before sending.",
      });
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fromName,
          from_email: formData.fromEmail,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.fromEmail,
        },
        publicKey
      );
      toast.success("Message sent successfully.");
      setStatus({
        type: "success",
        message: "Message sent. Thanks for reaching out!",
      });
      setFormData({
        fromName: "",
        fromEmail: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Message failed to send. Please try again.");
      setStatus({
        type: "error",
        message:
          "Message failed to send. Please try again or check EmailJS config.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="h-full w-full">
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <div className="flex flex-col h-full bg-[#0e1726]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3 min-w-0">
            <img src={outlookIcon} alt="Outlook" className="h-8 w-8 flex-shrink-0" />
            <div>
              <p className="text-sm text-white/70">Outlook</p>
              <h2 className="text-base sm:text-lg font-semibold text-white">
                New message
              </h2>
            </div>
          </div>
          <div className="text-xs text-white/60 sm:text-right">
            Connected via EmailJS
          </div>
        </div>

        <div className="flex flex-1 flex-col lg:flex-row min-h-0">
          <aside className="lg:w-60 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0b1220]">
            <div className="p-4">
              <button
                type="button"
                className="w-full rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-blue-400 transition-colors"
                disabled
              >
                Compose
              </button>
            </div>
            <div className="px-4 pb-4">
              <p className="text-xs uppercase tracking-wide text-white/40 mb-2">
                Folders
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
                  <span>Inbox</span>
                  <span className="text-xs text-white/50">12</span>
                </li>
                <li className="rounded-md px-3 py-2 hover:bg-white/5">Sent</li>
                <li className="rounded-md px-3 py-2 hover:bg-white/5">
                  Drafts
                </li>
                <li className="rounded-md px-3 py-2 hover:bg-white/5">
                  Archive
                </li>
              </ul>
            </div>
          </aside>

          <main className="flex-1 overflow-y-auto">
            <form
              onSubmit={handleSubmit}
              className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
            >
              <div className="rounded-lg bg-[#111b2e] border border-white/10 p-4 sm:p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs uppercase tracking-wide text-white/50">
                      Your Name
                    </span>
                    <input
                      type="text"
                      name="fromName"
                      value={formData.fromName}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-md bg-[#0b1220] border border-white/10 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Jane Doe"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-wide text-white/50">
                      Your Email
                    </span>
                    <input
                      type="email"
                      name="fromEmail"
                      value={formData.fromEmail}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-md bg-[#0b1220] border border-white/10 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="jane@example.com"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs uppercase tracking-wide text-white/50">
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md bg-[#0b1220] border border-white/10 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Let’s build something great"
                  />
                </label>

                <label className="block">
                  <span className="text-xs uppercase tracking-wide text-white/50">
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    className="mt-2 w-full rounded-md bg-[#0b1220] border border-white/10 px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                    placeholder="Share details about your project..."
                  />
                </label>

                {status.message && (
                  <div
                    className={`rounded-md px-3 py-2 text-sm ${
                      status.type === "success"
                        ? "bg-emerald-500/20 text-emerald-200"
                        : "bg-rose-500/20 text-rose-200"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-xs text-white/50">
                    Messages are sent securely using EmailJS.
                  </p>
                  <button
                    type="submit"
                    disabled={isSending || !canSend}
                    className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? "Sending..." : "Send"}
                  </button>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default OutlookMail;
