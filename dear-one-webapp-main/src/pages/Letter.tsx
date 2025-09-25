import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ArrowLeft, Download } from "lucide-react";
import romanticBackground from "@/assets/romantic-background.jpg";

const Letter = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const name = searchParams.get("name") || "Sweetheart";
  const stickers = searchParams.get("stickers")?.split(",") || [];

  const letterContent = `My Dearest ${name},

Today is Boyfriend's Day, and I wanted to take a moment to tell you just how much you mean to me. From the very first day we met, you've brought nothing but joy, laughter, and love into my life.

Your smile lights up even my darkest days, and your laugh is the most beautiful sound I've ever heard. The way you care for others, your kindness, and your incredible heart make me fall in love with you more and more each day.

You're not just my boyfriend – you're my best friend, my partner in adventure, my safe place, and my greatest blessing. Every moment with you feels like a gift, and I'm so grateful that I get to call you mine.

Thank you for being exactly who you are – funny, caring, strong, and absolutely amazing. Thank you for loving me with your whole heart, for supporting my dreams, and for making every ordinary day feel extraordinary.

I love you more than words could ever express, and I can't wait to create many more beautiful memories together.

Happy Boyfriend's Day, my love. You deserve all the happiness in the world.

Forever and always yours,
With all my love 💕`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative py-8"
      style={{ backgroundImage: `url(${romanticBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-soft opacity-85"></div>
      
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

      {/* Letter Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <Card className="p-8 md:p-12 bg-white/95 backdrop-blur-sm shadow-romantic border-0">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-romantic rounded-full mb-4">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-deep-rose mb-2">
              A Love Letter for {name}
            </h1>
            <p className="text-muted-foreground text-sm">
              Happy Boyfriend's Day 💕
            </p>
          </div>

          {/* Letter Body */}
          <div className="prose prose-lg max-w-none">
            <div className="text-foreground leading-relaxed space-y-4 text-base md:text-lg">
              {letterContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center mt-8 mb-6">
            <div className="flex space-x-3 items-center">
              {stickers.length > 0 ? (
                stickers.map((sticker, index) => (
                  <span 
                    key={index} 
                    className="text-2xl animate-pulse-glow"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    {sticker}
                  </span>
                ))
              ) : (
                [1, 2, 3].map((i) => (
                  <Heart 
                    key={i} 
                    className="w-4 h-4 text-rose-gold animate-pulse" 
                    fill="currentColor" 
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                ))
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center mt-8">
            <Button 
              variant="romantic" 
              onClick={handlePrint}
              className="inline-flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Save This Letter
            </Button>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center mt-8 px-6">
        <p className="text-sm text-deep-rose/70">
          Made with 💕 • Share the love
        </p>
      </div>

      {/* Floating decorative stickers */}
      {stickers.length > 0 && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {stickers.slice(0, 4).map((sticker, index) => {
            const positions = [
              { top: '15%', left: '10%' },
              { top: '25%', right: '15%' },
              { bottom: '30%', left: '15%' },
              { bottom: '15%', right: '10%' }
            ];
            const position = positions[index] || positions[0];
            
            return (
              <div 
                key={index}
                className="absolute text-3xl animate-float opacity-30"
                style={{ 
                  ...position,
                  animationDelay: `${index * 0.8}s` 
                }}
              >
                {sticker}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Letter;