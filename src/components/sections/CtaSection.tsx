
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-robot-purple to-robot-blue text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Ready to Transform Your Enterprise?
        </motion.h2>
        <motion.p 
          className="text-xl max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join hundreds of forward-thinking companies that are already saving time, reducing errors, and improving operations with Robot Automation.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button size="lg" className="bg-white text-robot-purple hover:bg-gray-100 transition-colors duration-300">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-colors duration-300">
            Schedule Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
