
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  ctaText?: string;
  ctaLink?: string;
  iconColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  ctaText,
  ctaLink,
  iconColor = "text-robot-purple",
}) => {
  return (
    <Card className={cn("h-full transition-all hover:-translate-y-1 hover:shadow-lg", className)}>
      <CardHeader>
        <div className={cn("p-2 rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10", iconColor)}>
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {/* Content can be added here */}
      </CardContent>
      {ctaText && ctaLink && (
        <CardFooter>
          <Button variant="ghost" className="p-0 h-auto font-medium text-robot-purple hover:bg-transparent hover:text-robot-blue flex items-center gap-1 group">
            {ctaText}
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default FeatureCard;
