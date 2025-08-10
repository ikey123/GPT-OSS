import { Button } from '@/components/ui/button';
import { MessageCircle, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is GPT-OSS and how does it work?',
    answer: 'GPT-OSS is an open source GPT model that provides advanced reasoning capabilities through a mixture of experts architecture. Unlike commercial alternatives, GPT-OSS offers complete transparency, allowing you to run the model locally with full data sovereignty. The gpt-oss-120b and gpt-oss-20b variants use chain of thought reasoning and support tool calling AI for complex applications.'
  },
  {
    question: 'What are the GPT-OSS system requirements?',
    answer: 'System requirements vary by model size. For gpt-oss-20b, you need minimum 16GB RAM and 50GB storage. The gpt-oss-120b model requires 64GB RAM and 200GB storage for optimal performance. Our GPT-OSS installation guide provides detailed hardware recommendations and optimization tips for different configurations.'
  },
  {
    question: 'How does GPT-OSS compare to ChatGPT and other alternatives?',
    answer: 'GPT-OSS delivers comparable performance to ChatGPT while offering significant advantages: complete data privacy, no usage limits, Apache 2.0 licensing, and local deployment. Our benchmarks show GPT-OSS capabilities match or exceed commercial alternatives in reasoning, coding, and creative tasks, making it the best open source LLM for enterprise use.'
  },
  {
    question: 'Can I use GPT-OSS for commercial applications?',
    answer: 'Yes! GPT-OSS uses the Apache 2.0 license, allowing unrestricted commercial use, modification, and distribution. This makes it ideal as an enterprise AI solution for businesses requiring private AI models. You can deploy, customize, and commercialize GPT-OSS without licensing fees or restrictions.'
  },
  {
    question: 'How do I set up GPT-OSS with Ollama or LM Studio?',
    answer: 'Our platform integration guides cover GPT-OSS Ollama setup and LM Studio configuration in detail. The process involves downloading the model, configuring your environment, and following platform-specific setup steps. We provide comprehensive troubleshooting documentation and community support for all integration scenarios.'
  },
  {
    question: 'Is GPT-OSS suitable for medical and biotech applications?',
    answer: 'Absolutely. GPT-OSS is designed for sensitive applications requiring HIPAA compliant AI. The local deployment ensures complete data privacy, making it perfect for medical AI research, biotech AI assistant applications, and healthcare scenarios where data sovereignty is critical. Many research institutions use GPT-OSS for confidential projects.'
  },
  {
    question: 'What support options are available for GPT-OSS?',
    answer: 'We offer multiple support tiers: free community support through GitHub and forums, professional email support, and enterprise-grade assistance with SLA guarantees. Our comprehensive documentation includes installation guides, troubleshooting resources, and optimization tips. Enterprise customers receive dedicated account management and custom integration support.'
  },
  {
    question: 'How do I migrate from ChatGPT to GPT-OSS?',
    answer: 'Migration is straightforward with our step-by-step guides. Start by evaluating your current usage patterns, select the appropriate GPT-OSS model (20b or 120b), follow our installation process, and configure integrations. We provide tools and documentation to help transition workflows from commercial alternatives to on premise AI deployment.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about GPT-OSS, from installation to enterprise deployment. 
            Can't find your answer? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion - Pure CSS with details/summary */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index}
              className="border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              <summary className="cursor-pointer p-6 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="w-5 h-5 text-slate-400 transition-transform duration-200 group-open:rotate-180 flex-shrink-0 mt-1">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </summary>
              <div className="px-6 pb-6 pt-0 border-t border-slate-100">
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Still Have Questions About GPT OSS?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Our team of experts is here to help you get the most out of GPT OSS. 
            Whether you need technical support, GPT OSS troubleshooting, or have questions about enterprise deployment, 
            we're ready to assist with GPT OSS fine tuning and optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Community Resources and Getting Started Guide */}
        <div className="mt-20 p-8 bg-slate-50 rounded-3xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            New to GPT OSS? Here's Your Complete Getting Started Guide
          </h3>
          <div className="text-slate-600 leading-relaxed space-y-4">
            <p>
              If you're new to open source AI and wondering what is GPT OSS, you've come to the right place. GPT OSS explained simply: 
              it's a powerful reasoning model that combines the capabilities of traditional AI with complete transparency and control. 
              Our GPT OSS capabilities span from medical AI applications as a biotech AI assistant to serving as your personal coding AI assistant.
            </p>
            <p>
              Many users ask should I use GPT OSS or question if GPT OSS worth it compared to commercial alternatives. Our GPT OSS performance review 
              and detailed GPT OSS benchmarks show impressive results across various tasks. Before diving in, check our GPT OSS system requirements 
              and use the gpt-oss-120b download link to get started with the full model, or try the lighter gpt-oss-20b version first.
            </p>
            <p>
              Join our thriving community! The GPT OSS Reddit discussions are incredibly helpful, and our GPT OSS GitHub repository 
              is where development happens. For model hosting, Hugging Face GPT OSS makes deployment simple. Popular integrations include 
              GPT OSS Ollama setup for local deployment, LM Studio for desktop use, and VLLM GPT OSS for high-performance serving 
              (though watch out for occasional GPT OSS VLLM Docker issues - our troubleshooting guide helps).
            </p>
            <p>
              Enterprise users often inquire about GPT OSS pricing (it's free!), GPT OSS requirements for production, and specific 
              GPT OSS 20b requirements for smaller deployments. If you're comparing options, our guides covering GPT OSS vs DeepSeek 
              and GPT OSS vs Mistral provide honest assessments. We're transparent about GPT OSS limitations while highlighting its strengths.
            </p>
            <p>
              Popular search terms like "gpt oss", "openai oss", "gpt oss model", and "download gpt oss" bring thousands of 
              new users monthly. Whether you're looking for "openai gpt oss 20b", checking "openai 20b" benchmarks, reviewing 
              "gpt oss 20b benchmarks", or exploring "gpt oss 120" capabilities, our documentation covers everything you need 
              to succeed with open source AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}