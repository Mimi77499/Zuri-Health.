import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Shield, Heart, MessageCircle } from "lucide-react";

const communityFeatures = [
  {
    icon: Shield,
    title: "Safe & Moderated",
    description: "Every group is carefully moderated to ensure respectful, supportive conversations. No judgment, no comparison."
  },
  {
    icon: Users,
    title: "Journey-Based Groups",
    description: "Connect with women at similar stages—whether you're trying to conceive, recovering emotionally, or simply learning about your body."
  },
  {
    icon: Heart,
    title: "Supportive Environment",
    description: "No pregnancy announcements in sensitive spaces. We protect your emotional wellbeing while fostering genuine connection."
  },
  {
    icon: MessageCircle,
    title: "Anonymous Participation",
    description: "Share your experiences and questions anonymously. Your privacy is always protected."
  }
];

const groups = [
  {
    name: "Trying to Conceive",
    members: "2.3k members",
    description: "A supportive space for women on their conception journey"
  },
  {
    name: "Cycle Awareness",
    members: "1.8k members",
    description: "Learn and share about understanding your menstrual cycle"
  },
  {
    name: "Emotional Wellness",
    members: "1.5k members",
    description: "Support for the emotional aspects of reproductive health"
  },
  {
    name: "Hormonal Health",
    members: "1.2k members",
    description: "Discussions about PCOS, endometriosis, and hormonal balance"
  }
];

const PublicCommunityPage = () => {
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
                You're Not Alone
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Join a community of African women supporting each other through every stage of 
                their reproductive health journey. Share experiences, find understanding, and 
                know that your feelings are valid.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50 text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Groups Preview */}
        <section className="py-16 lg:py-20 bg-sage/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Find Your Circle
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join groups that match your journey. Every space is designed to be safe, 
                supportive, and free from judgment.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {groups.map((group, index) => (
                <motion.div
                  key={group.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-border/50 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-foreground">
                          {group.name}
                        </h3>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                          {group.members}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {group.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Connect?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join Zuri Health to access the community and connect with women who understand 
                your journey.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/onboarding">Join the Community</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PublicCommunityPage;
