
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SpeakingRobot from "@/components/SpeakingRobot";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-robot-dark -z-10"></div>
      <div className="grid-pattern absolute inset-0 opacity-30 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              AI-Powered <span className="text-gradient">Automation</span> for Enterprise Workflows
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Streamline operations, reduce errors, and save valuable time with our intelligent AI agent platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-robot-purple to-robot-blue text-white px-8 py-6 text-lg">
                Get Started Free
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-12 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex justify-center items-center">
              <SpeakingRobot />
            </div>
            
            <div className="absolute -bottom-6 -right-12 w-24 h-24 bg-gradient-to-br from-robot-purple to-robot-cyan rounded-full filter blur-xl opacity-50 animate-pulse-glow"></div>
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-robot-blue to-robot-purple rounded-full filter blur-xl opacity-40 animate-pulse-glow"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
