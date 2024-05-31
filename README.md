# Ultramarine Linux Wiki

Welcome to the source repository behind the [Ultramarine Wiki]! We welcome any contributions and
you may freely send pull requests to this repository if you would like to modify any of the
content here!

## Translations

If you'd like to translate for a new language:

1. Go to `src/consts.ts` to add a new language into `KNOWN_LANGUAGES`
2. Copy everything from `src/content/docs/en` to `src/content/docs/<your_language_code>`[^1]
3. Add pages into `SIDEBAR` in `src/consts.ts`
4. Start translating!

[^1]: We encourage you to use a generic language code without limiting the region.

[Ultramarine Wiki]: https://wiki.ultramarine-linux.org
