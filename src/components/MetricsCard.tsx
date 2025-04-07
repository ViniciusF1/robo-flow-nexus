
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Clock, Target, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

type MetricType = "processes" | "time" | "accuracy" | "efficiency";

interface MetricsCardProps {
  type: MetricType;
  value: string;
  label: string;
  change?: string;
  isPositive?: boolean;
  className?: string;
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  type,
  value,
  label,
  change,
  isPositive = true,
  className,
}) => {
  const getIcon = () => {
    switch (type) {
      case "processes":
        return <BarChart3 className="h-5 w-5 text-robot-purple" />;
      case "time":
        return <Clock className="h-5 w-5 text-robot-blue" />;
      case "accuracy":
        return <Target className="h-5 w-5 text-robot-cyan" />;
      case "efficiency":
        return <Activity className="h-5 w-5 text-robot-success" />;
      default:
        return <Activity className="h-5 w-5 text-robot-purple" />;
    }
  };

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <h4 className="text-2xl font-bold mt-1">{value}</h4>
            {change && (
              <p className={cn("text-xs mt-1", isPositive ? "text-green-600" : "text-red-500")}>
                {isPositive ? "↑" : "↓"} {change}
              </p>
            )}
          </div>
          <div className="p-2 rounded-full bg-primary/10">{getIcon()}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsCard;
