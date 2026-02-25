import { useTranslation } from 'react-i18next';
import { useLocaleTheme } from '../../../../hooks';
import downloadArrow from '../../../../assets/icons/download_arrow.svg';
import casinoLogo from '../../../../assets/icons/casino_logo.svg';
import { CardContainer, Logo, Title, Subtitle, InstallButton, IconImage } from './DownloadCard.styled';

export const DownloadCard = () => {
  const { t } = useTranslation();
  const theme = useLocaleTheme();

  return (
    <CardContainer 
      bordercolor={theme.borderColor}
      sx={{ 
        width: { xs: '100%', sm: 390 },
        maxWidth: '100%',
      }}
    >
      <Logo src={casinoLogo} alt="Casino Royale" />
      <Title>{t('footer.downloadCasino')}</Title>
      <Subtitle>{t('footer.playAnywhere')}</Subtitle>
      <InstallButton variant="contained" gradient={theme.buttonGradient}>
        <IconImage src={downloadArrow} alt="" />
        {t('footer.installApp')}
      </InstallButton>
    </CardContainer>
  );
};
