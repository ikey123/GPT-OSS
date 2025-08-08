'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Download } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GO</span>
            </div>
            <span className="font-bold text-xl text-slate-900">GPT-OSS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              FAQ
            </a>
            <a 
              href="https://github.com/openai/gpt-oss" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors flex items-center space-x-1"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="font-medium">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-medium">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl">
            <nav className="flex flex-col space-y-4 p-6">
              <a href="#features" className="text-slate-700 hover:text-blue-600 font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 font-medium">
                How It Works
              </a>
              <a href="#pricing" className="text-slate-700 hover:text-blue-600 font-medium">
                Pricing
              </a>
              <a href="#faq" className="text-slate-700 hover:text-blue-600 font-medium">
                FAQ
              </a>
              <a 
                href="https://github.com/openai/gpt-oss" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 font-medium flex items-center space-x-1"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-slate-200">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download GPT-OSS
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}