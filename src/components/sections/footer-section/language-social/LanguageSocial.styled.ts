import { styled } from '@mui/material/styles';
import { Box, Select } from '@mui/material';

export const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'align',
})<{ align: 'end' | 'center' }>(({ theme, align }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: align === 'end' ? 'flex-end' : 'center',
  justifyContent: 'flex-start',
  gap: '32px',
  flex: 1,
  marginLeft: align === 'end' ? 'auto' : 0,
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'space-between',
    gap: 0,
  },
}));

export const StyledSelect = styled(Select)({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  color: 'rgba(255, 255, 255, 0.5)',
  width: 289,
  height: 56,
  borderRadius: '8px',
  fontFamily: '"SF Pro", "SF Pro Display", sans-serif',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
  '& .MuiSelect-select': {
    padding: '16px 12px',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '40px !important',
  },
  '& .MuiSelect-icon': {
    color: 'rgba(255, 255, 255, 0.5)',
    right: '12px',
    fontSize: '24px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: '1px',
    borderStyle: 'solid',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: '1px',
  },
});

export const SocialSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'align',
})<{ align: 'end' | 'center' }>(({ align }) => ({
  textAlign: align === 'end' ? 'right' : 'center',
}));

export const SocialIconsRow = styled(Box)({
  display: 'flex',
  gap: '4px',
});

export const SocialIcon = styled('img')({
  width: 52,
  height: 52,
  cursor: 'pointer',
});

export const FlagIcon = styled(Box)({
  width: 24,
  height: 24,
  borderRadius: '50%',
  overflow: 'hidden',
  backgroundSize: 'cover',
});

export const MenuItemContent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});
