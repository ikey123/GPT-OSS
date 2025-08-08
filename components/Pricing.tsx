import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Building, 
  Rocket, 
  CheckCircle, 
  Star,
  Shield,
  Headphones
} from 'lucide-react';

const plans = [
  {
    name: 'Community',
    icon: Download,
    price: 'Free',
    subtitle: 'Perfect for developers and researchers',
    features: [
      'gpt-oss-120b model access',
      'Apache 2.0 license',
      'Community support',
      'Basic documentation',
      'GitHub repository access',
      'Standard performance'
    ],
    cta: 'Download Free',
    popular: false,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Enterprise',
    icon: Building,
    price: 'Custom',
    subtitle: 'For organizations requiring support',
    features: [
      'All Community features',
      'Priority support',
      'Custom integrations',
      'SLA guarantees',
      'Training workshops', 
      'Dedicated account manager',
      'On-premise deployment assistance',
      'HIPAA compliance documentation'
    ],
    cta: 'Contact Sales',
    popular: true,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Professional',
    icon: Rocket,
    price: '$499/mo',
    subtitle: 'Enhanced support and features',
    features: [
      'All Community features',
      'Email support',
      'Advanced documentation',
      'Performance optimizations',
      'Integration templates',
      'Monthly office hours'
    ],
    cta: 'Start Trial',
    popular: false,
    gradient: 'from-green-500 to-emerald-500'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            GPT-OSS Pricing That Makes Sense
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Start free with our open source GPT model, then scale with enterprise features 
            as your needs grow. No hidden fees, no usage limits, complete transparency.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                plan.popular 
                  ? 'scale-105 bg-gradient-to-b from-white to-purple-50 ring-2 ring-purple-200' 
                  : 'bg-white hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} shadow-lg mb-6`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </CardTitle>
                <p className="text-slate-600 mb-6">{plan.subtitle}</p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  {plan.price !== 'Free' && plan.price !== 'Custom' && (
                    <span className="text-slate-600 ml-2">per month</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full font-semibold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                      : plan.name === 'Community'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Features Showcase */}
        <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Enterprise AI Solution Built for Scale
            </h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Deploy private AI models with complete control. Our enterprise solution provides 
              dedicated support, custom integrations, and guarantees for mission-critical applications 
              requiring local LLM deployment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Security First</h4>
                <p className="text-slate-400 text-center">HIPAA compliant AI with complete data sovereignty</p>
              </div>
              <div className="flex flex-col items-center">
                <Building className="w-12 h-12 text-green-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Enterprise Ready</h4>
                <p className="text-slate-400 text-center">Scalable deployment with SLA guarantees</p>
              </div>
              <div className="flex flex-col items-center">
                <Headphones className="w-12 h-12 text-purple-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Premium Support</h4>
                <p className="text-slate-400 text-center">Dedicated team and priority assistance</p>
              </div>
            </div>

            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
              Schedule Enterprise Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}