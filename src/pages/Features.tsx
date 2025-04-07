
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Workflow, PenTool, GitCompare, Boxes, Code, Cloud, Database, Filter, Users, BarChart3, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import ChatBot from "@/components/ChatBot";

const Features = () => {
  const featureAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">Platform Features</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover the powerful capabilities that make Robot Automation the leading choice for enterprise workflow optimization.
              </p>
            </div>

            <Tabs defaultValue="ai-agents" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-2xl grid-cols-3">
                  <TabsTrigger value="ai-agents">AI Agents</TabsTrigger>
                  <TabsTrigger value="rpa">RPA Integration</TabsTrigger>
                  <TabsTrigger value="workflows">Custom Workflows</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="ai-agents">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-bold mb-6">AI Agents for Enterprises</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      Our intelligent AI agents serve as virtual workers, automating complex business processes with human-like decision making capabilities.
                    </p>
                    
                    <motion.div
                      variants={featureAnimation}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="space-y-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-purple/10 text-robot-purple">
                          <Bot size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Natural Language Processing</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Agents understand and generate human language, enabling seamless communication with employees and systems.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-blue/10 text-robot-blue">
                          <GitCompare size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Adaptive Decision Making</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Agents learn from historical data and improve over time, making increasingly accurate decisions.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-cyan/10 text-robot-cyan">
                          <Boxes size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Multi-system Orchestration</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Agents work across multiple applications and databases to complete complex cross-functional tasks.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-purple/10 text-robot-purple">
                          <Code size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">No-code Configuration</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Easily train and deploy agents without coding, using our intuitive visual interface.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <Button asChild className="mt-8 bg-gradient-to-r from-robot-purple to-robot-blue text-white">
                      <Link to="/contact">
                        Schedule Agent Demo
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="order-1 lg:order-2 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -z-10 inset-0 bg-gradient-to-r from-robot-purple/30 to-robot-blue/30 rounded-xl blur-xl transform -rotate-6"></div>
                      <img
                        src="https://placehold.co/600x400/3454D1/FFFFFF/png?text=AI+Agent+Interface"
                        alt="AI Agent Interface"
                        className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="rpa">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -z-10 inset-0 bg-gradient-to-r from-robot-blue/30 to-robot-cyan/30 rounded-xl blur-xl transform rotate-6"></div>
                      <img
                        src="https://placehold.co/600x400/00D4FF/FFFFFF/png?text=RPA+Integration"
                        alt="RPA Integration"
                        className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bold mb-6">RPA Integration</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      Seamlessly connect with your existing RPA tools to enhance and extend your automation capabilities with AI intelligence.
                    </p>
                    
                    <motion.div
                      variants={featureAnimation}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="space-y-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-blue/10 text-robot-blue">
                          <Workflow size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Seamless Integration</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Connect with all major RPA platforms like UiPath, Automation Anywhere, and Blue Prism without disruption.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-purple/10 text-robot-purple">
                          <Cloud size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">API Ecosystem</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Extensive API library enables connections with hundreds of business applications and services.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-cyan/10 text-robot-cyan">
                          <Database size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Unified Data Management</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Centralized data repository ensures consistent information across all automation processes.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-blue/10 text-robot-blue">
                          <Filter size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Exception Handling</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            AI-powered exception management that resolves common issues without human intervention.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <Button asChild className="mt-8 bg-gradient-to-r from-robot-blue to-robot-cyan text-white">
                      <Link to="/contact">
                        Explore Integrations
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="workflows">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="order-2 lg:order-1">
                    <h2 className="text-3xl font-bold mb-6">Custom Workflows</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      Build tailored automation sequences that adapt to your unique business requirements and evolve with your organization.
                    </p>
                    
                    <motion.div
                      variants={featureAnimation}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="space-y-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-cyan/10 text-robot-cyan">
                          <PenTool size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Visual Workflow Builder</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Intuitive drag-and-drop interface for creating complex automation sequences without coding.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-purple/10 text-robot-purple">
                          <Users size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Human-in-the-Loop</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Seamlessly incorporate human review and approval steps into automated processes when needed.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-blue/10 text-robot-blue">
                          <BarChart3 size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Process Mining</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Automatically discover and analyze business processes to identify automation opportunities.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-cyan/10 text-robot-cyan">
                          <Zap size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Trigger Events</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Set up event-based triggers to initiate workflows automatically when specific conditions are met.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <Button asChild className="mt-8 bg-gradient-to-r from-robot-cyan to-robot-purple text-white">
                      <Link to="/contact">
                        Design Your Workflow
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="order-1 lg:order-2 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -z-10 inset-0 bg-gradient-to-r from-robot-cyan/30 to-robot-purple/30 rounded-xl blur-xl transform -rotate-6"></div>
                      <img
                        src="https://placehold.co/600x400/7A28CB/FFFFFF/png?text=Workflow+Builder"
                        alt="Custom Workflow Builder"
                        className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">More Powerful Features</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore the complete suite of tools that make Robot Automation the most comprehensive enterprise workflow platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-robot-purple/10 text-robot-purple">
                      <BarChart3 size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Advanced Analytics</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Comprehensive dashboards and reports that provide deep insights into process performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-robot-blue/10 text-robot-blue">
                      <Database size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Data Processing</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Intelligent document processing that extracts, validates, and categorizes information from any format.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-robot-cyan/10 text-robot-cyan">
                      <Code size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Developer Tools</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Extensive APIs and SDKs for custom development and deep integration with existing systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-robot-purple/10 text-robot-purple">
                      <Cloud size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Hybrid Deployment</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Deploy on-premise, in the cloud, or in a hybrid model to meet your security and compliance needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-robot-blue/10 text-robot-blue">
                      <Users size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Collaboration Tools</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Built-in communication features that enable seamless teamwork between humans and AI agents.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 dark:border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-robot-cyan/10 text-robot-cyan">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Automation Templates</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Library of pre-built templates for common business processes to accelerate implementation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-robot-purple to-robot-blue text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Power of Robot Automation?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Our team of experts is ready to show you how our platform can transform your business operations.
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

export default Features;
