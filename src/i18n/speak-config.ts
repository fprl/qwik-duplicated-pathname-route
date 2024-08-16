import { type SpeakConfig, toPrefixAsNeeded } from 'qwik-speak';

import { rewriteRoutes } from './speak-routes';

export const config: SpeakConfig = {
  rewriteRoutes: toPrefixAsNeeded(rewriteRoutes),
  defaultLocale: { lang: "en", currency: "EUR", timeZone: "Europe/Amsterdam" },
  supportedLocales: [
    { lang: "en", currency: "EUR", timeZone: "Europe/Amsterdam" },
    { lang: "nl", currency: "EUR", timeZone: "Europe/Amsterdam" },
    { lang: "de", currency: "EUR", timeZone: "Europe/Berlin" },
    { lang: "fr", currency: "EUR", timeZone: "Europe/Paris" },
    { lang: 'it', currency: 'EUR', timeZone: 'Europe/Rome' },
    // { lang: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles' }
  ],
  domainBasedRouting: { prefix: 'as-needed' },
  assets: ['app'], // Translations shared by the pages
  runtimeAssets: [
    // 'runtime' // Translations with dynamic keys or parameters
    // https://github.com/robisim74/qwik-speak/blob/main/docs/inline.md#qwik-speak-inline-vite-plugin--runtime
    // we use scoped runtimes files for different pages instead of using a general one
  ],
};
