import { server$ } from '@builder.io/qwik-city';
import { isDev } from '@builder.io/qwik/build';
import type { LoadTranslationFn, Translation, TranslationFn } from 'qwik-speak';

/**
 * Translation files are lazy-loaded via dynamic import and will be split into separate chunks during build.
 * Keys must be valid variable names
 */
const translationData = import.meta.glob<Translation>('/src/i18n/**/*.json');

/**
 * Using server$, translation data is always accessed on the server
 */
// const loadTranslation$: LoadTranslationFn = server$(async (lang: string, asset: string) =>
//   await translationData[`/src/i18n/${lang}/${asset}.json`]?.()
// );

const loadTranslation$: LoadTranslationFn = server$(async (lang: string, asset: string) => {
  const langAsset = `/src/i18n/${lang}/${asset}.json`;

  if (langAsset in translationData) {
    return await translationData[langAsset]();
  }

  if (isDev) {
    console.warn(`loadTranslation$: ${langAsset} not found`);
  }
  
  return null;
});

export const translationFn: TranslationFn = {
  loadTranslation$: loadTranslation$
};
