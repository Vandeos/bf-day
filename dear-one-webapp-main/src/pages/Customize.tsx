import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ArrowLeft, Sparkles, Star, Moon, Sun } from "lucide-react";
import romanticBackground from "@/assets/romantic-background.jpg";

const Customize = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const name = searchParams.get("name") || "Sweetheart";
  
  const [selectedStickers, setSelectedStickers] = useState<string[]>([]);
  
  const stickerOptions = [
    { emoji: "💕", label: "Hearts" },
    { emoji: "🌹", label: "Rose" },
    { emoji: "💖", label: "Sparkling Heart" },
    { emoji: "🥰", label: "Love Face" },
    { emoji: "😘", label: "Kiss" },
    { emoji: "🌟", label: "Star" },
    { emoji: "✨", label: "Sparkles" },
    { emoji: "🌙", label: "Moon" },
    { emoji: "☀️", label: "Sun" },
    { emoji: "🦋", label: "Butterfly" },
    { emoji: "🌸", label: "Blossom" },
    { emoji: "💐", label: "Bouquet" }
  ];

  const handleStickerToggle = (emoji: string) => {
    setSelectedStickers(prev => 
      prev.includes(emoji) 
        ? prev.filter(s => s !== emoji)
        : [...prev, emoji]
    );
  };

  const handleContinue = () => {
    const params = new URLSearchParams();
    params.set("name", name);
    if (selectedStickers.length > 0) {
      params.set("stickers", selectedStickers.join(","));
    }
    navigate(`/letter?${params.toString()}`);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative py-8"
      style={{ backgroundImage: `url(${romanticBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-soft opacity-80"></div>
      
      {/* Navigation */}
      <div className="relative z-10 px-6 mb-8">
        <Button 
          variant="elegant" 
          onClick={() => navigate("/")}
          className="inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <Card className="p-8 md:p-10 bg-white/95 backdrop-blur-sm shadow-romantic border-0">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-romantic rounded-full mb-4 animate-float">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-deep-rose mb-2">
              Make it Special, {name}!
            </h1>
            <p className="text-muted-foreground">
              Choose some beautiful stickers to decorate your letter 💕
            </p>
          </div>

          {/* Sticker Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-deep-rose mb-4 text-center">
              Select Your Favorite Decorations
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
              {stickerOptions.map((sticker) => (
                <button
                  key={sticker.emoji}
                  onClick={() => handleStickerToggle(sticker.emoji)}
                  className={`
                    p-4 rounded-xl border-2 transition-all duration-300 hover:scale-110
                    ${selectedStickers.includes(sticker.emoji)
                      ? 'border-primary bg-gradient-romantic text-white shadow-glow'
                      : 'border-border bg-white/80 hover:border-primary'
                    }
                  `}
                >
                  <div className="text-2xl md:text-3xl mb-1">{sticker.emoji}</div>
                  <div className="text-xs font-medium">{sticker.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Stickers Preview */}
          {selectedStickers.length > 0 && (
            <div className="mb-6 p-4 bg-gradient-soft rounded-xl border border-rose-gold/20">
              <p className="text-sm font-medium text-deep-rose mb-2 text-center">
                Your selected decorations:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {selectedStickers.map((emoji, index) => (
                  <span 
                    key={index} 
                    className="text-2xl animate-pulse-glow"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Continue Button */}
          <div className="flex justify-center">
            <Button 
              variant="romantic" 
              size="lg" 
              onClick={handleContinue}
              className="inline-flex items-center text-lg px-8"
            >
              Create My Letter
              <Heart className="w-5 h-5 ml-2" fill="currentColor" />
            </Button>
          </div>

          {/* Skip Option */}
          <div className="text-center mt-4">
            <Button 
              variant="ghost" 
              onClick={handleContinue}
              className="text-muted-foreground hover:text-primary"
            >
              Skip decorations
            </Button>
          </div>
        </Card>
      </div>

      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-4xl animate-float" style={{ animationDelay: '0s' }}>💕</div>
        <div className="absolute top-40 right-20 text-3xl animate-float" style={{ animationDelay: '1s' }}>🌹</div>
        <div className="absolute bottom-32 left-20 text-3xl animate-float" style={{ animationDelay: '2s' }}>✨</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🦋</div>
      </div>
    </div>
  );
};

export default Customize;