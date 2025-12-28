import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import zuriLogo from "@/assets/zuri-logo-icon.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

const Logo = ({ size = "md", showTagline = false }: LogoProps) => {
  const sizes = {
    sm: { icon: 32, text: "text-lg" },
    md: { icon: 40, text: "text-xl" },
    lg: { icon: 56, text: "text-2xl" },
  };

  return (
    <Link to="/" className="flex items-center gap-2 group">
      <motion.img
        src={zuriLogo}
        alt="Zuri Health"
        width={sizes[size].icon}
        height={sizes[size].icon}
        className="transition-transform duration-300 group-hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      />
      <div className="flex flex-col">
        <span className={`font-semibold text-foreground ${sizes[size].text} leading-tight`}>
          Zuri Health
        </span>
        {showTagline && (
          <span className="text-xs text-muted-foreground">Care that listens.</span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
