import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Empathy First",
    description: "We believe every woman deserves care that listens without judgment, understands without assumption, and supports without condition."
  },
  {
    icon: Shield,
    title: "Privacy & Safety",
    description: "Your health journey is yours alone. We protect your data and provide anonymous options because trust is earned, not demanded."
  },
  {
    icon: Users,
    title: "Cultural Sensitivity",
    description: "We honor the diverse experiences of African women, respecting traditions while providing evidence-based health guidance."
  },
  {
    icon: Globe,
    title: "Accessible Care",
    description: "Health information should reach everyone. We design for low bandwidth, multiple languages, and first-time users."
  }
];

const AboutPage = () => {
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
                Care That Listens
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Zuri Health was born from a simple belief: every woman deserves reproductive health 
                support that respects her dignity, understands her culture, and meets her where she is.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  To provide culturally intelligent, emotionally supportive reproductive health 
                  guidance to African women—reducing stigma, increasing understanding, and 
                  connecting women to the care they deserve.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border/50 hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <value.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 lg:py-20 bg-sage/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Why Zuri?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                "Zuri" means "beautiful" in Swahili. We chose this name because we believe 
                every woman's health journey—with all its challenges and triumphs—is beautiful 
                and worthy of compassionate support.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">1 in 4</p>
                  <p className="text-sm text-muted-foreground">African women face reproductive health challenges in silence</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">70%</p>
                  <p className="text-sm text-muted-foreground">Report feeling judged when seeking health information</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</p>
                  <p className="text-sm text-muted-foreground">Support available whenever you need it</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
