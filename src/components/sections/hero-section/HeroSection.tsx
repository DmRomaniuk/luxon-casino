import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocaleTheme } from '../../../hooks';
import { GameModal } from '../../common';
import { GAME_URL } from '../../../utils';
import mainBg from '../../../assets/images/main_bg.png';
import slotImage from '../../../assets/images/777.png';
import casinoLogo from '../../../assets/icons/casino_logo.svg';
import { HeroContainer, LogoImage, SlotImage, OpenGameButton } from './HeroSection.styled';

export const HeroSection = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const { t } = useTranslation();
  const theme = useLocaleTheme();

  return (
    <HeroContainer
      sx={{
        backgroundImage: `url(${mainBg})`,
        height: { xs: 854, xxl: 944 },
        p: { xs: 2, sm: 4 },
      }}
    >
      <LogoImage src={casinoLogo} alt="Casino Royale" />
      <SlotImage src={slotImage} alt="777 Slots" />
      
      <OpenGameButton 
        variant="contained" 
        gradient={theme.buttonGradient}
        onClick={() => setIsGameOpen(true)}
      >
        {t('hero.openGame')}
      </OpenGameButton>

      <GameModal
        open={isGameOpen}
        onClose={() => setIsGameOpen(false)}
        gameUrl={GAME_URL}
      />
    </HeroContainer>
  );
};
