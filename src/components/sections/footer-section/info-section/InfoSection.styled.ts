import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const InfoContainer = styled(Box)({
  display: 'flex',
  width: '100%',
});

export const InfoItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const IconImage = styled('img')({
  width: 58,
  height: 58,
});

export const InfoText = styled(Typography)({
  color: '#FBFBFBB2',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
});
