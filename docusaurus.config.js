/* eslint-disable unicorn/no-array-push-push,global-require,@typescript-eslint/no-unused-vars */
// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('./src/dracula-custom-code-theme');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GameCI',
  tagline: 'The fastest and easiest way to automatically test and build your game projects',
  url: 'https://game.ci',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'icons/favicon.ico',
  organizationName: 'game-ci', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  plugins: [
    ['docusaurus-plugin-sass', {}],
    [
      'docusaurus-gtm-plugin',
      {
        id: 'GTM-5CRN6W9',
        enabled: true,
      },
    ],
    async function tailwindcss(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v2 (current)',
            },
            1: {
              label: 'v1',
            },
          },
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/game-ci/documentation/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/game-ci/documentation/tree/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'E57FOT37U9',

        // Public API key: it is safe to commit it
        apiKey: '1df02f65283b9c1c95637a3a0d8a024a',

        indexName: 'game',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // ... other Algolia params
      },
      navbar: {
        title: 'GameCI',
        logo: {
          alt: 'GameCI Logo',
          src: 'assets/images/game-ci-brand-logo-wordmark-light.svg',
          srcDark: 'assets/images/game-ci-brand-logo-wordmark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            // dropdownActiveClassDisabled: true,
          },
          {
            label: 'Source code',
            position: 'right',
            items: [
              {
                label: 'This Website',
                to: 'https://github.com/game-ci/documentation',
              },
              {
                label: 'Versioning Backend',
                to: 'https://github.com/game-ci/versioning-backend',
              },
              {
                label: 'Docker images for Unity',
                to: 'https://github.com/game-ci/docker',
              },
              {
                label: 'gitlab-ci unity3d example project',
                to: 'https://gitlab.com/game-ci/unity3d-gitlab-ci-example',
              },
              {
                label: 'Unity Actions',
                to: 'https://github.com/game-ci/unity-actions',
              },
              {
                label: 'Unity Request Activation',
                to: 'https://github.com/game-ci/unity-request-activation-file',
              },
              {
                label: 'Unity Activate',
                to: 'https://github.com/game-ci/unity-activate',
              },
              {
                label: 'Unity Test Runner',
                to: 'https://github.com/game-ci/unity-test-runner',
              },
              {
                label: 'Unity Builder',
                to: 'https://github.com/game-ci/unity-builder',
              },
              {
                label: 'Unity Return License',
                to: 'https://github.com/game-ci/unity-return-license',
              },
              {
                label: 'Steam Deploy',
                to: 'https://github.com/game-ci/steam-deploy',
              },
            ],
          },
          {
            href: 'https://github.com/game-ci/documentation',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: 'https://game.ci/discord',
            label: 'Discord',
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
                label: 'Welcome to GameCI',
                to: '/docs/index',
              },
              {
                label: 'Getting Started with Github',
                to: '/docs/github/getting-started',
              },
              {
                label: 'Getting Started with Gitlab',
                to: '/docs/gitlab/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://game.ci/discord',
              },
            ],
          },

          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GameCI on GitHub',
                href: 'https://github.com/game-ci/',
              },
              {
                label: 'GameCI on Gitlab',
                href: 'https://gitlab.com/game-ci',
              },
              {
                label: 'GameCI on OpenCollective',
                href: 'https://opencollective.com/game-ci',
              },
            ],
          },
        ],
        copyright: `<p>
          Made with ❤ by open source contributors using
          <a href="https://docusaurus.io" target="_blank" rel="noreferrer noopener">
            <span aria-label="Docusaurus">🦖</span>
          </a>
          and powered by
          <a href="https://vercel.com?utm_source=game-ci" target="_blank" rel="noreferrer noopener">
            <svg title="Vercel" style="margin: 0 4px -2px;" fill="black" stroke="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M256 48l240 416H16z"></path></svg>
          </a>
        </p>
        <p>
          Copyright © ${new Date().getFullYear()}
          <a href="https://game.ci/" target="_blank">GameCI</a> 🎮</p>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'toml', 'docker', 'ruby'],
      },
    }),
};

module.exports = config;
