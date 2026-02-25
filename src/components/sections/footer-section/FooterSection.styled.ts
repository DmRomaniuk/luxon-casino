import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to left, #06225D 0%, #02011F 25%)',
  padding: theme.spacing(3, 2),
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3, 3),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3, 4),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(7.5, 4),
  },
}));

export const DesktopLayout = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    alignItems: 'stretch',
    gap: theme.spacing(3),
  },
  [theme.breakpoints.up('xl')]: {
    gap: theme.spacing(5),
  },
}));

export const MobileLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

export const PokerManImage = styled('img')({
  width: 288,
  height: 288,
  flexShrink: 0,
  alignSelf: 'center',
});
