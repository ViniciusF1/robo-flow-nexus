
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetricsCard from "@/components/MetricsCard";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedNumber from "@/components/AnimatedNumber";
import ChatBot from "@/components/ChatBot";
import SpeakingRobot from "@/components/SpeakingRobot";
import { ArrowRight, Activity, Braces, Workflow, Shield, BarChart3, Cloud, CheckCircle2, PenTool, Bot, Clock } from "lucide-react";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
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
        
        {/* Metrics Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                Real-Time Automation Metrics
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                See the impact of AI-powered automation on your enterprise workflows with our real-time dashboard.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <MetricsCard
                  type="processes"
                  value={1458}
                  label="Processes Automated"
                  change="12% this month"
                  isPositive
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <MetricsCard
                  type="time"
                  value={4823}
                  label="Time Saved"
                  change="8% this month"
                  isPositive
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <MetricsCard
                  type="accuracy"
                  value={98}
                  label="Task Accuracy"
                  change="2% this month"
                  isPositive
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <MetricsCard
                  type="efficiency"
                  value={35}
                  label="Productivity Increase"
                  change="5% this month"
                  isPositive
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
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
              {/* Feature cards with staggered animations */}
              {[
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
              ].map((feature, index) => (
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
        
        {/* Use Cases Section */}
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
              {/* Use case cards with animations */}
              {[
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
              ].map((useCase, index) => (
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
        
        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                Trusted by Enterprises
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                See what our clients have to say about their experience with Robot Automation.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Robot Automation has transformed our financial operations. We've reduced processing times by 80% and virtually eliminated manual errors.",
                  author: "Sarah Johnson",
                  role: "CFO",
                  company: "Global Finance Corp",
                  delay: 0.1
                },
                {
                  quote: "The AI agents have become an essential part of our IT department, resolving common issues before they escalate and allowing our team to focus on strategic initiatives.",
                  author: "Michael Chen",
                  role: "CTO",
                  company: "TechNova Solutions",
                  delay: 0.2
                },
                {
                  quote: "Implementation was seamless, and the ROI was evident within the first quarter. Our customer satisfaction scores have improved by 35% since deployment.",
                  author: "Jessica Rodriguez",
                  role: "COO",
                  company: "Service Excellence Inc.",
                  delay: 0.3
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: testimonial.delay }}
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
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
      </div>
      
      <Footer />
      <ChatBot />
    </>
  );
};

export default Index;
