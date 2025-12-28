import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Search, Filter, Phone, Clock, DollarSign, 
  Heart, Star, ExternalLink, ChevronDown 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const healthcareProviders = [
  {
    id: 1,
    name: "Lagos Women's Health Clinic",
    type: "Fertility & Gynecology",
    address: "12 Adeola Odeku Street, Victoria Island, Lagos",
    distance: "2.3 km",
    rating: 4.8,
    reviews: 124,
    cost: "medium",
    hours: "Mon-Sat: 8AM-6PM",
    phone: "+234 812 345 6789",
    services: ["Fertility consultation", "Prenatal care", "Hormonal health"],
  },
  {
    id: 2,
    name: "Abuja Fertility Center",
    type: "Fertility Specialist",
    address: "Plot 234, Wuse II, Abuja",
    distance: "4.1 km",
    rating: 4.6,
    reviews: 89,
    cost: "high",
    hours: "Mon-Fri: 9AM-5PM",
    phone: "+234 809 876 5432",
    services: ["IVF", "Fertility testing", "Egg freezing"],
  },
  {
    id: 3,
    name: "MamaCare Community Health",
    type: "Women's Health",
    address: "45 Herbert Macaulay Way, Yaba, Lagos",
    distance: "1.8 km",
    rating: 4.5,
    reviews: 203,
    cost: "low",
    hours: "Mon-Sun: 7AM-9PM",
    phone: "+234 805 432 1098",
    services: ["General checkups", "Cycle health", "Counseling"],
  },
  {
    id: 4,
    name: "Sisters Health Hub",
    type: "General Women's Health",
    address: "89 Ogunlana Drive, Surulere, Lagos",
    distance: "3.5 km",
    rating: 4.7,
    reviews: 156,
    cost: "low",
    hours: "Mon-Sat: 8AM-7PM",
    phone: "+234 701 234 5678",
    services: ["Reproductive health", "Family planning", "Mental wellness"],
  },
];

const filters = ["All", "Fertility", "General", "Mental Health", "Prenatal"];
const costLabels = { low: "Affordable", medium: "Moderate", high: "Premium" };
const costColors = { 
  low: "bg-primary/10 text-primary", 
  medium: "bg-accent/10 text-accent", 
  high: "bg-muted text-muted-foreground" 
};

const HealthcareResources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProviders = healthcareProviders.filter((provider) => {
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         provider.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All" || provider.type.toLowerCase().includes(activeFilter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pb-24 lg:pb-8">
      {/* Header */}
      <header className="bg-secondary/30 border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <motion.div initial="hidden" animate="visible" variants={staggerChildren}>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-2">
              <MapPin className="w-6 h-6 text-primary" />
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Find Care Near You</h1>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-muted-foreground">
              Trusted healthcare providers who understand your needs
            </motion.p>
          </motion.div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-6 lg:py-8 space-y-6">
        {/* Search & Filters */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, type, or service..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="space-y-4"
        >
          {filteredProviders.map((provider) => (
            <motion.div key={provider.id} variants={fadeInUp}>
              <Card variant="interactive">
                <CardContent className="p-5">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    {/* Main Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{provider.name}</h3>
                          <p className="text-sm text-muted-foreground">{provider.type}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${costColors[provider.cost as keyof typeof costColors]}`}>
                          {costLabels[provider.cost as keyof typeof costLabels]}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{provider.distance}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-accent fill-accent" />
                          <span>{provider.rating} ({provider.reviews})</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">{provider.address}</p>

                      {/* Services */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {provider.services.map((service) => (
                          <span key={service} className="px-2 py-1 rounded-md bg-secondary text-xs text-foreground">
                            {service}
                          </span>
                        ))}
                      </div>

                      {/* Quick Info */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{provider.hours}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5" />
                          <span>{provider.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex lg:flex-col gap-2">
                      <Button variant="hero" size="sm" className="flex-1 lg:flex-none">
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProviders.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
          </motion.div>
        )}

        {/* Disclaimer */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Card variant="sage" className="mt-8">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-foreground mb-1">
                    <strong>A note from Zuri:</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    These providers have been carefully selected for their sensitivity to women's health needs. 
                    We encourage you to choose what feels right for you. Professional care is always an option—never a pressure.
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

export default HealthcareResources;
