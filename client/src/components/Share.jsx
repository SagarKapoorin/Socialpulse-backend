import { Facebook, Instagram, X, WhatsApp , } from '@mui/icons-material';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Divider, Icon, IconButton, useTheme } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FlexBetween from './FlexBetween';
const ShareC=()=>{
    const { palette } = useTheme();
    const main = palette.neutral.main;
    const primary = palette.primary.main;
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
        <IconButton>
        <WhatsApp sx={{ color: main }}/>
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ color: main }}/>
        <IconButton>
        <Facebook sx={{ color: main }}/>
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ color: main }}/>
        <IconButton>
        <X sx={{ color: main }}/>
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ color: main }}/>
        <IconButton>
        <Instagram sx={{ color: main }}/>
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ color: main }} />
        <IconButton>
        <TelegramIcon sx={{ color: main }}/>
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ color: main }} />
        <IconButton>
        <LinkedInIcon sx={{ color: main }}/>
        </IconButton>
        </FlexBetween>
      </Box>
  
    );
};
export default ShareC;