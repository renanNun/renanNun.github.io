// this configuration will be injectable by app.component.ts
export class LocaleConfig {
    constructor(public language: string, public locale: string) {}
  }
  
  // some locale and language configuration for all the available languages our website supports
  export const DEFAULT_LANG = "pt";
  export const DEFAULT_LOCALE = "pt-BR";
  export const SUPPORTED_LANGUAGES = [
    { language: "pt", locales: ["pt-BR", "pt-PT"] },
    { language: "en", locales: ["en-US", "en-GB"] },
    { language: "es", locales: ["es-AR","es-ES"]},
    { language: "fr", locales: ["fr-FR"]},
    { language: "de", locales: ["de-DE"]}
  ];
  
  // This factory is what will create the LocaleConfig to be used when
  // the app is running in our browser (so not in our Server-side rendered page)
  // Notice the reference to window object, which is only available when
  // we are running in a browser
  export const browserLocaleFactory: () => LocaleConfig = () => {
    if (
      typeof window === "undefined" ||
      typeof window.navigator === "undefined"
    ) {
      throw new Error("Fetching locale failed. Are you really in a browser??");
    }
    const wn = window.navigator as any;
    let locale = wn.languages ? `${wn.languages[0]}` : DEFAULT_LOCALE;
    locale = locale || wn.language || wn.browserLanguage || wn.userLanguage;
    const language = locale.split("-")[0];
  
    return new LocaleConfig(language, locale);
  };