
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle2, BarChart3, DollarSign, Shield, Clock, Briefcase, Building, HeartPulse, Truck, Users, FileText } from "lucide-react";
import ChatBot from "@/components/ChatBot";

const UseCases = () => {
  const stats = [
    { value: "85%", label: "Average Time Saved" },
    { value: "98%", label: "Accuracy Rate" },
    { value: "65%", label: "Cost Reduction" },
    { value: "3x", label: "Faster Processing" },
  ];

  const benefits = [
    "Eliminate manual data entry and reduce errors",
    "Free up staff for higher-value activities",
    "Scale operations without increasing headcount",
    "Achieve consistent quality and compliance",
    "Accelerate processing times and improve service levels",
    "Gain real-time visibility into operations"
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">Enterprise Use Cases</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover how leading organizations across industries are using Robot Automation to transform their operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                    <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Tabs defaultValue="finance" className="w-full">
              <div className="overflow-x-auto pb-4">
                <TabsList className="inline-flex min-w-max">
                  <TabsTrigger value="finance" className="px-4">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Finance
                  </TabsTrigger>
                  <TabsTrigger value="it" className="px-4">
                    <Shield className="w-4 h-4 mr-2" />
                    IT Support
                  </TabsTrigger>
                  <TabsTrigger value="hr" className="px-4">
                    <Users className="w-4 h-4 mr-2" />
                    HR
                  </TabsTrigger>
                  <TabsTrigger value="healthcare" className="px-4">
                    <HeartPulse className="w-4 h-4 mr-2" />
                    Healthcare
                  </TabsTrigger>
                  <TabsTrigger value="supply" className="px-4">
                    <Truck className="w-4 h-4 mr-2" />
                    Supply Chain
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="finance" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Financial Process Automation</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      Transform financial operations with intelligent automation that reduces manual work, eliminates errors, and provides real-time insights.
                    </p>
                    
                    <div className="space-y-8 mb-8">
                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <BarChart3 className="h-6 w-6 text-robot-purple mr-3" />
                          <h3 className="font-bold text-xl">Financial Reporting</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Automate data collection, validation, and report generation across systems to reduce month-end close times by up to 75%.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Automated reconciliation across multiple systems</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Regulatory compliance validation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Dynamic report generation with AI insights</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <Clock className="h-6 w-6 text-robot-blue mr-3" />
                          <h3 className="font-bold text-xl">Accounts Payable/Receivable</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Streamline invoice processing, payment approvals, and collections with intelligent document processing and workflow automation.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Automated invoice data extraction and validation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>3-way matching with purchase orders and receipts</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Intelligent collections prioritization</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <FileText className="h-6 w-6 text-robot-cyan mr-3" />
                          <h3 className="font-bold text-xl">Audit & Compliance</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Maintain continuous compliance with automated monitoring, documentation, and reporting for regulatory requirements.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Automated evidence collection and documentation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Real-time compliance monitoring</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>AI-powered anomaly detection</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <Button asChild className="bg-gradient-to-r from-robot-purple to-robot-blue text-white">
                      <a href="#finance-case-study">
                        Read Case Study
                        <ArrowRight size={16} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                  
                  <div id="finance-case-study" className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8">
                    <div className="flex items-center mb-6">
                      <div className="h-12 w-12 rounded-full bg-robot-purple/10 flex items-center justify-center mr-4">
                        <Building className="h-6 w-6 text-robot-purple" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">Global Financial Services Firm</h3>
                        <p className="text-gray-600 dark:text-gray-300">Finance Automation Case Study</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Challenge</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          A Fortune 500 financial services company was struggling with manual financial close processes that took 15+ days each month, involved 100+ team members, and had a 12% error rate requiring rework.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Solution</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Implemented Robot Automation's AI agents to:
                        </p>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Automate data aggregation across 14 different systems</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Execute validation rules and reconciliations</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Generate standardized reports and compliance documentation</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-robot-purple">80%</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Reduction in close time</p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-robot-blue">99.2%</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Accuracy rate</p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-robot-cyan">$2.4M</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Annual cost savings</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Quote</h4>
                        <blockquote className="border-l-4 border-robot-purple pl-4 italic">
                          "Robot Automation has transformed our financial close process from a stressful, error-prone marathon into a streamlined, predictable procedure. Our finance team now focuses on analysis instead of data wrangling."
                        </blockquote>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                          — CFO, Global Financial Services Firm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="it" className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">IT Support Automation</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      Revolutionize IT support with AI agents that resolve common issues automatically, freeing up your IT team for strategic projects.
                    </p>
                    
                    {/* IT Support use cases would go here - similar structure to finance */}
                    <div className="space-y-8 mb-8">
                      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <Shield className="h-6 w-6 text-robot-purple mr-3" />
                          <h3 className="font-bold text-xl">Ticket Resolution</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Automate resolution of common IT tickets with AI agents that understand user issues and provide immediate solutions.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Natural language processing for ticket categorization</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Automated password resets and account unlocks</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Software installation and configuration assistance</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <Button asChild className="bg-gradient-to-r from-robot-purple to-robot-blue text-white">
                      <a href="#it-case-study">
                        Read Case Study
                        <ArrowRight size={16} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                  
                  <div id="it-case-study" className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8">
                    <div className="flex items-center mb-6">
                      <div className="h-12 w-12 rounded-full bg-robot-purple/10 flex items-center justify-center mr-4">
                        <Briefcase className="h-6 w-6 text-robot-purple" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">Tech Enterprise</h3>
                        <p className="text-gray-600 dark:text-gray-300">IT Support Case Study</p>
                      </div>
                    </div>
                    
                    {/* IT Support case study content would go here - similar structure to finance */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Challenge</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          A global tech company with 5,000+ employees was struggling with over 200 daily IT support tickets, causing long wait times and frustrated employees.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Solution</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Implemented Robot Automation's IT support agents to:
                        </p>
                        <ul className="space-y-2 mt-3">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Automatically categorize and prioritize incoming tickets</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Resolve common issues without human intervention</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-robot-success mr-2 mt-0.5" />
                            <span>Escalate complex issues to appropriate specialists</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-robot-purple">65%</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Tickets auto-resolved</p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-robot-blue">4.8/5</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">User satisfaction</p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-robot-cyan">85%</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Resolution time reduction</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Additional tab contents for HR, Healthcare, and Supply Chain would follow same pattern */}
              <TabsContent value="hr" className="pt-8">
                <div className="text-center py-20">
                  <h3 className="text-2xl font-bold mb-4">HR Automation Use Cases</h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Coming soon! Our team is preparing detailed HR automation use cases and case studies. Check back soon or contact us for a personalized demo.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="healthcare" className="pt-8">
                <div className="text-center py-20">
                  <h3 className="text-2xl font-bold mb-4">Healthcare Automation Use Cases</h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Coming soon! Our team is preparing detailed healthcare automation use cases and case studies. Check back soon or contact us for a personalized demo.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="supply" className="pt-8">
                <div className="text-center py-20">
                  <h3 className="text-2xl font-bold mb-4">Supply Chain Automation Use Cases</h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Coming soon! Our team is preparing detailed supply chain automation use cases and case studies. Check back soon or contact us for a personalized demo.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Benefits Across Industries</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                No matter your industry, Robot Automation delivers measurable improvements to your operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-robot-purple/10 text-robot-purple">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-robot-purple to-robot-blue rounded-2xl p-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workflows?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join hundreds of organizations that are already experiencing the benefits of Robot Automation.
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

export default UseCases;
