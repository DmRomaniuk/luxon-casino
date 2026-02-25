import { MenuItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocale } from '../../../../contexts/LocaleContext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import instagramIcon from '../../../../assets/icons/instagram.svg';
import telegramIcon from '../../../../assets/icons/telegram.svg';
import xIcon from '../../../../assets/icons/x.svg';
import mailIcon from '../../../../assets/icons/mail.svg';
import type { Locale } from '../../../../types';
import { LANGUAGES } from '../../../../utils';
import type { LanguageSocialProps } from './LanguageSocial.types';
import {
  Container,
  StyledSelect,
  FlagIcon,
  MenuItemContent,
  SocialSection,
  SocialIconsRow,
  SocialIcon,
} from './LanguageSocial.styled';

export const LanguageSocial = ({ align }: LanguageSocialProps) => {
  const { locale, setLocale } = useLocale();
  const { t } = useTranslation();

  return (
    <Container align={align}>
      <StyledSelect
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        renderValue={(value) => {
          const code = LANGUAGES[value as string].code;
          return (
            <MenuItemContent>
              <FlagIcon className={`fi fi-${code}`} />
              <Typography
                sx={{
                  fontFamily: '"SF Pro Display", sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '22px',
                  color: 'rgba(255, 255, 255, 0.5)',
                }}
              >
                {t(`languages.${value}`)}
              </Typography>
            </MenuItemContent>
          );
        }}
        IconComponent={KeyboardArrowDownIcon}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: '#1E2A47',
              borderRadius: '8px',
              mt: '4px',
              '& .MuiMenuItem-root': {
                fontFamily: '"SF Pro Display", sans-serif',
                fontSize: '16px',
                color: 'white',
                padding: '12px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.16)',
                  },
                },
              },
            },
          },
        }}
      >
        {Object.entries(LANGUAGES).map(([lang, { code }]) => (
          <MenuItem key={lang} value={lang}>
            <MenuItemContent>
              <FlagIcon className={`fi fi-${code}`} />
              {t(`languages.${lang}`)}
            </MenuItemContent>
          </MenuItem>
        ))}
      </StyledSelect>

      <SocialSection align={align}>
        <Typography variant="caption" sx={{ color: 'grey.500', display: 'block', mb: 1 }}>
          {t('footer.socialMedia')}
        </Typography>
        <SocialIconsRow>
          <SocialIcon src={instagramIcon} alt="Instagram" />
          <SocialIcon src={telegramIcon} alt="Telegram" />
          <SocialIcon src={xIcon} alt="X" />
          <SocialIcon src={mailIcon} alt="Email" />
        </SocialIconsRow>
      </SocialSection>
    </Container>
  );
};
