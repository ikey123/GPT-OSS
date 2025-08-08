import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Shield, 
  Zap, 
  Code, 
  Globe, 
  Lock,
  Cpu,
  Database,
  GitBranch
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced Reasoning Model',
    description: 'GPT-OSS features cutting-edge reasoning capabilities with mixture of experts architecture, delivering superior performance for complex problem-solving and agentic AI applications.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Enterprise AI Solution',
    description: 'Deploy private AI models with complete data sovereignty. Our enterprise solution ensures HIPAA compliance and meets the highest security standards for business applications.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Optimized Performance',
    description: 'Experience lightning-fast inference with MXFP4 quantization and harmony response format. Our GPT-OSS optimization tips ensure maximum efficiency on your hardware.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code,
    title: 'Developer-Friendly',
    description: 'Built for developers with comprehensive APIs, tool calling capabilities, and seamless integration with popular platforms like Ollama, LM Studio, and Hugging Face.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Globe,
    title: 'Open Source Freedom',
    description: 'Licensed under Apache 2.0, GPT-OSS provides complete transparency and freedom to modify, distribute, and commercialize. No vendor lock-in, no hidden restrictions.',
    gradient: 'from-teal-500 to-green-500'
  },
  {
    icon: Lock,
    title: 'On-Premise Deployment',
    description: 'Run local LLM instances entirely within your infrastructure. Perfect for organizations requiring complete data privacy and regulatory compliance.',
    gradient: 'from-indigo-500 to-blue-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Choose GPT-OSS?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience the perfect balance of power, privacy, and performance with our 
            open source GPT alternative. Built for enterprises, loved by developers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium">
            <Cpu className="w-5 h-5 mr-2" />
            Ready to experience GPT-OSS capabilities?
          </div>
        </div>
      </div>
    </section>
  );
}