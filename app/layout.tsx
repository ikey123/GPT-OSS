import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Download GPT OSS: Free Open Source ChatGPT Alternative',
  description: 'Download GPT OSS, the free open-source alternative to ChatGPT. Get the powerful 120B model for enterprise AI or the 20B for local LLM deployment. 100% private.',
  keywords: '',
  openGraph: {
    title: 'GPT OSS - OpenAI Open Source AI Model Revolution',
    description: 'Advanced GPT OSS open source AI model with enterprise features, complete data sovereignty, and local LLM deployment capabilities. Download gpt-oss-120b and gpt-oss-20b free GPT models today.',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GPT OSS',
    alternateName: ['GPT-OSS', 'gpt oss', 'openai oss', 'gpt open source'],
    description: 'GPT OSS is the best open source GPT alternative featuring gpt-oss-120b and gpt-oss-20b models with advanced reasoning, mixture of experts architecture, and enterprise AI solution capabilities.',
    applicationCategory: 'AI Model',
    operatingSystem: 'Cross-platform',
    license: 'Apache 2.0',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free GPT model download'
    },
    keywords: 'how to run GPT OSS, GPT OSS installation guide, GPT OSS vs ChatGPT, GPT OSS vs LLaMA, GPT OSS for business, MXFP4 quantization, harmony response format, GPT OSS medical AI, GPT OSS benchmarks, GPT OSS performance review, GPT OSS optimization tips, openai gpt oss 120b, gpt oss requirements, gpt oss huggingface, gpt oss benchmark, vllm gpt oss, gpt oss reddit, gpt oss vllm docker issues, gpt oss 20b benchmarks'
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ssh0n4e22g");
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
