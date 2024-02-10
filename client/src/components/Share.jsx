import { Facebook, Instagram, X, WhatsApp , } from '@mui/icons-material';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Divider, Icon, IconButton, useTheme } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FlexBetween from './FlexBetween';
import { blue } from '@mui/material/colors';
const ShareC=()=>{
    const { palette } = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;
    const shareOnX = () => {
      const currentUrl = encodeURIComponent(window.location.href);
    const twitterUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=Check out this awesome website!`;
    window.open(twitterUrl, '_blank');
    };
    const shareOnFacebook=()=>{
      const websiteUrl = encodeURIComponent(window.location.href);
      const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteUrl)}`;
      window.open(facebookShareLink, '_blank');
    }
    const shareOnInstagram=()=>{
      const photoUrl = encodeURIComponent('https://example.com/photo.jpg');
      const caption = encodeURIComponent('Check out this awesome photo!');
      const instagramUrl = `https://www.instagram.com/`;
    window.open(instagramUrl, '_blank');
    }
    const shareOnWhatsapp=()=>{
      const message = encodeURIComponent('Check out this awesome website!');
  const whatsappUrl = `https://wa.me/?text=${message}`;
  window.open(whatsappUrl, '_blank');
    }
    const shareOnTelegram=()=>{
      const websiteUrl = encodeURIComponent(window.location.href);
      const telegramShareLink = `https://t.me/share/url?url=${encodeURIComponent(websiteUrl)}`;
      window.open(telegramShareLink, '_blank');
    }
    const shareOnLinkedIn=()=>{
      const currentUrl = encodeURIComponent(window.location.href);
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
    window.open(linkedInUrl, '_blank');
    }
    return(
        <Box
        sx={{
          borderColor: 'divider',
          bgcolor: {primary},
          color: {main},
          width:"0px",
          '& svg': {
            m: 0.9,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        
        <FlexBetween  mt="0.25rem" gap="0.3rem">
        <IconButton onClick={shareOnWhatsapp}>
        <WhatsApp sx={{ color: "#25d366" }}/>
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ color: main }}/>
        <IconButton onClick={shareOnFacebook}>
        <Facebook sx={{ color: "#316FF6" }}/>
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ color: main }}/>
        <IconButton onClick={shareOnX}>
        <X sx={{ color: main }}/>
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ color: main }}/>
        <IconButton onClick={shareOnInstagram}>
        <Instagram sx={{ color: "#d62976" }}/>
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ color: main }} />
        <IconButton onClick={shareOnTelegram}>
        <TelegramIcon sx={{ color: "#0088cc" }}/>
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ color: main }} />
        <IconButton onClick={shareOnLinkedIn}>
        <LinkedInIcon sx={{ color: "#0A66C2" }}/>
        </IconButton>
        </FlexBetween>
      </Box>
  
    );
};
export default ShareC;