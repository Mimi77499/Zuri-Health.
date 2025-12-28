import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, MessageCircle, MapPin, Shield, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-illustration.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const features = [
  {
    icon: Sparkles,
    title: "AI that listens, not judges",
    description: "Ava understands your questions and responds with compassion.",
    reassurance: "Your concerns are valid, and you deserve answers.",
  },
  {
    icon: Calendar,
    title: "Daily guidance based on your cycle",
    description: "Personalized insights that honor your body's natural rhythms.",
    reassurance: "Understanding your body is a journey, not a race.",
  },
  {
    icon: MessageCircle,
    title: "Myth-free, shame-free answers",
    description: "Evidence-based information presented with cultural sensitivity.",
    reassurance: "No question is too small or too personal.",
  },
  {
    icon: MapPin,
    title: "Care that connects you to real clinics",
    description: "Find trusted healthcare providers near you when you need them.",
    reassurance: "Professional care is always an option, never a pressure.",
  },
];


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden zuri-gradient-hero">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-secondary/40 blur-3xl" />
            <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="text-center lg:text-left"
              >
                <motion.div variants={fadeInUp} className="mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/50 text-sm font-medium text-foreground">
                    <Shield className="w-4 h-4 text-primary" />
                    Private & Judgment-free
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground mb-6"
                >
                  Culturally intelligent{" "}
                  <span className="text-primary">reproductive health</span> support for African women
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
                >
                  Understand your body. Reduce stigma. Get guidance that respects your reality.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/onboarding">
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="xl" asChild>
                    <Link to="/features">See How It Works</Link>
                  </Button>
                </motion.div>

                {/* Coming Soon indicator */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-12 flex items-center justify-center lg:justify-start"
                >
                  <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-secondary/80 border border-border/40">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-sm font-medium text-muted-foreground">Coming Soon</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                  <img
                    src={heroImage}
                    alt="Diverse African women in supportive community"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>

                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 lg:-left-12 bg-card rounded-2xl p-4 shadow-elevated border border-border/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Ava is here for you</div>
                      <div className="text-xs text-muted-foreground">Ask anything, anytime</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerChildren}
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block text-sm font-medium text-accent mb-4"
              >
                Why Zuri Health
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              >
                Care designed with you in mind
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                We understand the unique challenges African women face. Our platform is built
                to support, not pressure.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerChildren}
              className="grid md:grid-cols-2 gap-6 lg:gap-8"
            >
              {features.map((feature, index) => (
                <motion.div key={feature.title} variants={fadeInUp}>
                  <Card variant="interactive" className="h-full">
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground mb-3">{feature.description}</p>
                          <p className="text-sm text-primary/80 italic">
                            "{feature.reassurance}"
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Ava Preview Section */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                <motion.span
                  variants={fadeInUp}
                  className="inline-block text-sm font-medium text-accent mb-4"
                >
                  Meet Ava
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
                >
                  Your personal health companion who truly understands
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-muted-foreground mb-6 leading-relaxed"
                >
                  Ava is an AI companion trained to understand the cultural context of African women's health. 
                  She responds with warmth, never judgment, and always respects your journey.
                </motion.p>
                <motion.ul variants={staggerChildren} className="space-y-4 mb-8">
                  {[
                    "Answers questions about fertility, cycles, and hormonal health",
                    "Debunks myths with sensitivity and cultural awareness",
                    "Available 24/7 in English and Pidgin English",
                    "Completely private and anonymous",
                  ].map((item) => (
                    <motion.li
                      key={item}
                      variants={fadeInUp}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeInUp}>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/dashboard/chat">
                      Talk to Ava
                      <MessageCircle className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Chat Preview */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card variant="elevated" className="overflow-hidden">
                  <div className="bg-primary/5 px-6 py-4 border-b border-border/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Ava</div>
                        <div className="text-xs text-muted-foreground">Your health companion</div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-md px-4 py-3 max-w-[80%]">
                        <p className="text-sm">My cycle has been irregular lately and I'm worried something is wrong with me...</p>
                      </div>
                    </div>
                    {/* Ava response */}
                    <div className="flex justify-start">
                      <div className="bg-secondary rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                        <p className="text-sm text-foreground mb-2">
                          First, I want you to know that irregular cycles are more common than you might think, 
                          and experiencing this doesn't mean something is wrong with you.
                        </p>
                        <p className="text-sm text-foreground">
                          Many factors can affect your cycle—stress, changes in routine, sleep patterns, 
                          and even what you eat. Would you like to explore what might be happening?
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.div
                variants={fadeInUp}
                className="w-20 h-20 rounded-full bg-secondary mx-auto flex items-center justify-center mb-6"
              >
                <Users className="w-10 h-10 text-primary" />
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              >
                You're not alone in this journey
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              >
                Join a community of women who understand. Share experiences, find support, 
                and know that your story matters—all in a safe, moderated space.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button variant="sage" size="lg" asChild>
                  <Link to="/community">
                    Join the Community
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
              >
                Ready to understand your body better?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground mb-8"
              >
                Start your journey with Zuri Health today. No pressure, no judgment—just care that listens.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/onboarding">
                    Begin Your Journey
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
