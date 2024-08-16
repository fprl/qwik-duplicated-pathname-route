import { type FormatNumberFn, useFormatNumber } from 'qwik-speak';

type UseFormatCurrencyProps = Parameters<FormatNumberFn>;

export function useFormatCurrency() {
  const fn = useFormatNumber();

  return (...args: UseFormatCurrencyProps) => {
    const [value, options = {}, lang, currency] = args;
    return fn(value, { ...options, style: 'currency', currency }, lang);
  };
}
