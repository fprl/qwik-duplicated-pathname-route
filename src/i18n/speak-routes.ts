import type { RewriteRouteOption } from "qwik-speak";

const domains = {
  // Dutch
  // nl: 'test.nl',
  nl: "dev.test.nl",
  // English
  // en: 'test.com',
  en: "dev.test.com",
  // German
  // de: 'test.de',
  de: "dev.test.de",
  // French
  // fr: 'test.fr',
  fr: "dev.test.fr",
  // Italian
  // it: 'test.it',
  it: "dev.test.it",
} as const;

// Translation paths
export const rewriteRoutes: RewriteRouteOption[] = [
  {
    domain: domains.en,
    paths: {},
  },
  {
    domain: domains.nl,
    prefix: "nl",
    paths: {
      "villa-ibiza": "huis-ibiza",
      "booking": "boeken",
      "quote-open-request": "offerte-open-aanvraag",
    },
  },
  {
    domain: domains.de,
    prefix: "de",
    paths: {
      "booking": "buchen",
      "quote-open-request": "unverbindliche-anfrage",
    },
  },
  {
    domain: domains.fr,
    prefix: "fr",
    paths: {
      "booking": "reservation",
      "quote-open-request": "question-ouverte",
    },
  },
  {
    domain: domains.it,
    prefix: "it",
    paths: {
      "booking": "prenotazione",
      "quote-open-request": "richiesta-aperta",
    },
  },
];
