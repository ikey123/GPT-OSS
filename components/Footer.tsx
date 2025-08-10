import { Button } from '@/components/ui/button';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  Download,
  BookOpen,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

interface NavLink { name: string; href: string; external: boolean; icon?: React.ComponentType<any>; }

type FooterLinkSections = {
  product: NavLink[];
  resources: NavLink[];
  community: NavLink[];
  integrations: NavLink[];
};

const footerLinks: FooterLinkSections = {
  product: [
    { name: 'Download GPT-OSS', href: '#download', icon: Download, external: false },
{ name: 'Features', href: '#features', external: false, icon: undefined },
{ name: 'Pricing', href: '#pricing', external: false, icon: undefined },
{ name: 'Benchmarks', href: '#benchmarks', external: false, icon: undefined },
{ name: 'System Requirements', href: '#requirements', external: false, icon: undefined }
  ],
  resources: [
{ name: 'Installation Guide', href: '#installation', external: false, icon: undefined },
{ name: 'API Reference', href: '#api', external: false, icon: undefined },
{ name: 'Troubleshooting', href: '#troubleshooting', external: false, icon: undefined },
{ name: 'Best Practices', href: '#best-practices', external: false, icon: undefined }
  ],
  community: [
    { name: 'GitHub Repository', href: 'https://github.com/openai/gpt-oss', icon: Github, external: true },
{ name: 'Discord Community', href: '#discord', icon: MessageCircle, external: false },
    { name: 'Reddit Discussion', href: 'https://reddit.com/r/gptoss', icon: ExternalLink, external: true },
{ name: 'Stack Overflow', href: '#stackoverflow', external: true, icon: undefined },
{ name: 'Contributor Guide', href: '#contributing', icon: undefined, external: false }
  ],
  integrations: [
    { name: 'Try Playground', href: 'https://gpt-oss.com/', external: true },
    { name: 'GPT-OSS-120B Model', href: 'https://huggingface.co/openai/gpt-oss-120b', external: true },
    { name: 'GPT-OSS-20B Model', href: 'https://huggingface.co/openai/gpt-oss-20b', external: true },
    { name: 'Ollama Setup', href: '#ollama', external: false, icon: undefined },
    { name: 'LM Studio', href: '#lmstudio', external: false, icon: undefined }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">GO</span>
              </div>
              <span className="font-bold text-2xl">GPT-OSS</span>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              GPT OSS: The premier open source GPT alternative, delivering enterprise-grade AI capabilities 
              with complete transparency and data sovereignty. Our free GPT model supports gpt-oss-120b and gpt-oss-20b 
              variants, making it the best ChatGPT alternative for businesses requiring HIPAA compliant AI solutions.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/openai/gpt-oss" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#twitter" 
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#linkedin" 
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : ''}
                    className="text-slate-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : ''}
                    className="text-slate-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Integrations</h4>
            <ul className="space-y-3">
              {footerLinks.integrations.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : ''}
                    className="text-slate-300 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <span>{link.name}</span>
                    {link.external && <ExternalLink className="w-3 h-3 ml-1" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-slate-400">
              © 2024 GPT-OSS. All rights reserved. Licensed under Apache 2.0.
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2 text-sm text-slate-400">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#security" className="hover:text-white transition-colors">Security</a>
              <a href="#status" className="hover:text-white transition-colors">Status</a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <p className="text-center text-sm text-slate-500 italic">
              Disclaimer: This website is not affiliated with OpenAI. This is an independent community project created for educational and informational purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}