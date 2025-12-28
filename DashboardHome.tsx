import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Sparkles, Calendar, MessageCircle, MapPin, Sun, Moon, 
  Cloud, Heart, ArrowRight, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// Cycle phase data
const cyclePhases = {
  menstrual: {
    name: "Menstrual Phase",
    day: "Day 1-5",
    icon: Moon,
    color: "text-destructive/70",
    bgColor: "bg-destructive/10",
    energy: "Lower energy is natural",
    mood: "You may feel more introspective",
    care: "Rest, warmth, and gentle movement",
  },
  follicular: {
    name: "Follicular Phase",
    day: "Day 6-14",
    icon: Sun,
    color: "text-accent",
    bgColor: "bg-accent/10",
    energy: "Rising energy",
    mood: "Creativity and optimism often increase",
    care: "Great time for new projects",
  },
  ovulation: {
    name: "Ovulation Phase",
    day: "Day 14-16",
    icon: Sparkles,
    color: "text-primary",
    bgColor: "bg-primary/10",
    energy: "Peak energy",
    mood: "Feeling confident and social",
    care: "Embrace your natural glow",
  },
  luteal: {
    name: "Luteal Phase",
    day: "Day 17-28",
    icon: Cloud,
    color: "text-muted-foreground",
    bgColor: "bg-secondary",
    energy: "Gradually decreasing",
    mood: "More reflective, possibly sensitive",
    care: "Prioritize self-care and rest",
  },
};

const quickActions = [
  { href: "/dashboard/chat", label: "Talk to Ava", icon: MessageCircle, color: "bg-primary/10 text-primary" },
  { href: "/dashboard/cycle", label: "Log Symptoms", icon: TrendingUp, color: "bg-accent/10 text-accent" },
  { href: "/dashboard/resources", label: "Find Care", icon: MapPin, color: "bg-secondary text-foreground" },
];

const DashboardHome = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [currentPhase] = useState<keyof typeof cyclePhases>("follicular");
  const [timeOfDay, setTimeOfDay] = useState<"morning" | "afternoon" | "evening">("morning");

  useEffect(() => {
    // Get user data from onboarding
    const onboardingData = localStorage.getItem("zuriOnboarding");
    if (onboardingData) {
      const data = JSON.parse(onboardingData);
      // In a real app, we'd have a name. For demo, use feeling-based greeting
    }

    // Determine time of day
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay("morning");
    else if (hour < 18) setTimeOfDay("afternoon");
    else setTimeOfDay("evening");
  }, []);

  const greetings = {
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
  };

  const phase = cyclePhases[currentPhase];
  const PhaseIcon = phase.icon;

  return (
    <div className="min-h-screen pb-24 lg:pb-8">
      {/* Header */}
      <header className="bg-secondary/30 border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-1">
              {greetings[timeOfDay]}
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-2xl lg:text-3xl font-bold text-foreground">
              How are you feeling today?
            </motion.h1>
          </motion.div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-6 lg:py-8 space-y-6">
        {/* Emotional Check-in */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Card variant="sage" className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3">
                {["Hopeful", "Calm", "Tired", "Anxious", "Content"].map((mood) => (
                  <Button key={mood} variant="floating" size="sm" className="rounded-full">
                    {mood}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cycle Phase Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Card variant="elevated">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Your Cycle Today</CardTitle>
                <Link to="/dashboard/cycle" className="text-sm text-primary hover:underline">
                  View details
                </Link>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl ${phase.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <PhaseIcon className={`w-7 h-7 ${phase.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">{phase.name}</h3>
                    <span className="text-xs text-muted-foreground">({phase.day})</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{phase.mood}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-xs text-foreground">
                      <Sun className="w-3 h-3" />
                      {phase.energy}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Daily Guidance */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Card variant="interactive" className="bg-gradient-to-br from-primary/5 to-secondary">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Today's Guidance</h3>
                  <p className="text-muted-foreground mb-3">
                    Your body is entering a phase of rising energy. This is a great time to start new projects, 
                    try new workouts, or schedule important conversations. Listen to what feels right for you.
                  </p>
                  <p className="text-sm text-primary italic">
                    "Trust your body's wisdom. It knows more than we often give it credit for."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="grid grid-cols-3 gap-3 lg:gap-4"
        >
          {quickActions.map((action) => (
            <motion.div key={action.href} variants={fadeInUp}>
              <Link to={action.href}>
                <Card variant="interactive" className="h-full">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl ${action.color} flex items-center justify-center mx-auto mb-3`}>
                      <action.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{action.label}</span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Ava Prompt */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Card variant="elevated" className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Questions on your mind?</h3>
                  <p className="text-sm text-muted-foreground">
                    Ava is here to listen and help you understand your body better.
                  </p>
                </div>
                <Button variant="hero" size="lg" asChild className="hidden sm:flex">
                  <Link to="/dashboard/chat">
                    Chat now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <Button variant="hero" size="lg" asChild className="w-full mt-4 sm:hidden">
                <Link to="/dashboard/chat">
                  Chat with Ava
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardHome;
