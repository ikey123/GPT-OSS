'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Download, Github, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-6">
            {/* Announcement Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-8">
              <Star className="w-4 h-4 mr-2 fill-current" />
              OpenAI OSS Model - Now Available
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              The Future of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Open Source GPT
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              GPT-OSS brings you the power of advanced reasoning models with complete transparency. 
              Run OpenAI open source models locally with our free GPT model, featuring state-of-the-art 
              mixture of experts architecture and chain of thought reasoning capabilities.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-slate-700">100% Open Source</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm font-medium text-slate-700">Local Deployment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-sm font-medium text-slate-700">Enterprise Ready</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8"
              >
                Download GPT-OSS
                <Download className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-semibold border-2 hover:bg-slate-50"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-slate-900">120B</div>
                <div className="text-sm text-slate-600">Parameters</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">50K+</div>
                <div className="text-sm text-slate-600">Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">99.9%</div>
                <div className="text-sm text-slate-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20" />
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="GPT-OSS AI Technology Visualization"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Video Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group bg-white/90 backdrop-blur-sm rounded-full p-6 hover:bg-white transition-all duration-300 hover:scale-110 shadow-xl">
                  <Play className="w-8 h-8 text-blue-600 group-hover:text-blue-700 fill-current ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}