import { useTranslation } from 'react-i18next';
import adultContent from '../../../../assets/icons/adult_content.svg';
import licenceLogo from '../../../../assets/icons/licence_logo.svg';
import { InfoContainer, InfoItem, IconImage, InfoText } from './InfoSection.styled';
import type { InfoSectionProps } from './InfoSection.types';

export const InfoSection = ({ direction }: InfoSectionProps) => {
  const { t } = useTranslation();

  return (
    <InfoContainer
      sx={{
        flexDirection: direction,
        gap: { xs: '24px', lg: '31px' },
        alignItems: { xs: 'center', sm: 'flex-start', lg: 'flex-start' },
        maxWidth: { xs: 287, sm: 600, lg: 'none' },
      }}
    >
      <InfoItem
        sx={{
          flexDirection: { xs: 'column', lg: 'row' },
          gap: '12px',
          maxWidth: { lg: 357 },
          flex: { sm: 1, lg: 'unset' },
        }}
      >
        <IconImage src={adultContent} alt="18+" />
        <InfoText sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
          {t('footer.only18')}
        </InfoText>
      </InfoItem>

      <InfoItem
        sx={{
          flexDirection: { xs: 'column', lg: 'row' },
          gap: '12px',
          maxWidth: { lg: 357 },
          flex: { sm: 1, lg: 'unset' },
        }}
      >
        <IconImage src={licenceLogo} alt="Licence" />
        <InfoText sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
          {t('footer.licenseText')}
        </InfoText>
      </InfoItem>
    </InfoContainer>
  );
};
