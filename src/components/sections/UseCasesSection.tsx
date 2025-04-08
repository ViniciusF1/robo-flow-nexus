
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Braces, Clock, CheckCircle2 } from "lucide-react";

const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      icon: Activity,
      title: "Financial Reporting Automation",
      description: "Reduce month-end close time by 75% with AI-powered financial reporting that eliminates manual data entry and reconciliation.",
      stat: "98% accuracy",
      gradient: "from-robot-blue/80 to-robot-purple/80",
      delay: 0.1
    },
    {
      icon: Braces,
      title: "IT Ticket Resolution",
      description: "AI agents automatically resolve 65% of common IT support tickets, improving response times and freeing up IT staff.",
      stat: "4.8/5 satisfaction",
      gradient: "from-robot-purple/80 to-robot-cyan/80",
      delay: 0.2
    },
    {
      icon: Clock,
      title: "Credit Check Automation",
      description: "Reduce credit assessment time from days to minutes with intelligent document processing and risk analysis.",
      stat: "90% time reduction",
      gradient: "from-robot-blue/80 to-robot-cyan/80",
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Transforming Industries
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            See how enterprises across sectors are leveraging our AI agents to revolutionize their operations.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: useCase.delay }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${useCase.gradient} text-white`}>
                  <useCase.icon size={48} />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {useCase.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <CheckCircle2 size={16} className="text-robot-success mr-2" />
                    <span className="text-sm">{useCase.stat}</span>
                  </div>
                  <Link to="/use-cases" className="text-sm text-robot-purple hover:text-robot-blue flex items-center group">
                    Read case study
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild className="bg-gradient-to-r from-robot-purple to-robot-blue text-white">
            <Link to="/use-cases" className="group">
              Explore All Use Cases
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
