import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Download, 
  Settings, 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Terminal,
  Monitor
} from 'lucide-react';

const steps = [
  {
    icon: Download,
    step: '01',
    title: 'Download & Install',
    description: 'Get started with our GPT-OSS installation guide. Download the gpt-oss-120b or gpt-oss-20b model based on your system requirements.',
    details: 'Supports Windows, macOS, and Linux with comprehensive troubleshooting documentation.',
    color: 'blue'
  },
  {
    icon: Settings,
    step: '02', 
    title: 'Configure Your Setup',
    description: 'Follow our step-by-step configuration process to optimize GPT-OSS for your specific hardware and use case.',
    details: 'Automatic detection of system capabilities with GPT-OSS optimization tips included.',
    color: 'purple'
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Deploy & Scale',
    description: 'Launch your local LLM instance and integrate with your existing workflow. Scale from development to production seamlessly.',
    details: 'Enterprise-grade deployment options with monitoring and analytics built-in.',
    color: 'green'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How to Run GPT-OSS
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get up and running with GPT-OSS in minutes. Our comprehensive installation guide 
            covers everything from system requirements to advanced optimization techniques.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-slate-300 to-transparent" />
              )}
              
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-slate-100 mb-4">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${
                    step.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                    step.color === 'purple' ? 'from-purple-500 to-pink-500' :
                    'from-green-500 to-emerald-500'
                  } shadow-lg mb-6 -mt-12 relative z-10`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {step.description}
                  </p>
                  <p className="text-sm text-slate-500">
                    {step.details}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Platform Integration */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Platform Integration Made Easy
              </h3>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Seamlessly integrate GPT-OSS with your favorite platforms. Whether you're using 
                GPT-OSS Ollama setup, LM Studio, Hugging Face, or VLLM, our comprehensive guides 
                have you covered with troubleshooting support.
              </p>
              
              {/* Platform List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Ollama', 'LM Studio', 'Hugging Face', 'VLLM'].map((platform, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">{platform}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                View Integration Guides
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Visual */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="GPT-OSS Platform Integration Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}