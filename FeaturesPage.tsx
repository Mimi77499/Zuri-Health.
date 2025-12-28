import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Users, 
  Shield, 
  Brain,
  Heart,
  BookOpen
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Ava AI Companion",
    description: "Your emotionally intelligent health companion who listens without judgment, answers questions respectfully, and provides culturally aware guidance.",
    highlight: "Core Feature"
  },
  {
    icon: Calendar,
    title: "Cycle Insights",
    description: "Understand your body's rhythms with gentle daily guidance based on your cycle phase. Track patterns without pressure or anxiety.",
    highlight: null
  },
  {
    icon: Brain,
    title: "Myth-Free Education",
    description: "Get evidence-based answers to your health questions. We respectfully address cultural myths while honoring your beliefs.",
    highlight: null
  },
  {
    icon: Heart,
    title: "Emotional Check-ins",
    description: "Your emotional wellbeing matters. Regular check-ins help personalize your experience and provide relevant support.",
    highlight: null
  },
  {
    icon: MapPin,
    title: "Healthcare Resources",
    description: "Find trusted clinics, hospitals, and healthcare providers near you with transparent information about services and costs.",
    highlight: null
  },
  {
    icon: Users,
    title: "Safe Community",
    description: "Connect with other women on similar journeys in moderated, supportive groups. Share experiences without comparison or pressure.",
    highlight: null
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description: "Use Zuri anonymously if you prefer. Your data is encrypted, never sold, and you control what you share.",
    highlight: null
  },
  {
    icon: BookOpen,
    title: "Daily Guidance",
    description: "Receive personalized tips based on your cycle phase, helping you understand your energy, mood, and body each day.",
    highlight: null
  }
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Features Designed for You
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Every feature in Zuri Health was built with one goal: to support your reproductive 
                health journey with dignity, privacy, and cultural understanding.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`h-full border-border/50 hover:shadow-md transition-shadow ${
                    feature.highlight ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                  }`}>
                    <CardContent className="p-6">
                      {feature.highlight && (
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                          {feature.highlight}
                        </span>
                      )}
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Begin?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start your journey with Zuri Health today. No pressure, no judgment—just 
                supportive guidance whenever you need it.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/onboarding">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
