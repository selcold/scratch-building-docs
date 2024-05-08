import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Scratch Building Docs',
  tagline: 'Run a building with Scratch!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://scratch-building-docs.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'selcold', // Usually your GitHub org/user name.
  projectName: 'scratch-building-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'ja',
    ],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      ja: {
        label: '日本語',
        direction: 'ltr',
        htmlLang: 'ja-JP',
        calendar: 'gregory',
        path: 'ja',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/selcold/scratch-building-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/selcold/scratch-building-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'announcementBar-v1.1.1', // Increment on change
      // content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">Twitter ${TwitterSvg}</a>`,
      content: `🎉️ <b><a target="_blank" href="https://scratch.mit.edu/projects/927111186/">Scratch Building 7.1.1</a></b> 🥳️`,
    },
    prism: {
      additionalLanguages: [
        'java',
        'latex',
        'haskell',
        'matlab',
        'PHp',
        'powershell',
        'bash',
        'diff',
        'json',
        'scss',
      ],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // Replace with your project's social card
    image: 'img/ScratchBuilding-cocial-card.png',
    description: "This website hosts the official Scratch Building documentation site.",
    metadata: [
    ],
    algolia: {
      appId: 'RQVUKQUMH1',
      apiKey: 'b3e0da193276d983e4ce1128d9b8448b',
      indexName: 'scratch-building-vercel',
    },
    navbar: {
      title: 'Scratch Building Docs',
      logo: {
        alt: 'Scratch Building Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/changelog', label: 'Changelog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: 'https://github.com/selcold/scratch-building-docs/tree/main/i18n/',
              label: 'Help Us Translate',
            },
          ],
        },
        {
          href: 'https://github.com/selcold/scratch-building-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/2PZHtsKzHJ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Support',
              to: 'https://forms.gle/RGZ3WZepiuVwDpv39',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/selcold/scratch-building-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © 2024 selcold. Built with Docusaurus.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
