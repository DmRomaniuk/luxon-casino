import { styled } from '@mui/material/styles';
import { Box, Typography, Button as MuiButton } from '@mui/material';

export const CardContainer = styled(Box)<{ bordercolor: string }>(({ bordercolor }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  borderRadius: '16px',
  border: `1px dashed ${bordercolor}`,
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
}));

export const Logo = styled('img')({
  height: 80,
});

export const Title = styled(Typography)({
  color: 'white',
  fontFamily: '"SF Pro Display", "SF Pro", sans-serif',
  fontWeight: 860,
  fontSize: '32px',
  lineHeight: '40px',
  textAlign: 'center',
  marginTop: '24px',
});

export const Subtitle = styled(Typography)({
  color: 'rgba(255, 255, 255, 0.5)',
  fontFamily: '"SF Pro Display", "SF Pro", sans-serif',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
  textAlign: 'center',
});

export const InstallButton = styled(MuiButton)<{ gradient: string }>(({ gradient }) => ({
  width: 250,
  height: 56,
  borderRadius: '12px',
  padding: '8px 24px',
  gap: '8px',
  marginTop: '18px',
  fontFamily: '"SF Pro Display", "SF Pro", sans-serif',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
  background: gradient,
  boxShadow: 'none',
  '&:hover': {
    background: gradient,
    boxShadow: 'none',
    opacity: 0.9,
  },
}));

export const IconImage = styled('img')({
  width: 40,
  height: 40,
});
