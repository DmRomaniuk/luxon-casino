import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import type { GameModalProps } from './GameModal.types';
import { Overlay, Header, CloseButton, GameContent, GameIframe } from './GameModal.styled';

export const GameModal = ({ open, onClose, gameUrl }: GameModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <Overlay>
      <Header>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </Header>
      <GameContent>
        <GameIframe src={gameUrl} allow="fullscreen" title="Casino Game" />
      </GameContent>
    </Overlay>
  );
};
