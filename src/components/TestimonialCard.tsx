
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  image,
  className,
}) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="pt-6 px-6">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <svg
              className="h-8 w-8 text-robot-purple opacity-60"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>
          <p className="text-lg leading-relaxed flex-grow">{quote}</p>
          <div className="flex items-center mt-6">
            {image && (
              <img
                className="h-10 w-10 rounded-full mr-3 object-cover"
                src={image}
                alt={author}
              />
            )}
            <div>
              <p className="font-medium">{author}</p>
              <p className="text-sm text-muted-foreground">
                {role}, {company}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
