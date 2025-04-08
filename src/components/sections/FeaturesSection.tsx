
import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";
import { Bot, Workflow, PenTool, BarChart3, Shield, Cloud } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "AI Agents for Enterprises",
      description: "Intelligent virtual workers that automate complex business processes with human-like decision making.",
      icon: Bot,
      ctaText: "Learn about AI agents",
      ctaLink: "/features",
      iconColor: "text-robot-purple",
      delay: 0.1
    },
    {
      title: "RPA Integration",
      description: "Seamlessly connect with existing RPA tools to enhance and extend your automation capabilities.",
      icon: Workflow,
      ctaText: "Explore integrations",
      ctaLink: "/features",
      iconColor: "text-robot-blue",
      delay: 0.2
    },
    {
      title: "Custom Workflows",
      description: "Build tailored automation sequences that adapt to your unique business requirements.",
      icon: PenTool,
      ctaText: "Design your workflow",
      ctaLink: "/features",
      iconColor: "text-robot-cyan",
      delay: 0.3
    },
    {
      title: "Real-time Analytics",
      description: "Monitor performance metrics and gain actionable insights to continuously improve processes.",
      icon: BarChart3,
      ctaText: "View analytics features",
      ctaLink: "/features",
      iconColor: "text-robot-success",
      delay: 0.4
    },
    {
      title: "Enterprise Security",
      description: "End-to-end encryption and role-based access controls to keep your data safe and compliant.",
      icon: Shield,
      ctaText: "Learn about security",
      ctaLink: "/security",
      iconColor: "text-robot-purple",
      delay: 0.5
    },
    {
      title: "Cloud Deployment",
      description: "Deploy in your cloud environment of choice for maximum flexibility and scalability.",
      icon: Cloud,
      ctaText: "See deployment options",
      ctaLink: "/features",
      iconColor: "text-robot-blue",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50 dark:from-robot-dark dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our platform combines advanced AI with robust automation tools to transform your business operations.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ y: -5 }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                ctaText={feature.ctaText}
                ctaLink={feature.ctaLink}
                iconColor={feature.iconColor}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
