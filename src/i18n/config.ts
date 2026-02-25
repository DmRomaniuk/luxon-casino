import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  english: {
    translation: {
      hero: {
        openGame: 'OPEN THE GAME',
      },
      footer: {
        downloadCasino: 'Download Casino',
        playAnywhere: 'Play Min anywhere, anytime',
        installApp: 'Install App',
        only18: 'Only 18+',
        licenseText: 'Casino is certified by the Anjouan Gaming Authority',
        socialMedia: 'Us on social media:',
      },
      languages: {
        english: 'English',
        turkish: 'Turkish',
        ukrainian: 'Ukrainian',
        russian: 'Russian',
        polish: 'Polish',
      },
    },
  },
  turkish: {
    translation: {
      hero: {
        openGame: 'OYUNU AÇ',
      },
      footer: {
        downloadCasino: 'Casino İndir',
        playAnywhere: 'Her yerde, her zaman Min oyna',
        installApp: 'Uygulamayı Yükle',
        only18: 'Sadece 18+',
        licenseText: 'Casino, Anjouan Oyun Otoritesi tarafından sertifikalandırılmıştır',
        socialMedia: 'Sosyal medyada biz:',
      },
      languages: {
        english: 'İngilizce',
        turkish: 'Türkçe',
        ukrainian: 'Ukraynaca',
        russian: 'Rusça',
        polish: 'Lehçe',
      },
    },
  },
  ukrainian: {
    translation: {
      hero: {
        openGame: 'ВІДКРИТИ ГРУ',
      },
      footer: {
        downloadCasino: 'Завантажити Казино',
        playAnywhere: 'Грайте в Min будь-де, будь-коли',
        installApp: 'Встановити Додаток',
        only18: 'Тільки 18+',
        licenseText: 'Казино сертифіковано Ігровим Органом Анжуан',
        socialMedia: 'Ми в соціальних мережах:',
      },
      languages: {
        english: 'Англійська',
        turkish: 'Турецька',
        ukrainian: 'Українська',
        russian: 'Російська',
        polish: 'Польська',
      },
    },
  },
  russian: {
    translation: {
      hero: {
        openGame: 'ОТКРЫТЬ ИГРУ',
      },
      footer: {
        downloadCasino: 'Скачать Казино',
        playAnywhere: 'Играйте в Min где угодно, когда угодно',
        installApp: 'Установить Приложение',
        only18: 'Только 18+',
        licenseText: 'Казино сертифицировано Игровым Органом Анжуан',
        socialMedia: 'Мы в социальных сетях:',
      },
      languages: {
        english: 'Английский',
        turkish: 'Турецкий',
        ukrainian: 'Украинский',
        russian: 'Русский',
        polish: 'Польский',
      },
    },
  },
  polish: {
    translation: {
      hero: {
        openGame: 'OTWÓRZ GRĘ',
      },
      footer: {
        downloadCasino: 'Pobierz Kasyno',
        playAnywhere: 'Graj w Min wszędzie, o każdej porze',
        installApp: 'Zainstaluj Aplikację',
        only18: 'Tylko 18+',
        licenseText: 'Kasyno jest certyfikowane przez Organ ds. Gier Anjouan',
        socialMedia: 'Jesteśmy w mediach społecznościowych:',
      },
      languages: {
        english: 'Angielski',
        turkish: 'Turecki',
        ukrainian: 'Ukraiński',
        russian: 'Rosyjski',
        polish: 'Polski',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'english',
    fallbackLng: 'english',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
