import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GPT-OSS - Open Source GPT Alternative | Free AI Model with Enterprise Features',
  description: 'GPT-OSS delivers advanced open source GPT capabilities with complete privacy. Download our free AI model featuring 120B parameters, mixture of experts, and enterprise-ready deployment options.',
  keywords: 'GPT-OSS, open source GPT, OpenAI open source, free GPT model, reasoning model, ChatGPT alternative, local LLM, enterprise AI solution, private AI model, HIPAA compliant AI',
  openGraph: {
    title: 'GPT-OSS - The Future of Open Source AI',
    description: 'Advanced open source GPT model with enterprise features, complete data sovereignty, and local deployment capabilities.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}