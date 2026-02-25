import { useLocale } from '../contexts/LocaleContext';
import { LOCALE_THEMES } from '../utils';

export const useLocaleTheme = () => {
  const { locale } = useLocale();
  return LOCALE_THEMES[locale] || LOCALE_THEMES.english;
};
