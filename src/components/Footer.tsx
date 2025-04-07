
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative flex items-center justify-center h-8 w-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-robot-purple to-robot-cyan opacity-80 blur-sm"></div>
                <div className="absolute inset-0.5 rounded-full bg-white dark:bg-robot-dark"></div>
                <span className="relative text-xl font-bold text-gradient">R</span>
              </div>
              <span className="font-outfit font-bold text-xl">
                Robot<span className="text-robot-purple">Automation</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Enterprise workflow optimization platform powered by AI agents.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-robot-purple">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-robot-purple">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-robot-purple">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-robot-purple">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/use-cases" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
                  White Papers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
                  AI Ethics
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Robot Automation. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-gray-600 dark:text-gray-400 hover:text-robot-purple dark:hover:text-robot-cyan">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
