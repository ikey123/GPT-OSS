import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Download, Github, Star, ExternalLink } from 'lucide-react';

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
            <div className="inline-flex items-center px-3 py-2 bg-blue-50 border border-blue-200 rounded-full text-xs sm:text-sm font-medium text-blue-700 mb-6 sm:mb-8 max-w-full">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0 fill-current" />
              <span className="text-center">GPT OSS by OpenAI Open Source - Now Available</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
              GPT OSS:
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                The Open Source ChatGPT Alternative
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              GPT OSS delivers the most advanced reasoning model with complete transparency. 
              This free GPT model from OpenAI open source features gpt-oss-120b and gpt-oss-20b variants, 
              powered by mixture of experts architecture and chain of thought reasoning. Perfect for enterprises 
              seeking a local LLM solution with HIPAA compliant AI capabilities.
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
            <div className="space-y-4 mb-12">
              {/* Primary CTA */}
              <a 
                href="https://gpt-oss.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 w-full"
                >
                  Try Playground
                  <Play className="w-5 h-5 ml-2" />
                </Button>
              </a>
              
              {/* Download Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href="https://huggingface.co/openai/gpt-oss-120b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="font-semibold border-2 hover:bg-slate-50 w-full h-full"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <div className="flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>GPT-OSS-120B</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-slate-500">117B params • Production</span>
                    </div>
                  </Button>
                </a>
                
                <a 
                  href="https://huggingface.co/openai/gpt-oss-20b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="font-semibold border-2 hover:bg-slate-50 w-full h-full"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <div className="flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>GPT-OSS-20B</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-slate-500">21B params • Local</span>
                    </div>
                  </Button>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-slate-900">120B</div>
                <div className="text-xs sm:text-sm text-slate-600">Parameters</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-slate-900">50K+</div>
                <div className="text-xs sm:text-sm text-slate-600">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-slate-900">99.9%</div>
                <div className="text-xs sm:text-sm text-slate-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20" />
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="GPT OSS Open Source AI Model Technology - Best ChatGPT Alternative"
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