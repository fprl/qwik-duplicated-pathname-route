import type { RequestHandler } from "@builder.io/qwik-city";
import { extractFromDomain, extractFromUrl, validateLocale, setSpeakContext } from 'qwik-speak';

import { config } from '~/i18n/speak-config';
import { rewriteRoutes } from '~/i18n/speak-routes';

export const onRequest: RequestHandler = ({ locale, error, url, sharedMap }) => {
  let lang: string | undefined = undefined;

  const prefix = extractFromUrl(url);

  if (prefix && validateLocale(prefix)) {
    // Check supported locales
    lang = config.supportedLocales.find(value => value.lang === prefix)?.lang;
    // 404 error page
    if (!lang) throw error(404, 'Page not found');
  } else {
    // Extract from domain
    lang = extractFromDomain(url, rewriteRoutes) || config.defaultLocale.lang;
  }

  // Set Speak context (optional: set the configuration on the server)
  setSpeakContext(config);

  // Set Qwik locale
  locale(lang);
  sharedMap.set('locale', lang);
};
