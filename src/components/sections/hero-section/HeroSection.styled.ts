import { styled } from '@mui/material/styles';
import { Box, Button as MuiButton } from '@mui/material';

export const HeroContainer = styled(Box)({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
});

export const LogoImage = styled('img')({
  marginBottom: '16px',
});

export const SlotImage = styled('img')({
  maxWidth: 326,
  marginBottom: '32px',
});

export const OpenGameButton = styled(MuiButton)<{ gradient: string }>(({ gradient }) => ({
  textTransform: 'uppercase',
  background: gradient,
  boxShadow: 'none',
  '&:hover': {
    background: gradient,
    boxShadow: 'none',
    opacity: 0.9,
  },
}));
