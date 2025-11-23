import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone, Calendar } from "lucide-react";

interface HeroProps {
  officeName: string;
  tagline: string;
}

const Hero: React.FC<HeroProps> = ({ officeName, tagline }) => {
  return (
    <div className="bg-background py-24 md:py-32 lg:py-48">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
          {officeName}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8">
          {tagline}
        </p>
        <div className="space-x-4">
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
          <Button variant="secondary">
            <Phone className="mr-2 h-4 w-4" />
            Call Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;