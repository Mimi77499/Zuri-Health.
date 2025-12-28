import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, Loader2, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "Why is my cycle irregular?",
  "What does ovulation feel like?",
  "Is it normal to have mood swings?",
  "How can I track my fertility?",
];

// Ava's response patterns - culturally aware and emotionally intelligent
const getAvaResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  if (message.includes("irregular") || message.includes("cycle")) {
    return `First, I want you to know that irregular cycles are more common than you might think, and experiencing this doesn't mean something is wrong with you.

Many factors can affect your cycle—stress, changes in your routine, what you eat, how much you sleep, and even the weather. Our bodies are incredibly responsive to our environments.

Here are some things that might help:
• Track your cycles for a few months to identify patterns
• Notice if irregularities coincide with stressful periods
• Consider whether your eating or exercise habits have changed

If you've experienced irregularity for more than 3 months, or if you're concerned, speaking with a healthcare provider can offer peace of mind. Would you like me to help you find care options near you?`;
  }
  
  if (message.includes("ovulation") || message.includes("fertile")) {
    return `Ovulation is when your body releases an egg, usually around the middle of your cycle. Every woman experiences it differently, and that's completely normal.

Some signs you might notice:
• A slight increase in body temperature
• Changes in cervical mucus (it may become clearer and more stretchy)
• Light cramping on one side (called "mittelschmerz")
• Sometimes, an increased sense of smell or energy

Not everyone notices these signs, and that's okay too. Your body communicates in its own unique way.

Would you like me to share more about tracking ovulation, or do you have other questions about your cycle?`;
  }
  
  if (message.includes("mood") || message.includes("emotional") || message.includes("feel")) {
    return `What you're feeling is valid, and hormonal changes throughout your cycle can genuinely affect your emotions—this isn't "just in your head."

During different phases of your cycle:
• After your period, rising estrogen often brings more energy and positivity
• Around ovulation, you might feel more confident and social
• In the luteal phase (before your period), progesterone can make you feel more introspective or sensitive

Understanding these patterns can help you be gentler with yourself. Instead of fighting against how you feel, you might plan demanding tasks for when you typically have more energy.

Remember: needing rest is not weakness. It's wisdom. Your body is communicating with you.

Is there something specific you're experiencing that you'd like to talk about?`;
  }
  
  if (message.includes("track") || message.includes("fertility") || message.includes("pregnant") || message.includes("conceive")) {
    return `I understand this is an important topic for you, and I'm here to support you however I can.

There are several ways to track your fertility:
• Cycle tracking: Note the first day of each period to understand your cycle length
• Basal body temperature: Your temperature rises slightly after ovulation
• Cervical mucus: Changes in texture can indicate fertility
• Ovulation predictor kits: These detect hormone surges

It's important to remember that fertility is influenced by many factors, and timing isn't everything. If you've been trying for a while, it's okay to feel frustrated—those feelings are valid.

Would you like me to explain any of these methods in more detail, or would you prefer to talk about something else?`;
  }
  
  if (message.includes("pain") || message.includes("cramp") || message.includes("hurt")) {
    return `I'm sorry you're experiencing discomfort. Pain is your body's way of communicating, and it deserves attention.

Some level of cramping during your period is common, but severe pain that disrupts your daily life isn't something you should just "push through."

Things that may help:
• Warmth (a heating pad or warm bath)
• Gentle movement or stretching
• Staying hydrated
• Over-the-counter pain relief if appropriate for you

If your pain is severe, has changed significantly, or concerns you, please consider speaking with a healthcare provider. You deserve to feel comfortable in your body.

Would you like me to help you find healthcare options, or is there something else I can help with?`;
  }
  
  // Default compassionate response
  return `Thank you for sharing that with me. Your questions and concerns are important, and you're not alone in wondering about these things.

I'm here to help you understand your body better, answer questions about your cycle, or simply listen if you need to talk through something.

Is there something specific about your health or cycle you'd like to explore? I'm here whenever you're ready.`;
};

const AvaChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `Hello, I'm Ava 💚

I'm here to support you with questions about your cycle, fertility, hormonal health, or anything on your mind. There's no judgment here—only understanding.

What would you like to talk about today?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const avaResponse: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: getAvaResponse(messageText),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, avaResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Chat Header */}
      <header className="bg-card border-b border-border/50 px-4 lg:px-6 py-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground">Ava</h1>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Your health companion</span>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 lg:px-6 py-6 space-y-4 pb-32 lg:pb-8">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] lg:max-w-[70%] ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-md"
                    : "bg-secondary rounded-2xl rounded-tl-md"
                } px-4 py-3`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">
                  {message.content}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-secondary rounded-2xl rounded-tl-md px-4 py-3">
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
                <span className="text-sm text-muted-foreground">Ava is thinking...</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Suggested questions (only show if few messages) */}
        {messages.length <= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-4"
          >
            <p className="text-xs text-muted-foreground mb-3">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => handleSend(question)}
                  className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm text-foreground hover:bg-secondary hover:border-primary/30 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="fixed bottom-16 lg:bottom-0 left-0 right-0 lg:left-[280px] bg-background/95 backdrop-blur-md border-t border-border/50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <Shield className="w-3.5 h-3.5 text-primary" />
            <span>Your conversation is private and not shared with anyone.</span>
          </div>
          <div className="flex items-end gap-3">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                rows={1}
                className="w-full resize-none rounded-2xl border border-border bg-card px-4 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                style={{ minHeight: "48px", maxHeight: "120px" }}
              />
            </div>
            <Button
              variant="hero"
              size="icon"
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className="h-12 w-12 flex-shrink-0"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvaChat;
