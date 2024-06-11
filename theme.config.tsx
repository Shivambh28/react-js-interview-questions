import React from 'react'
import Image from "next/image";
import { DocsThemeConfig } from 'nextra-theme-docs'

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
      <meta property="og:title" content="React JS Interview Questions" />
      <meta property="og:description" content="The Ultimate Front-End Developer React JS Interview Preparation Guide" />
      <link rel="icon" href="/favicon.png" />
    </>
  ),
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://https://frontendlead.com?utm_source=reactjsinterview.com" target="_blank">
        🎉 We are now part of <b style={{ color: 'skyblue' }}>FrontEndLead.com</b>, the complete platform to prepare for front end interviews!
      </a>
    )
  }
}

export default config
