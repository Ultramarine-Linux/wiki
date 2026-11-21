export const SITE = {
  title: "Ultramarine Wiki",
  description: "The wiki for Ultramarine Linux.",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://i.imgur.com/thZm6Qc.png",
    alt: "Ultramarine Linux Wiki Text with an abstract background with two blue circles",
  },
  twitter: "UltramarineProj",
};

export const DEFAULT_LANGUAGE = "en";

export const GITHUB_EDIT_URL = `https://github.com/Ultramarine-Linux/wiki-new/blob/main`;

export const COMMUNITY_INVITE_URL = `https://fyralabs.com/discord`;

export const SIDEBAR = {
  introduction: ["welcome"],
  community: ["community/community", "community/codeofconduct"],
  setup: [
    "setup/requirements",
    "setup/getting",
    "setup/bioskeys",
    "setup/installation",
    "setup/postinstall",
    "setup/secure-boot",
    "setup/broadcom-realtek",
    "setup/nvidia",
  ],
  contributing: [
    "contributing/contributorguide",
    "contributing/hacking",
    "contributing/mirroring",
  ],
  anywhere: [
    "anywhere/anywhere",
    "anywhere/surface",
    "anywhere/rpi",
    "anywhere/asus",
    "anywhere/wsl",
  ],
  usage: [
    "usage/gaming",
    "usage/l10n",
    "usage/keyboard-cfg",
    "usage/shell-cfg",
    "usage/hop",
    "usage/umcli",
    "usage/eduroam",
    "usage/nix",
  ],
  linuxConcepts: [
    "linux/overview",
    "linux/filesystem",
    "linux/devicefiles",
    "linux/permissions",
    "linux/software",
    "linux/shell",
    "linux/ssh",
    "linux/securityprivacy",
  ],
  releaseNotes: [
    "release/44-upgrades",
    "release/budgie-sddm",
    "release/errata",
    "release/diff-fedora",
  ],
} as const satisfies Record<string, readonly string[]>;

export type SidebarSection = keyof typeof SIDEBAR;
