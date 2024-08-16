import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link, useLocation } from "@builder.io/qwik-city";
import {
  useSpeakLocale,
  useSpeakConfig,
  // useDisplayName,
  inlineTranslate,
  translatePath,
} from "qwik-speak";

export default component$(() => {
  const locale = useSpeakLocale();
  const getPath = translatePath();
  const t = inlineTranslate();

  return (
    <div class="flex flex-col gap-12">
      <ChangeLocale />

      <div class="space-y-4">
        <p>{t('app.i18n_text')}</p>

        <div class="flex flex-col gap-2">
          <Link href={getPath("villa-ibiza") + "/some-house"}>
            {locale.lang} - {getPath("villa-ibiza") + "/some-house"}
          </Link>
        </div>
      </div>
    </div>
  );
});

export const ChangeLocale = component$(() => {
  const t = inlineTranslate();

  const pathname = useLocation().url.pathname;

  const locale = useSpeakLocale();
  const config = useSpeakConfig();
  // const dn = useDisplayName();

  const getPath = translatePath();

  return (
    <div class="flex flex-col gap-2">
      <h2>{t("app.change_locale")}</h2>

      <div class="flex gap-2">
        {config.supportedLocales.map((value) => (
          <a
            key={value.lang}
            class={{ active: value.lang == locale.lang }}
            href={getPath(pathname, value.lang)}
          >
            {/* {dn(value.lang, { type: 'language' })} */}
            {value.lang}
          </a>
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
