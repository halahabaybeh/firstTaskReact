import { Avatar, Box, Container, Typography } from "@mui/material";
import avatarImg from '../../assets/avatars.svg';
import StarIcon from '@mui/icons-material/Star';
function Hero() {

  return <Box sx={{ backgroundColor: '#1abc9c', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
      <Avatar alt="Avataar" src={avatarImg} sx={{ width: 200, height: 200 }} />
      <Typography variant="h1" sx={{ color: 'white', textTransform: 'uppercase', fontWeight: 'bold', fontSize: '4rem' }}>start bootstrap</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , padding: '1rem' , gap : '1rem' }} >
        <Box sx={{ width: 100, height: 4, backgroundColor: 'white', borderRadius: 5 }} />
        <StarIcon sx={{ color: 'white', fontSize: 35 }} />
        <Box sx={{ width: 100, height: 4, backgroundColor: 'white', borderRadius: 5 }} />
      </Box>
      <Typography variant="h5" sx={{color:'white', fontSize: '1.25rem'}}>Graphic Artist - Web Designer - Illustrator</Typography>
    </Container>
  </Box>

}

export default Hero;