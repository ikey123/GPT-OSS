import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Crown, 
  Zap, 
  Shield, 
  DollarSign, 
  TrendingUp,
  Star,
  CheckCircle,
  X
} from 'lucide-react';

const models = [
  {
    name: 'GPT-OSS',
    subtitle: 'Open Source Champion',
    icon: Crown,
    gradient: 'from-blue-600 to-purple-600',
    price: 'Free',
    popular: true,
    features: [
      'gpt-oss-120b parameters',
      'Mixture of experts',
      'Chain of thought reasoning',
      'Tool calling AI',
      'Apache 2.0 license',
      'On-premise deployment',
      'HIPAA compliant AI'
    ],
    benchmarks: {
      reasoning: 95,
      coding: 92,
      creative: 89
    }
  },
  {
    name: 'ChatGPT',
    subtitle: 'Commercial Leader',
    icon: Star,
    gradient: 'from-green-500 to-teal-500',
    price: '$20/month',
    popular: false,
    features: [
      'GPT-4 technology',
      'Web browsing',
      'Plugin ecosystem',
      'Mobile apps',
      'Cloud only',
      'Data sharing concerns',
      'Usage limitations'
    ],
    benchmarks: {
      reasoning: 93,
      coding: 90,
      creative: 94
    }
  },
  {
    name: 'LLaMA',
    subtitle: 'Research Focus',
    icon: Zap,
    gradient: 'from-orange-500 to-red-500',
    price: 'Free',
    popular: false,
    features: [
      'Meta developed',
      'Research license',
      'Limited commercial use',
      'Manual setup required',
      'Community support',
      'Variable performance',
      'Frequent updates'
    ],
    benchmarks: {
      reasoning: 87,
      coding: 85,
      creative: 88
    }
  }
];

export default function ModelComparison() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            ChatGPT Alternative That Actually Delivers
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Compare GPT-OSS capabilities against leading alternatives. See why enterprises 
            choose our open source LLM for privacy, performance, and total cost of ownership.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {models.map((model, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                model.popular 
                  ? 'scale-105 bg-gradient-to-b from-white to-blue-50 ring-2 ring-blue-200' 
                  : 'bg-white hover:-translate-y-2'
              }`}
            >
              {model.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                    Recommended
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${model.gradient} shadow-lg mb-4`}>
                  <model.icon className="w-8 h-8 text-white" />
                </div>

                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  {model.name}
                </CardTitle>
                <p className="text-slate-600 mb-4">{model.subtitle}</p>
                
                {/* Price */}
                <div className="text-3xl font-bold text-slate-900 mb-6">
                  {model.price}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Benchmarks */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-4">GPT-OSS Benchmarks</h4>
                  <div className="space-y-3">
                    {Object.entries(model.benchmarks).map(([category, score]) => (
                      <div key={category}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="capitalize text-slate-600">{category}</span>
                          <span className="font-medium text-slate-900">{score}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${model.gradient}`}
                            style={{ width: `${score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    model.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-slate-900 hover:bg-slate-800'
                  }`}
                >
                  {model.price === 'Free' ? 'Get Started Free' : 'Learn More'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Comparison */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                GPT-OSS vs ChatGPT Performance
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Independent benchmarks show GPT-OSS delivers comparable performance to commercial 
                alternatives while providing complete data sovereignty and unlimited usage. 
                Should I use GPT-OSS? The answer is clear for privacy-conscious organizations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="font-medium text-green-800">Total Cost Savings</span>
                  <span className="text-2xl font-bold text-green-600">90%+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium text-blue-800">Data Privacy</span>
                  <span className="text-lg font-bold text-blue-600">100% Local</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="GPT-OSS Performance Analytics Dashboard"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}