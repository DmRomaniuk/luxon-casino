import { Box } from '@mui/material';
import pokerMan from '../../../assets/images/poker_man.png';
import { DownloadCard } from './download-card';
import { InfoSection } from './info-section';
import { LanguageSocial } from './language-social';
import { Container, DesktopLayout, MobileLayout, PokerManImage } from './FooterSection.styled';

export const FooterSection = () => {
  return (
    <Container>
      <DesktopLayout>
        <PokerManImage src={pokerMan} alt="Poker Man" />
        <Box sx={{ alignSelf: 'center' }}>
          <DownloadCard />
        </Box>
        <Box sx={{ alignSelf: 'center' }}>
          <InfoSection direction="column" />
        </Box>
        <LanguageSocial align="end" />
      </DesktopLayout>

      <MobileLayout>
        <DownloadCard />
        <LanguageSocial align="center" />
        <InfoSection direction={{ xs: 'column', sm: 'row' }} />
      </MobileLayout>
    </Container>
  );
};
