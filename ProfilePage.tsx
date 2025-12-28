import { Link } from "react-router-dom";
import { User, Shield, Bell, LogOut, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const settings = [
  { icon: User, label: "Account Settings", href: "#" },
  { icon: Shield, label: "Privacy & Security", href: "#" },
  { icon: Bell, label: "Notifications", href: "#" },
];

const ProfilePage = () => (
  <div className="min-h-screen pb-24 lg:pb-8">
    <header className="bg-secondary/30 border-b border-border/30">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Your Profile</h1>
            <p className="text-muted-foreground">Manage your account</p>
          </div>
        </div>
      </div>
    </header>

    <div className="container mx-auto px-4 lg:px-8 py-6 space-y-4">
      {settings.map((item) => (
        <Card key={item.label} variant="interactive">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </CardContent>
        </Card>
      ))}

      <Button variant="outline" className="w-full mt-8" asChild>
        <Link to="/">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Link>
      </Button>
    </div>
  </div>
);

export default ProfilePage;
