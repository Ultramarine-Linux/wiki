export const SITE = {
  title: "Ultramarine Wiki",
  description: "The wiki for Ultramarine.",
  defaultLanguage: "en-us",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://i.imgur.com/thZm6Qc.png",
    alt: "Ultramarine Wiki Text with an abstract background with two blue circles",
  },
  twitter: "UltramarineProj",
};

export const KNOWN_LANGUAGES = {
  English: "en",
  hindi: "hi",
  Русский: "ru",
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
      { text: "Secure Boot", link: "en/setup/secure-boot" },
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
      { text: "ASUS ROG", link: "en/anywhere/asus" },
      { text: "WSL", link: "en/anywhere/wsl" },
    ],
    Usage: [
      { text: "Gaming on Ultramarine", link: "en/usage/gaming" },
      { text: "Localization", link: "en/usage/l10n" },
      { text: "Keyboard Configuration", link: "en/usage/keyboard-cfg" },
      { text: "Shell Configuration", link: "en/usage/shell-cfg" },
      {
        text: "Switching Desktop Environments",
        link: "en/usage/hop",
      },
      { text: "umcli", link: "en/usage/umcli" },
      { text: "eduroam", link: "en/usage/eduroam" },
      { text: "Nix", link: "en/usage/nix" },
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
      { text: "Ultramarine 44 Upgrades", link: "en/release/44-upgrades" },
      { text: "Budgie SDDM", link: "en/release/budgie-sddm" },
      { text: "Errata", link: "en/release/errata" },
      { text: "Differences with Fedora", link: "en/release/diff-fedora" },
    ],
    // Chromebook: [
    //   { text: "Getting Started", link: "en/chromebook/chromebook" },
    //   { text: "Getting Ultramarine for Chromebook", link: "en/chromebook/getting" },
    //   { text: "Installing to a Chromebook", link: "en/chromebook/preparing" },
    //   { text: "Post-Install", link: "en/chromebook/postinstall" },
    //   { text: "ARM Chromebooks (Beta)", link: "en/chromebook/armbeta" },
    //   { text: "Terminology", link: "en/chromebook/terminology" },
    // ],
  },
  ru: {
    Введение: [{ text: "Добро пожаловать!", link: "ru/welcome" }],
    Вклад: [{ text: "Обзор", link: "ru/contributing/contributorguide" }],
  },
  hi: {
    Introduction: [{ text: "स्वागत है", link: "hi/welcome" }],
  },
};
