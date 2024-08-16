import { component$ } from "@builder.io/qwik";
import { type DocumentHead, useLocation, Link } from "@builder.io/qwik-city";
import { localizePath, inlineTranslate } from 'qwik-speak';

export default component$(() => {
  const loc = useLocation();
  const getPath = localizePath();
  const t = inlineTranslate();

  return (
    <div class="container mx-auto flex flex-col items-center gap-4">
      <p>{loc.url.pathname}</p>
      <Link href={getPath('/')}>{t('app.back_to_home')}</Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Villa",
};
