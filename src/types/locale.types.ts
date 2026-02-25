export type Locale = 'english' | 'turkish' | 'ukrainian' | 'russian' | 'polish';

export interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export interface Language {
  code: string;
  name: string;
}

export interface LocaleTheme {
  buttonGradient: string;
  accentColor: string;
  borderColor: string;
}
