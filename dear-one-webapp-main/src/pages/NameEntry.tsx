import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import romanticBackground from "@/assets/romantic-background.jpg";

const NameEntry = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      navigate(`/customize?name=${encodeURIComponent(name.trim())}`);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${romanticBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-soft opacity-80"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6">
        <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-romantic border-0">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-romantic rounded-full mb-4 animate-float">
              <Heart className="w-8 h-8 text-white" fill="currentColor" />
            </div>
            <h1 className="text-3xl font-bold text-deep-rose mb-2">
              Boyfriend's Day
            </h1>
            <p className="text-muted-foreground">
              A special message awaits you
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-deep-rose">
                Enter your name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your beautiful name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12 text-center text-lg border-rose-gold/30 focus:border-primary focus:ring-primary bg-white/80"
              />
            </div>

            <Button 
              type="submit" 
              variant="romantic" 
              size="lg" 
              className="w-full h-12 text-lg font-semibold"
              disabled={!name.trim()}
            >
              Continue to Your Letter
              <Heart className="w-5 h-5 ml-2" fill="currentColor" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Made with 💕 for someone special
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NameEntry;