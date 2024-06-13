import React from 'react'
import Image from "next/image";
import { DocsThemeConfig } from 'nextra-theme-docs'
import { SpeedInsights } from "@vercel/speed-insights/next"
const config: DocsThemeConfig = {
  logo: <>
      <Image src="/70x70.png" width={24} height={24} alt="logo" />

      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        React JS Interview Questions
      </span>
  </>,
  project: {
    link: 'https://github.com/Shivambh28/react-js-interview-questions',
  },
  chat: {
    link: 'https://discord.com/invite/ekzrynEv',
  },
  docsRepositoryBase: 'https://github.com/Shivambh28/react-js-interview-questions',
  footer: {
    text: 'React JS Interview Questions',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.png" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://reactjsinterview.com/",
          "name": "React JS Interview Questions",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://reactjsinterview.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "mainEntity": [
            {
              "@type": "WebPage",
              "@id": "https://reactjsinterview.com/index",
              "name": "Introduction"
            },
            {
              "@type": "WebPage",
              "@id": "https://reactjsinterview.com/how-to-use-this-guide",
              "name": "How to Use This Guide"
            },
            {
              "@type": "WebPage",
              "@id": "https://reactjsinterview.com/fundamentals-of-react",
              "name": "Fundamentals of React"
            },
            {
              "@type": "WebPage",
              "@id": "https://reactjsinterview.com/beginner-react-concepts",
              "name": "Beginner React Concepts"
            },
            {
              "@type": "WebPage",
              "@id": "https://reactjsinterview.com/intermediate-react-concepts",
              "name": "Intermediate React Concepts"
            },
            {
              "@type": "WebPage",
              "@id": "https://reactjsinterview.com/advanced-react-concepts",
              "name": "Advanced React Concepts"
            },
            {
              "@type": "WebPage",
              "@id": "https://reactjsinterview.com/react-best-practices",
              "name": "React Best Practices"
            },
            {
              "@type": "WebPage",
              "@id": "https://reactjsinterview.com/top-react-interview-questions-with-examples",
              "name": "Top React JS Interview Questions With Solutions"
            }
          ]
        })}
      </script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-LFND2LJYY4"></script>
      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-LFND2LJYY4');
    ` }} />
      <SpeedInsights />
    </>
  ),
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://https://frontendlead.com?utm_source=reactjsinterview" target="_blank">
        🎉 We are now part of <b style={{ color: 'skyblue' }}>FrontEndLead.com</b>, the complete platform to prepare for front end interviews!
      </a>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – React JS Interview Questions',
    }
  }
}

export default config
