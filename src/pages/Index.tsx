
import React, { useState } from "react";
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
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                  <div className="bg-white dark:bg-gray-900 p-2">
                    <div className="flex space-x-2 absolute top-4 left-4 z-10">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <img 
                      src="https://placehold.co/1200x800/3454D1/FFFFFF/png?text=Robot+Automation+Dashboard" 
                      alt="Robot Automation Dashboard" 
                      className="rounded-lg shadow-sm w-full"
                    />
                  </div>
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
              <h2 className="text-3xl font-bold mb-4">Real-Time Automation Metrics</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See the impact of AI-powered automation on your enterprise workflows with our real-time dashboard.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative">
                <MetricsCard
                  type="processes"
                  value={<AnimatedNumber end={1458} className="text-2xl font-bold" />}
                  label="Processes Automated"
                  change="12% this month"
                  isPositive
                />
              </div>
              
              <div className="relative">
                <MetricsCard
                  type="time"
                  value={<AnimatedNumber 
                    end={4823} 
                    formatter={(val) => `${val.toLocaleString()} hrs`} 
                    className="text-2xl font-bold" 
                  />}
                  label="Time Saved"
                  change="8% this month"
                  isPositive
                />
              </div>
              
              <div className="relative">
                <MetricsCard
                  type="accuracy"
                  value={<AnimatedNumber 
                    end={98} 
                    formatter={(val) => `${val}%`} 
                    className="text-2xl font-bold" 
                  />}
                  label="Task Accuracy"
                  change="2% this month"
                  isPositive
                />
              </div>
              
              <div className="relative">
                <MetricsCard
                  type="efficiency"
                  value={<AnimatedNumber 
                    end={35} 
                    formatter={(val) => `${val}%`} 
                    className="text-2xl font-bold" 
                  />}
                  label="Productivity Increase"
                  change="5% this month"
                  isPositive
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50 dark:from-robot-dark dark:to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our platform combines advanced AI with robust automation tools to transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="AI Agents for Enterprises"
                description="Intelligent virtual workers that automate complex business processes with human-like decision making."
                icon={Bot}
                ctaText="Learn about AI agents"
                ctaLink="/features"
                iconColor="text-robot-purple"
              />
              
              <FeatureCard
                title="RPA Integration"
                description="Seamlessly connect with existing RPA tools to enhance and extend your automation capabilities."
                icon={Workflow}
                ctaText="Explore integrations"
                ctaLink="/features"
                iconColor="text-robot-blue"
              />
              
              <FeatureCard
                title="Custom Workflows"
                description="Build tailored automation sequences that adapt to your unique business requirements."
                icon={PenTool}
                ctaText="Design your workflow"
                ctaLink="/features"
                iconColor="text-robot-cyan"
              />
              
              <FeatureCard
                title="Real-time Analytics"
                description="Monitor performance metrics and gain actionable insights to continuously improve processes."
                icon={BarChart3}
                ctaText="View analytics features"
                ctaLink="/features"
                iconColor="text-robot-success"
              />
              
              <FeatureCard
                title="Enterprise Security"
                description="End-to-end encryption and role-based access controls to keep your data safe and compliant."
                icon={Shield}
                ctaText="Learn about security"
                ctaLink="/security"
                iconColor="text-robot-purple"
              />
              
              <FeatureCard
                title="Cloud Deployment"
                description="Deploy in your cloud environment of choice for maximum flexibility and scalability."
                icon={Cloud}
                ctaText="See deployment options"
                ctaLink="/features"
                iconColor="text-robot-blue"
              />
            </div>
          </div>
        </section>
        
        {/* Use Cases Preview Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Transforming Industries</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how enterprises across sectors are leveraging our AI agents to revolutionize their operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
                <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-robot-blue/80 to-robot-purple/80 text-white">
                    <Activity size={48} />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">Financial Reporting Automation</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    Reduce month-end close time by 75% with AI-powered financial reporting that eliminates manual data entry and reconciliation.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <CheckCircle2 size={16} className="text-robot-success mr-2" />
                      <span className="text-sm">98% accuracy</span>
                    </div>
                    <Link to="/use-cases" className="text-sm text-robot-purple hover:text-robot-blue flex items-center">
                      Read case study
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
                <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-robot-purple/80 to-robot-cyan/80 text-white">
                    <Braces size={48} />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">IT Ticket Resolution</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    AI agents automatically resolve 65% of common IT support tickets, improving response times and freeing up IT staff.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <CheckCircle2 size={16} className="text-robot-success mr-2" />
                      <span className="text-sm">4.8/5 satisfaction</span>
                    </div>
                    <Link to="/use-cases" className="text-sm text-robot-purple hover:text-robot-blue flex items-center">
                      Read case study
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col">
                <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-robot-blue/80 to-robot-cyan/80 text-white">
                    <Clock size={48} />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">Credit Check Automation</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    Reduce credit assessment time from days to minutes with intelligent document processing and risk analysis.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <CheckCircle2 size={16} className="text-robot-success mr-2" />
                      <span className="text-sm">90% time reduction</span>
                    </div>
                    <Link to="/use-cases" className="text-sm text-robot-purple hover:text-robot-blue flex items-center">
                      Read case study
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-gradient-to-r from-robot-purple to-robot-blue text-white">
                <Link to="/use-cases">
                  Explore All Use Cases
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Trusted by Enterprises</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See what our clients have to say about their experience with Robot Automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Robot Automation has transformed our financial operations. We've reduced processing times by 80% and virtually eliminated manual errors."
                author="Sarah Johnson"
                role="CFO"
                company="Global Finance Corp"
              />
              
              <TestimonialCard
                quote="The AI agents have become an essential part of our IT department, resolving common issues before they escalate and allowing our team to focus on strategic initiatives."
                author="Michael Chen"
                role="CTO"
                company="TechNova Solutions"
              />
              
              <TestimonialCard
                quote="Implementation was seamless, and the ROI was evident within the first quarter. Our customer satisfaction scores have improved by 35% since deployment."
                author="Jessica Rodriguez"
                role="COO"
                company="Service Excellence Inc."
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-robot-purple to-robot-blue text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Join hundreds of forward-thinking companies that are already saving time, reducing errors, and improving operations with Robot Automation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-robot-purple hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      <ChatBot />
    </>
  );
};

export default Index;
