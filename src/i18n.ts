import { init } from "i18nya";
import { DEFAULT_LANGUAGE } from "./consts";
import type en from "./langs/en.json";

export type UIStringKey = keyof typeof en;

const i18nya = await init<UIStringKey>({
  langDir: "./langs",
  defaultLang: DEFAULT_LANGUAGE,
  viteImports: import.meta.glob("./langs/*.json", { eager: true }),
});

export const LANGUAGE_CODES = Object.keys(i18nya.translations).sort(
  (a, b) => Number(b === DEFAULT_LANGUAGE) - Number(a === DEFAULT_LANGUAGE),
);

export const makeT = i18nya.makeT;

export const languageNames = Object.fromEntries(
  LANGUAGE_CODES.map((code) => [code, makeT(code)("language.name")]),
);

export const htmlLangFor = (code: string) => code.replace("_", "-");

const langPathRegex = /^\/([A-Za-z_-]+)(?=\/|$)/;

export function getLanguageFromURL(pathname: string) {
  const code = pathname.match(langPathRegex)?.[1];
  return code && LANGUAGE_CODES.includes(code) ? code : DEFAULT_LANGUAGE;
}

export function localizeHref(href: string, lang: string) {
  const sourcePrefix = `/${DEFAULT_LANGUAGE}/`;
  return href.startsWith(sourcePrefix)
    ? `/${lang}/${href.slice(sourcePrefix.length)}`
    : href;
}

export function splitDocId(id: string) {
  const [lang, ...rest] = id.split("/");
  return { lang, slug: rest.join("/") };
}
