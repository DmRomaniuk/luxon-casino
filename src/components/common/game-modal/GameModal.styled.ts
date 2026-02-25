import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';

export const Overlay = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  zIndex: 9999,
  display: 'flex',
  flexDirection: 'column',
});

export const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: 8,
  backgroundColor: '#1a1a1a',
});

export const CloseButton = styled(IconButton)({
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export const GameContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1),
  boxSizing: 'border-box',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
  },
}));

export const GameIframe = styled('iframe')({
  width: '100%',
  height: '100%',
  border: 'none',
  borderRadius: 8,
});
