
import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
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
  ];

  return (
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
          {testimonials.map((testimonial, index) => (
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
  );
};

export default TestimonialsSection;
