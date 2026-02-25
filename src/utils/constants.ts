import type { Language, LocaleTheme } from '../types';

export const GAME_URL = 'https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en';

export const LANGUAGES: Record<string, Language> = {
  english: { code: 'gb', name: 'English' },
  turkish: { code: 'tr', name: 'Turkish' },
  ukrainian: { code: 'ua', name: 'Ukrainian' },
  russian: { code: 'ru', name: 'Russian' },
  polish: { code: 'pl', name: 'Polish' },
};

export const LOCALE_THEMES: Record<string, LocaleTheme> = {
  english: {
    buttonGradient: 'linear-gradient(to right, #FF8D6B, #FFBA47)',
    accentColor: '#FF8D6B',
    borderColor: '#FF8D6B',
  },
  turkish: {
    buttonGradient: 'linear-gradient(to right, #E30A17, #FF6B6B)',
    accentColor: '#E30A17',
    borderColor: '#E30A17',
  },
  ukrainian: {
    buttonGradient: 'linear-gradient(to right, #0057B7, #FFD700)',
    accentColor: '#0057B7',
    borderColor: '#0057B7',
  },
  russian: {
    buttonGradient: 'linear-gradient(to right, #0039A6, #D52B1E)',
    accentColor: '#D52B1E',
    borderColor: '#D52B1E',
  },
  polish: {
    buttonGradient: 'linear-gradient(to right, #DC143C, #FFFFFF)',
    accentColor: '#DC143C',
    borderColor: '#DC143C',
  },
};
