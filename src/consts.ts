export const SITE = {
  title: "Ultramarine Wiki",
  description: "The wiki for Ultramarine Linux.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://i.imgur.com/thZm6Qc.png",
    alt: "Ultramarine Linux Wiki Text with an abstract background with two blue circles",
  },
  twitter: "UltramarineProj",
};

export const KNOWN_LANGUAGES = {
  English: "en",
  Deutsch: "de",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/Ultramarine-Linux/wiki-new/blob/main`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/bUuQasHdrF`;

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    Introduction: [{ text: "Welcome", link: "en/welcome" }],
    Community: [
      { text: "Join the Community", link: "en/community/community" },
      { text: "Code of Conduct", link: "en/community/codeofconduct" },
    ],
    Installation: [
      { text: "Getting Ultramarine", link: "en/installation/getting" },
      { text: "Installation", link: "en/installation/installation" },
      { text: "Post-Installation", link: "en/installation/postinstall" },
      { text: "Advanced Post-install steps", link: "en/installation/post-advanced" }
    ],
    Contributing: [
      { text: "Overview", link: "en/contributing/contributorguide" },
      { text: "Development", link: "en/contributing/hacking" },
    ],
    Hardware: [
      { text: "System Requirements", link: "en/hardware/requirements" },
      { text: "Ultramarine Anywhere", link: "en/hardware/anywhere" },
      { text: "NVIDIA", link: "en/hardware/nvidia" },
      { text: "Microsoft Surface", link: "en/hardware/surface" },
      {
        text: "Broadcom and Realtek Networking",
        link: "en/hardware/broadcom-realtek",
      },
      { text: "BIOS Keys", link: "en/hardware/bioskeys" },
    ],
    "Linux Concepts": [
      { text: "Concepts Overview", link: "en/linux/overview" },
      { text: "The File System", link: "en/linux/filesystem" },
      { text: "Device Files", link: "en/linux/devicefiles" },
      { text: "Permissions", link: "en/linux/permissions" },
      { text: "Software and Package Management", link: "en/linux/software" },
      { text: "The Shell", link: "en/linux/shell" },
    ],

    Usage: [{ text: "Gaming on Ultramarine", link: "en/usage/gaming" }],

    "Release Notes": [{ text: "Errata", link: "en/release/errata" }],
    // Chromebook: [
    //   { text: "Getting Started", link: "en/chromebook/chromebook" },
    //   { text: "Getting Chromebook Edition", link: "en/chromebook/getting" },
    //   { text: "Installing to a Chromebook", link: "en/chromebook/preparing" },
    //   { text: "Post-Install", link: "en/chromebook/postinstall" },
    //   { text: "ARM Chromebooks (Beta)", link: "en/chromebook/armbeta" },
    //   { text: "Terminology", link: "en/chromebook/terminology" },
    // ],

    Development: [
      {
        text: "Developing for Ultramarine",
        link: "en/development/developing-for-ultramarine",
      },
      { text: "Using Andaman", link: "en/development/anda" },
      { text: "UX Guidelines", link: "en/development/ux-guide" },
    ],
  },
  de: {
    Introduction: [{ text: "Welcome", link: "de/welcome" }],
    Installation: [
      { text: "Getting started", link: "de/installation/getting-started" },
      { text: "Installation", link: "de/installation/installation" },
      { text: "Post-Installation", link: "de/installation/postinstall" },
    ],
    "Linux Concepts": [
      { text: "Concepts overview", link: "de/linux/overview" },
      { text: "The File System", link: "de/linux/filesystem" },
      { text: "Permissions", link: "de/linux/permissions" },
      { text: "Software and package management", link: "de/linux/software" },
      { text: "The Shell", link: "de/linux/shell" },
    ],
    Development: [
      {
        text: "Developing for Ultramarine",
        link: "de/development/developing-for-ultramarine",
      },
      { text: "Using Andaman", link: "de/development/anda" },
      { text: "UX Guidelines", link: "de/development/ux-guide" },
    ],
    "Release Notes": [
      { text: "Developing for Ultramarine", link: "de/release/errata" },
    ],
  },
};
