import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, Sun, Moon, Cloud, Sparkles, TrendingUp, 
  Droplets, Heart, Activity, ChevronLeft, ChevronRight 
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

const cyclePhases = [
  { name: "Menstrual", days: "1-5", icon: Moon, color: "bg-destructive/20 text-destructive/80", description: "Rest & restore" },
  { name: "Follicular", days: "6-13", icon: Sun, color: "bg-accent/20 text-accent", description: "Rising energy" },
  { name: "Ovulation", days: "14-16", icon: Sparkles, color: "bg-primary/20 text-primary", description: "Peak vitality" },
  { name: "Luteal", days: "17-28", icon: Cloud, color: "bg-muted text-muted-foreground", description: "Slow & reflect" },
];

const symptoms = [
  { id: "cramps", label: "Cramps", icon: "🌊" },
  { id: "headache", label: "Headache", icon: "🤕" },
  { id: "fatigue", label: "Fatigue", icon: "😴" },
  { id: "bloating", label: "Bloating", icon: "🎈" },
  { id: "mood", label: "Mood changes", icon: "🌈" },
  { id: "cravings", label: "Cravings", icon: "🍫" },
  { id: "energy", label: "High energy", icon: "⚡" },
  { id: "clear", label: "Feeling good", icon: "✨" },
];

const CycleInsights = () => {
  const [currentDay] = useState(8);
  const [cycleLength] = useState(28);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [currentMonth] = useState(new Date());

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const currentPhase = currentDay <= 5 ? 0 : currentDay <= 13 ? 1 : currentDay <= 16 ? 2 : 3;

  return (
    <div className="min-h-screen pb-24 lg:pb-8">
      {/* Header */}
      <header className="bg-secondary/30 border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <motion.div initial="hidden" animate="visible" variants={staggerChildren}>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-2">
              <Calendar className="w-6 h-6 text-primary" />
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Cycle Insights</h1>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-muted-foreground">
              Understanding your body's natural rhythms
            </motion.p>
          </motion.div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-6 lg:py-8 space-y-6">
        {/* Current Cycle Overview */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Card variant="elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Current Cycle</h2>
                  <p className="text-sm text-muted-foreground">Day {currentDay} of {cycleLength}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{cycleLength - currentDay}</p>
                  <p className="text-xs text-muted-foreground">days until period</p>
                </div>
              </div>

              {/* Cycle Progress Bar */}
              <div className="relative mb-6">
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentDay / cycleLength) * 100}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
                  />
                </div>
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full border-2 border-card shadow-md"
                  style={{ left: `calc(${(currentDay / cycleLength) * 100}% - 10px)` }}
                />
              </div>

              {/* Phase Indicators */}
              <div className="grid grid-cols-4 gap-2">
                {cyclePhases.map((phase, index) => (
                  <div
                    key={phase.name}
                    className={`p-3 rounded-xl text-center transition-all ${
                      index === currentPhase
                        ? "bg-primary/10 ring-2 ring-primary/30"
                        : "bg-secondary/50"
                    }`}
                  >
                    <phase.icon className={`w-5 h-5 mx-auto mb-1 ${
                      index === currentPhase ? "text-primary" : "text-muted-foreground"
                    }`} />
                    <p className={`text-xs font-medium ${
                      index === currentPhase ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {phase.name}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Current Phase Details */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Card variant="sage">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl ${cyclePhases[currentPhase].color} flex items-center justify-center flex-shrink-0`}>
                  {(() => {
                    const PhaseIcon = cyclePhases[currentPhase].icon;
                    return <PhaseIcon className="w-7 h-7" />;
                  })()}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {cyclePhases[currentPhase].name} Phase
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {currentPhase === 0 && "Your body is renewing. Honor this time with rest and gentle care."}
                    {currentPhase === 1 && "Energy is building. Great time for new beginnings and creative projects."}
                    {currentPhase === 2 && "You're at peak energy. Embrace your natural confidence."}
                    {currentPhase === 3 && "Time to slow down and reflect. Self-care is especially important now."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card text-xs">
                      <Activity className="w-3 h-3 text-primary" />
                      {cyclePhases[currentPhase].description}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Log Symptoms */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                How are you feeling today?
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-4">
                Tap to log your symptoms. This helps you understand your patterns.
              </p>
              <div className="grid grid-cols-4 gap-3">
                {symptoms.map((symptom) => (
                  <button
                    key={symptom.id}
                    onClick={() => toggleSymptom(symptom.id)}
                    className={`p-3 rounded-xl text-center transition-all ${
                      selectedSymptoms.includes(symptom.id)
                        ? "bg-primary/10 ring-2 ring-primary/30"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    <span className="text-xl mb-1 block">{symptom.icon}</span>
                    <span className="text-[10px] font-medium text-foreground">{symptom.label}</span>
                  </button>
                ))}
              </div>
              {selectedSymptoms.length > 0 && (
                <Button variant="hero" className="w-full mt-4">
                  Save Today's Log
                </Button>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Insights */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Card variant="interactive" className="bg-gradient-to-br from-accent/5 to-secondary">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Pattern Insight</h3>
                  <p className="text-sm text-muted-foreground">
                    Based on your tracking, you tend to experience more energy around days 10-14 of your cycle. 
                    This is a great time to schedule important activities or try new things.
                  </p>
                  <p className="text-xs text-primary mt-2 italic">
                    Remember: every body is unique. These insights are guides, not rules.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CycleInsights;
