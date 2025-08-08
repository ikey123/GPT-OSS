import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'AI Research Director',
    company: 'TechMed Solutions',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    content: 'GPT-OSS has transformed our medical AI research. The gpt-oss-120b model delivers exceptional reasoning capabilities while maintaining complete data privacy. This is exactly what we needed for our HIPAA compliant AI applications.',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Software Engineer',
    company: 'DevCorp International',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    content: 'The GPT-OSS Ollama setup was incredibly straightforward. Having a truly open source GPT alternative that rivals ChatGPT performance while running locally has been a game-changer for our development workflow.',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'CTO',
    company: 'FinanceAI Corp',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    content: 'After evaluating multiple solutions, GPT-OSS stood out as the best open source LLM for enterprise deployment. The Apache license gives us the freedom we need, and the performance benchmarks exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Dr. James Park',
    role: 'Biotech Research Lead',
    company: 'BioInnovate Labs',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    content: 'GPT-OSS capabilities in biotech AI applications are remarkable. The mixture of experts architecture and chain of thought reasoning make it perfect for complex scientific analysis. Worth every bit of the migration effort.',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    role: 'Data Science Manager',
    company: 'Analytics Pro',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    content: 'The GPT-OSS installation guide made deployment seamless. Having local LLM capabilities with enterprise AI solution features has significantly reduced our operational costs while improving data security.',
    rating: 5
  },
  {
    name: 'Robert Kim',
    role: 'DevOps Engineer',
    company: 'CloudScale Systems',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    content: 'Integrating GPT-OSS with our existing infrastructure was surprisingly smooth. The on premise AI deployment options and comprehensive troubleshooting documentation made the transition from commercial alternatives effortless.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See what developers, researchers, and enterprise teams are saying about GPT-OSS. 
            Join thousands who've made the switch to open source AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <Quote className="w-12 h-12 text-blue-200" />
                </div>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 leading-relaxed mb-8 text-center italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}