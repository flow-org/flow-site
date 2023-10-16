import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  logo: <span>flow</span>,
  project: {
    link: 'https://github.com/flow-org/flow',
  },
  docsRepositoryBase: 'https://github.com/flow-org/flow-site/blob/main',
  footer: {
    text: 'Created by flow-org ♥ Nextra',
  },
  head: (<>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="128x128" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="flow" />
    <meta name="twitter:description" content='flow is a representation of "flow concept" using programming language.' />
  </>),
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath === '/') {
      return {
        title: 'flow - a representation of "flow concept" using programming language'
      };
    }
    return {
      titleTemplate: '%s - flow'
    };
  }
}

export default config
