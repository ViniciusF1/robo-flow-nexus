
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Shield, Lock, FileText, Users, Eye, Database, Cloud, Server, FileCode, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ChatBot from "@/components/ChatBot";

const Security = () => {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using AES-256 encryption.",
      icon: <Lock className="h-6 w-6" />,
    },
    {
      title: "Role-Based Access Control",
      description: "Granular permissions ensure users only access what they need.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Audit Logging",
      description: "Comprehensive logs of all system activities for compliance and security monitoring.",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: "Data Isolation",
      description: "Multi-tenant architecture with strict data segregation between clients.",
      icon: <Database className="h-6 w-6" />,
    },
    {
      title: "Secure Deployment Options",
      description: "Choose between cloud, on-premise, or hybrid deployment models.",
      icon: <Cloud className="h-6 w-6" />,
    },
    {
      title: "Regular Security Testing",
      description: "Ongoing penetration testing and vulnerability assessments by third parties.",
      icon: <Shield className="h-6 w-6" />,
    },
  ];

  const faqs = [
    {
      question: "How is my data protected?",
      answer: "All data is encrypted both in transit (using TLS 1.3) and at rest (using AES-256 encryption). We implement strict access controls and regular security audits to ensure the highest level of data protection.",
    },
    {
      question: "Where is my data stored?",
      answer: "We offer flexible deployment options. You can choose to have your data stored in our secure cloud environment (with data centers in the US, EU, and Asia), or deploy within your own infrastructure for complete data sovereignty.",
    },
    {
      question: "How does Robot Automation ensure AI ethics?",
      answer: "Our AI development follows strict ethical guidelines including transparency, fairness, and human oversight. All AI agents are designed with built-in guardrails to prevent misuse, and humans remain in the decision loop for critical operations.",
    },
    {
      question: "What compliance standards do you meet?",
      answer: "Robot Automation is compliant with SOC 2 Type II, GDPR, HIPAA, and ISO 27001. We regularly undergo third-party audits to verify our compliance with these and other industry-specific standards.",
    },
    {
      question: "How are access controls managed?",
      answer: "We implement role-based access controls (RBAC) with the principle of least privilege. Administrators can define granular permissions for different user roles, and all access attempts are logged and monitored.",
    },
    {
      question: "What happens if there's a security incident?",
      answer: "We have a comprehensive incident response plan that includes immediate containment, thorough investigation, client notification within 24 hours, and systematic remediation to prevent future occurrences.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block p-2 bg-robot-purple/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-robot-purple" />
              </div>
              <h1 className="text-4xl font-bold mb-6">Enterprise-Grade Security</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                At Robot Automation, security isn't just a feature—it's the foundation of everything we build. Discover how we protect your most valuable assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-robot-purple/10 text-robot-purple">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Tabs defaultValue="data" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-2xl grid-cols-3">
                  <TabsTrigger value="data">Data Security</TabsTrigger>
                  <TabsTrigger value="compliance">Compliance</TabsTrigger>
                  <TabsTrigger value="ethics">AI Ethics</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="data">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Enterprise Data Protection</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      Our comprehensive approach to data security ensures your sensitive information is protected at every step of the automation process.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-purple/10 text-robot-purple">
                          <Lock size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Encryption Everywhere</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            All data is encrypted in transit with TLS 1.3 and at rest using AES-256 encryption, ensuring data remains protected throughout its lifecycle.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-blue/10 text-robot-blue">
                          <Database size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Data Minimization</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            We adhere to the principle of data minimization, collecting and storing only the data necessary for your automation workflows.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-cyan/10 text-robot-cyan">
                          <Server size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Deployment Flexibility</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Choose between cloud, on-premise, or hybrid deployment options to meet your security and compliance requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8">
                    <h3 className="font-bold text-xl mb-6">Data Security Architecture</h3>
                    <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                      <div className="absolute inset-0 bg-gradient-to-r from-robot-purple/10 to-robot-blue/10 flex items-center justify-center">
                        <img
                          src="https://placehold.co/600x400/3454D1/FFFFFF/png?text=Data+Security+Architecture"
                          alt="Data Security Architecture"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-robot-success mt-0.5" />
                        <p className="text-gray-600 dark:text-gray-300">
                          <strong>Zero Trust Architecture</strong>: Every access request is fully authenticated, authorized, and encrypted.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-robot-success mt-0.5" />
                        <p className="text-gray-600 dark:text-gray-300">
                          <strong>Data Loss Prevention</strong>: Automated systems to prevent unauthorized data exfiltration.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-robot-success mt-0.5" />
                        <p className="text-gray-600 dark:text-gray-300">
                          <strong>Secure by Design</strong>: Security is built into our development process, not added as an afterthought.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="compliance">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8">
                    <h3 className="font-bold text-xl mb-6">Compliance Certifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center">
                        <div className="h-16 w-16 bg-robot-purple/10 rounded-full flex items-center justify-center mb-3">
                          <FileText className="h-8 w-8 text-robot-purple" />
                        </div>
                        <h4 className="font-bold">SOC 2 Type II</h4>
                        <p className="text-xs text-center text-gray-600 dark:text-gray-300 mt-2">
                          Certified security, availability, and confidentiality controls
                        </p>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center">
                        <div className="h-16 w-16 bg-robot-blue/10 rounded-full flex items-center justify-center mb-3">
                          <Shield className="h-8 w-8 text-robot-blue" />
                        </div>
                        <h4 className="font-bold">GDPR</h4>
                        <p className="text-xs text-center text-gray-600 dark:text-gray-300 mt-2">
                          Full compliance with European data protection regulations
                        </p>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center">
                        <div className="h-16 w-16 bg-robot-cyan/10 rounded-full flex items-center justify-center mb-3">
                          <FileCode className="h-8 w-8 text-robot-cyan" />
                        </div>
                        <h4 className="font-bold">ISO 27001</h4>
                        <p className="text-xs text-center text-gray-600 dark:text-gray-300 mt-2">
                          International standard for information security management
                        </p>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center">
                        <div className="h-16 w-16 bg-robot-purple/10 rounded-full flex items-center justify-center mb-3">
                          <AlertCircle className="h-8 w-8 text-robot-purple" />
                        </div>
                        <h4 className="font-bold">HIPAA</h4>
                        <p className="text-xs text-center text-gray-600 dark:text-gray-300 mt-2">
                          Compliant with healthcare data privacy regulations
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Regulatory Compliance</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      Robot Automation is designed from the ground up to help enterprises meet their regulatory requirements across industries.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-purple/10 text-robot-purple">
                          <FileText size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Comprehensive Compliance Program</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Our internal compliance program ensures we maintain the highest standards of security and data protection.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-blue/10 text-robot-blue">
                          <Eye size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Audit Trail & Reporting</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Detailed audit logs and compliance reports help you demonstrate regulatory compliance during audits.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-robot-cyan/10 text-robot-cyan">
                          <Users size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Regular Assessments</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            We undergo regular third-party security assessments and penetration testing to validate our security controls.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Button asChild className="mt-8 bg-gradient-to-r from-robot-purple to-robot-blue text-white">
                      <Link to="/contact">
                        Request Compliance Documentation
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ethics">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">AI Ethics & Governance</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
                    Our commitment to ethical AI goes beyond compliance—it's about building technology that respects human values and promotes trust.
                  </p>
                  
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 mb-8">
                    <h3 className="font-bold text-xl mb-6">Our AI Ethics Principles</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-robot-purple/10 flex items-center justify-center">
                          <span className="font-bold text-robot-purple">1</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Transparency</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                            Users always know when they're interacting with an AI and understand how decisions are made.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-robot-blue/10 flex items-center justify-center">
                          <span className="font-bold text-robot-blue">2</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Fairness & Inclusion</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                            Our AI systems are designed and tested to avoid bias and provide equitable outcomes.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-robot-cyan/10 flex items-center justify-center">
                          <span className="font-bold text-robot-cyan">3</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Human Oversight</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                            Humans remain in control of critical decisions and can override AI recommendations.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-robot-purple/10 flex items-center justify-center">
                          <span className="font-bold text-robot-purple">4</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Privacy by Design</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                            Our AI systems collect and use only the data necessary for their intended purpose.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-robot-blue/10 flex items-center justify-center">
                          <span className="font-bold text-robot-blue">5</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Accountability</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                            We take responsibility for how our AI systems operate and their impact on users.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-robot-cyan/10 flex items-center justify-center">
                          <span className="font-bold text-robot-cyan">6</span>
                        </div>
                        <div>
                          <h4 className="font-bold">Continuous Evaluation</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                            We regularly review and improve our AI systems to ensure they align with our ethical principles.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-robot-purple/10 to-robot-blue/10 border border-robot-purple/20 rounded-lg p-8">
                    <h3 className="font-bold text-xl mb-4">AI Ethics Board</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our independent AI Ethics Board includes experts in ethics, law, and technology who provide oversight and guidance on our AI development and deployment.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      The board reviews our products, policies, and practices to ensure they align with our ethical principles and benefit society.
                    </p>
                    <Button asChild className="mt-6 bg-white text-robot-purple hover:bg-gray-100">
                      <a href="#" className="inline-flex items-center">
                        Read our AI Ethics Whitepaper
                        <ArrowRight size={16} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Security FAQs</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Common questions about our security practices and policies.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-10 text-center shadow-lg">
            <div className="inline-block p-3 bg-robot-purple/10 rounded-full mb-4">
              <FileText className="h-8 w-8 text-robot-purple" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Download our comprehensive security whitepaper or schedule a call with our security team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-robot-purple to-robot-blue text-white">
                Download Security Whitepaper
              </Button>
              <Button variant="outline">
                Schedule Security Review
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

export default Security;
