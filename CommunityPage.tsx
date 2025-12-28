import { motion } from "framer-motion";
import { Users, Heart, Shield, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const groups = [
  { id: 1, name: "Trying to Conceive", members: 1243, description: "Support for your fertility journey" },
  { id: 2, name: "Cycle Wellness", members: 892, description: "Understanding your body together" },
  { id: 3, name: "Healing Hearts", members: 567, description: "Recovery from loss, with compassion" },
  { id: 4, name: "New Beginnings", members: 445, description: "First-time pregnancy support" },
];

const CommunityPage = () => (
  <div className="min-h-screen pb-24 lg:pb-8">
    <header className="bg-secondary/30 border-b border-border/30">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-6 h-6 text-primary" />
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Community</h1>
        </div>
        <p className="text-muted-foreground">Safe spaces for shared experiences</p>
      </div>
    </header>

    <div className="container mx-auto px-4 lg:px-8 py-6 space-y-4">
      <Card variant="sage" className="mb-6">
        <CardContent className="p-5 flex items-start gap-3">
          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            This is a judgment-free space. No pregnancy announcements, no comparisons—just support.
          </p>
        </CardContent>
      </Card>

      {groups.map((group) => (
        <motion.div key={group.id} whileHover={{ scale: 1.01 }}>
          <Card variant="interactive">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{group.name}</h3>
                  <p className="text-sm text-muted-foreground">{group.description}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <Users className="w-3.5 h-3.5" />
                    <span>{group.members.toLocaleString()} members</span>
                  </div>
                </div>
                <Heart className="w-6 h-6 text-primary/40" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);

export default CommunityPage;
