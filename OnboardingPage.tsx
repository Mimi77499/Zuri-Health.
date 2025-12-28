import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles, Heart, Sun, Moon, Shield, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from "@/components/Logo";

type Feeling = "hopeful" | "exhausted" | "scared" | "pressured" | "understand";
type Goal = "understand" | "conceive" | "recovering" | "general";

interface OnboardingState {
  feeling: Feeling | null;
  goal: Goal | null;
  cycleLength: number | null;
  isAnonymous: boolean;
}

const feelings = [
  { id: "hopeful" as Feeling, label: "I feel hopeful", icon: Sun, color: "bg-accent/20 border-accent/40" },
  { id: "exhausted" as Feeling, label: "I feel exhausted", icon: Moon, color: "bg-secondary border-border" },
  { id: "scared" as Feeling, label: "I feel scared", icon: Shield, color: "bg-primary/10 border-primary/30" },
  { id: "pressured" as Feeling, label: "I feel pressured", icon: Heart, color: "bg-destructive/10 border-destructive/30" },
  { id: "understand" as Feeling, label: "I just want to understand my body", icon: Sparkles, color: "bg-secondary border-primary/20" },
];

const goals = [
  { id: "understand" as Goal, title: "Understand my cycle", description: "Learn what's normal for your body" },
  { id: "conceive" as Goal, title: "Trying to conceive", description: "Support for your fertility journey" },
  { id: "recovering" as Goal, title: "Recovering emotionally", description: "Healing from loss or difficult experiences" },
  { id: "general" as Goal, title: "General health", description: "Overall reproductive wellness" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [state, setState] = useState<OnboardingState>({
    feeling: null,
    goal: null,
    cycleLength: null,
    isAnonymous: false,
  });

  const handleComplete = () => {
    // Store onboarding data in localStorage for demo
    localStorage.setItem("zuriOnboarding", JSON.stringify(state));
    navigate("/dashboard");
  };

  const canProceed = () => {
    if (step === 1) return state.feeling !== null;
    if (step === 2) return state.goal !== null;
    return true;
  };

  return (
    <div className="min-h-screen bg-background zuri-gradient-sage">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Step {step} of 3</span>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-1.5 rounded-full transition-colors ${
                    s <= step ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-12 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {/* Step 1: How are you feeling? */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInUp}
                className="text-center"
              >
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                    How are you feeling today?
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    There's no right answer. This helps us understand how to support you.
                  </p>
                </div>

                <div className="grid gap-4 mb-8">
                  {feelings.map((feeling) => (
                    <motion.button
                      key={feeling.id}
                      onClick={() => setState({ ...state, feeling: feeling.id })}
                      className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left flex items-center gap-4 ${
                        state.feeling === feeling.id
                          ? "border-primary bg-primary/10 shadow-card"
                          : `${feeling.color} hover:border-primary/50`
                      }`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        state.feeling === feeling.id ? "bg-primary/20" : "bg-background"
                      }`}>
                        <feeling.icon className={`w-6 h-6 ${
                          state.feeling === feeling.id ? "text-primary" : "text-muted-foreground"
                        }`} />
                      </div>
                      <span className={`text-lg font-medium ${
                        state.feeling === feeling.id ? "text-primary" : "text-foreground"
                      }`}>
                        {feeling.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: What brings you here? */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInUp}
                className="text-center"
              >
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                    What brings you here?
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    This helps us personalize your experience. You can change this anytime.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {goals.map((goal) => (
                    <motion.button
                      key={goal.id}
                      onClick={() => setState({ ...state, goal: goal.id })}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                        state.goal === goal.id
                          ? "border-primary bg-primary/10 shadow-card"
                          : "border-border bg-card hover:border-primary/50"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className={`text-lg font-semibold mb-1 ${
                        state.goal === goal.id ? "text-primary" : "text-foreground"
                      }`}>
                        {goal.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{goal.description}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Privacy preferences */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInUp}
                className="text-center"
              >
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                    Your privacy matters
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Choose how you'd like to use Zuri Health.
                  </p>
                </div>

                <div className="grid gap-4 mb-8">
                  <Card
                    variant={!state.isAnonymous ? "interactive" : "default"}
                    className={`p-6 cursor-pointer ${!state.isAnonymous ? "border-primary border-2" : ""}`}
                    onClick={() => setState({ ...state, isAnonymous: false })}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        !state.isAnonymous ? "bg-primary/20" : "bg-secondary"
                      }`}>
                        <Eye className={`w-6 h-6 ${!state.isAnonymous ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          Full experience
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Track your cycle, save conversations, and get personalized insights.
                          Your data is encrypted and never shared.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card
                    variant={state.isAnonymous ? "interactive" : "default"}
                    className={`p-6 cursor-pointer ${state.isAnonymous ? "border-primary border-2" : ""}`}
                    onClick={() => setState({ ...state, isAnonymous: true })}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        state.isAnonymous ? "bg-primary/20" : "bg-secondary"
                      }`}>
                        <EyeOff className={`w-6 h-6 ${state.isAnonymous ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          Anonymous mode
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Browse and chat without creating an account.
                          No data saved, complete privacy.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Your information is always protected and never sold.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {step > 1 ? (
              <Button variant="ghost" onClick={() => setStep(step - 1)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <Button
                variant="hero"
                size="lg"
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button variant="hero" size="lg" onClick={handleComplete}>
                Enter Zuri Health
                <Sparkles className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OnboardingPage;
