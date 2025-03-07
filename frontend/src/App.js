import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane, FaUser } from "react-icons/fa";
import axios from "axios"; // Add axios to make HTTP requests
import "./App.css";

function App() {
  // State declarations
  const [sessionId, setSessionId] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null); // To auto-scroll to the latest message

  // Start new session
  const startNewSession = async () => {
    try {
      const response = await axios.post('http://localhost:8000/start-session');
      setSessionId(response.data.session_id);
      setMessages([]); // Clear the previous chat history
      setError('');
    } catch (err) {
      setError('Failed to start new session');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || !sessionId) return;

    setIsLoading(true);
    setError("");

    try {
      setMessages((prev) => [...prev, { role: "user", content: input }]);

      const response = await axios.post("http://localhost:8000/chat", {
        message: input,
        session_id: sessionId,
      });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.data.response },
      ]);

      setInput(""); // Clear the input field
    } catch (err) {
      setError(err.response?.data?.detail || "Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to the bottom when a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize session on mount
  useEffect(() => {
    startNewSession();
  }, []);

  // Restart session
  const handleRestartSession = () => {
    setSessionId(""); // Reset session ID
    startNewSession(); // Start a new session
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4 w-full">
      <h1 className="text-3xl font-bold text-white mb-6">Need Assistance? I'm Here!</h1>
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Chat Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center space-x-4">
          <div>
            <FaUser size={24} />
          </div>
          <div>
            <h1 className="text-lg font-semibold">ChatMate</h1>
            <p className="text-sm">How can I assist you today?</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex flex-col space-y-4 px-4 py-6 max-h-96 overflow-y-auto bg-gray-50 rounded-b-lg">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                <p>{msg.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-center mb-4">
            {error}{" "}
            <button
              onClick={handleRestartSession}
              className="text-blue-600 underline"
            >
              Restart Session
            </button>
          </div>
        )}

        {/* Input and Send Button */}
        <div className="flex items-center p-4 space-x-2 border-t border-gray-200 bg-white">
          <input
            type="text"
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            disabled={isLoading}
          />
          <button
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : <FaPaperPlane size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;