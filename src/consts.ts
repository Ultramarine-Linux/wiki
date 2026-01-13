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
  正體中文: "zh_hant",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/Ultramarine-Linux/wiki-new/blob/main`;

export const COMMUNITY_INVITE_URL = `https://fyralabs.com/discord`;

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
    Setup: [
      { text: "System Requirements", link: "en/setup/requirements" },
      { text: "Getting Ultramarine", link: "en/setup/getting" },
      { text: "BIOS Keys", link: "en/setup/bioskeys" },
      { text: "Installation", link: "en/setup/installation" },
      // {
      // text: "Installation with Readymade",
      //link: "en/installation/readymade",
      //},
      { text: "Post-Installation", link: "en/setup/postinstall" },
      {
        text: "Broadcom and Realtek Networking",
        link: "en/setup/broadcom-realtek",
      },
      { text: "NVIDIA", link: "en/setup/nvidia" },
    ],
    Contributing: [
      { text: "Overview", link: "en/contributing/contributorguide" },
      { text: "Development", link: "en/contributing/hacking" },
      { text: "Mirroring", link: "en/contributing/mirroring" },
    ],
    //Hardware: [
    //{ text: "Ultramarine Anywhere", link: "en/hardware/anywhere" },
    //{ text: "Microsoft Surface", link: "en/hardware/surface" },
    //{
    //  text: "Broadcom and Realtek Networking",
    //  link: "en/hardware/broadcom-realtek",
    //},
    //],
    Anywhere: [
      { text: "Ultramarine Anywhere", link: "en/anywhere/anywhere" },
      { text: "Microsoft Surface", link: "en/anywhere/surface" },
      { text: "Raspberry Pi", link: "en/anywhere/rpi" },
      { text: "WSL", link: "en/anywhere/wsl" },
    ],
    Usage: [
      { text: "Gaming on Ultramarine", link: "en/usage/gaming" },
      { text: "Localization", link: "en/usage/l10n" },
      { text: "Keyboard Configuration", link: "en/usage/keyboard-cfg" },
      {
        text: "Switching Desktop Environments / Edition",
        link: "en/usage/hop",
      },
      { text: "umcli", link: "en/usage/umcli" },
      { text: "eduroam", link: "en/usage/eduroam" },
    ],
    "Linux Concepts": [
      { text: "What is Linux?", link: "en/linux/overview" },
      { text: "The File System", link: "en/linux/filesystem" },
      { text: "Device Files", link: "en/linux/devicefiles" },
      { text: "Permissions", link: "en/linux/permissions" },
      { text: "Software and Package Management", link: "en/linux/software" },
      { text: "The Shell", link: "en/linux/shell" },
      { text: "SSH", link: "en/linux/ssh" },
      { text: "Security and Privacy", link: "en/linux/securityprivacy" },
    ],
    "Release Notes": [
      { text: "Ultramarine 43 Upgrades", link: "en/release/43-upgrades" },
      { text: "Errata", link: "en/release/errata" },
      { text: "Differences with Fedora", link: "en/release/diff-fedora" },
    ],
    Chromebook: [
      { text: "Getting Started", link: "en/chromebook/chromebook" },
      { text: "Getting Chromebook Edition", link: "en/chromebook/getting" },
      { text: "Installing", link: "en/chromebook/installing" },
      {
        text: "Troubleshooting and FAQ",
        link: "en/chromebook/faq-and-troubleshooting",
      },
      { text: "ARM Chromebooks (Beta)", link: "en/chromebook/arm" },
      { text: "Terminology", link: "en/chromebook/terminology" },
    ],

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
  },
  zh_hant: {
    介紹: [{ text: "歡迎", link: "zh_hant/welcome" }],
    社羣: [
      { text: "參與社羣", link: "zh_hant/community/community" },
      { text: "行為準則", link: "zh_hant/community/codeofconduct" },
    ],
    安裝: [
      { text: "取得 Ultramarine", link: "zh_hant/installation/getting" },
      { text: "安裝過程", link: "zh_hant/installation/installation" },
      // {
      // text: "Installation with Readymade",
      //link: "zh_hant/installation/readymade",
      //},
      {
        text: "Raspberry Pi 安裝過程",
        link: "zh_hant/installation/rpi",
      },
      { text: "安裝之後…", link: "zh_hant/installation/postinstall" },
      {
        text: "進階安裝後步驟",
        link: "zh_hant/installation/post-advanced",
      },
    ],
    貢獻: [
      { text: "貢獻指南", link: "zh_hant/contributing/contributorguide" },
      { text: "原碼貢獻", link: "zh_hant/contributing/hacking" },
    ],
    硬件: [
      { text: "系統要求", link: "zh_hant/hardware/requirements" },
      { text: "Ultramarine Anywhere", link: "zh_hant/hardware/anywhere" },
      { text: "NVIDIA", link: "zh_hant/hardware/nvidia" },
      { text: "Microsoft Surface", link: "zh_hant/hardware/surface" },
      {
        text: "Broadcom and Realtek Networking",
        link: "zh_hant/hardware/broadcom-realtek",
      },
      { text: "BIOS Keys", link: "zh_hant/hardware/bioskeys" },
    ],
    "關於 Linux": [
      { text: "何謂 Linux？", link: "zh_hant/linux/overview" },
      { text: "檔案系統", link: "zh_hant/linux/filesystem" },
      { text: "裝置檔案", link: "zh_hant/linux/devicefiles" },
      { text: "權限", link: "zh_hant/linux/permissions" },
      { text: "軟件及安裝包管理", link: "zh_hant/linux/software" },
      { text: "The Shell", link: "zh_hant/linux/shell" },
      { text: "安全及私隱", link: "zh_hant/linux/securityprivacy" },
    ],

    用途: [
      { text: "電子遊戲", link: "zh_hant/usage/gaming" },
      { text: "本地化", link: "zh_hant/usage/l10n" },
    ],

    發佈版本通知: [{ text: "勘誤表", link: "zh_hant/release/errata" }],

    開發: [
      {
        text: "為 Ultramarine 開發",
        link: "zh_hant/development/developing-for-ultramarine",
      },
    ],
  },
};
