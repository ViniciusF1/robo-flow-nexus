
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, Minimize2, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! 👋 I'm your Robot Automation assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      text: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "I can help you with that! Would you like to know more about our AI agents?",
        "That's a great question. Our enterprise solutions specialize in workflow optimization.",
        "You can find more information in our documentation or I can connect you with a specialist.",
        "Our automation tools can help reduce manual workload by up to 80%. Would you like a demo?",
        "I'd be happy to walk you through how our platform works. What specific workflow are you looking to optimize?",
      ];
      
      const botMessage: Message = {
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && !isMinimized && (
        <div className="mb-4 bg-white dark:bg-robot-dark rounded-lg shadow-xl w-80 sm:w-96 flex flex-col border border-border overflow-hidden">
          <div className="p-3 bg-robot-purple/10 border-b border-border flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-robot-purple to-robot-cyan flex items-center justify-center text-white">
                <MessageCircle size={16} />
              </div>
              <span className="ml-2 font-medium">Robot Assistant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={toggleMinimize}
              >
                <Minimize2 size={14} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 hover:text-red-500"
                onClick={toggleChat}
              >
                <X size={16} />
              </Button>
            </div>
          </div>
          
          <div className="flex-grow p-4 h-80 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[80%] p-3 rounded-lg",
                  msg.sender === "bot" 
                    ? "bg-muted self-start rounded-bl-none" 
                    : "bg-robot-purple text-white self-end rounded-br-none"
                )}
              >
                {msg.text}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="p-3 border-t border-border flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow"
            />
            <Button type="submit" size="icon" className="bg-robot-purple hover:bg-robot-blue">
              <Send size={16} />
            </Button>
          </form>
        </div>
      )}
      
      {isOpen && isMinimized && (
        <div 
          className="mb-4 bg-white dark:bg-robot-dark rounded-lg shadow-xl border border-border p-3 cursor-pointer flex items-center"
          onClick={toggleMinimize}
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-robot-purple to-robot-cyan flex items-center justify-center text-white">
            <MessageCircle size={16} />
          </div>
          <span className="ml-2 font-medium">Robot Assistant</span>
          <Maximize2 size={16} className="ml-2" />
        </div>
      )}
      
      <Button
        onClick={toggleChat}
        className="h-14 w-14 rounded-full bg-gradient-to-r from-robot-purple to-robot-blue hover:opacity-90 shadow-lg flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
    </div>
  );
};

export default ChatBot;
