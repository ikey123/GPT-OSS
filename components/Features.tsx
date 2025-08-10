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
    title: 'GPT OSS Advanced Reasoning Model',
    description: 'GPT OSS features cutting-edge chain of thought reasoning with mixture of experts architecture. Perfect for agentic AI applications, this reasoning model delivers superior performance for complex problem-solving tasks.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Enterprise AI Solution',
    description: 'Deploy GPT OSS for business with complete data sovereignty. Our enterprise AI solution ensures HIPAA compliant AI deployment and meets the highest security standards for private AI model implementations.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Optimized Performance',
    description: 'Experience lightning-fast inference with MXFP4 quantization and harmony response format. Our GPT OSS optimization tips and system requirements guide ensure maximum efficiency on your hardware.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code,
    title: 'Developer-Friendly Integration',
    description: 'Built for developers with tool calling AI capabilities and comprehensive APIs. Seamless GPT OSS Ollama setup, GPT OSS LM Studio integration, and GPT OSS HuggingFace compatibility included.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Globe,
    title: 'Open Source GPT Freedom',
    description: 'Licensed under GPT OSS Apache license, providing complete transparency and freedom to modify, distribute, and commercialize. No vendor lock-in, no hidden restrictions for this open source GPT.',
    gradient: 'from-teal-500 to-green-500'
  },
  {
    icon: Lock,
    title: 'On Premise AI Deployment',
    description: 'Run local LLM instances entirely within your infrastructure. Perfect for organizations requiring complete data privacy and regulatory compliance with on premise AI deployment capabilities.',
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
            Why GPT OSS is the Best Open Source LLM?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover what makes GPT OSS the perfect ChatGPT alternative. Our enterprise AI solution 
            combines advanced reasoning capabilities with complete transparency, making it ideal for 
            businesses seeking a private AI model with HIPAA compliant AI features.
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
            Ready to experience GPT OSS capabilities and performance?
          </div>
        </div>
      </div>
    </section>
  );
}