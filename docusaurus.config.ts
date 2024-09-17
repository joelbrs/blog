import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Joel's Blog",
  tagline:
    "Um blog criado para compartilhar os conhecimentos que estou estudando.",
  favicon: "img/favicon.ico",
  url: "http://joelbrs.github.io",
  baseUrl: "/",
  organizationName: "joelbrs", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en-US"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: "/",
          path: "./docs",
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: ({ versionDocsDirPath, docPath }) => {
            return `https://github.com/joelbrs/blog/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          editCurrentVersion: true,
          remarkPlugins: [require("mdx-mermaid")],
        },
        blog: {
          showReadingTime: true,
          showLastUpdateTime: true,
          sortPosts: "ascending",
          blogSidebarTitle: "Todos os posts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Joel's Blog",
      logo: {
        alt: "Joel Filho",
        src: "img/logo.jpg",
      },
      items: [
        {
          href: "https://twitter.com/joelbrs__",
          position: "right",
          label: "🐦",
        },
        {
          href: "https://github.com/joelbrs",
          position: "right",
          label: "🐙",
        },
        {
          href: "https://github.com/joelbrs/blog",
          label: "GitHub",
          position: "right",
        },
        { to: "blog", label: "Posts", position: "left" },
      ],
    },
    footer: {
      links: [
        {
          title: "Comunidades",
          items: [
            {
              label: "Linkedin",
              href: "https://linkedin.com/in/joelbrs",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/joelbrs__",
            },
          ],
        },
        {
          title: "Outros",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/joelbrs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Joel's Blog, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
