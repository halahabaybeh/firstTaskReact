import { Box, Container, Grid, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import img1 from '../../assets/cabin.png';
import img2 from '../../assets/cake.png';
import img3 from '../../assets/circus.png';
import img4 from '../../assets/game.png';
import img5 from '../../assets/safe.png';
import img6 from '../../assets/submarine.png';

const portfolioImg = [img1, img2, img3, img4, img5, img6];

function Portfoilo() {

  return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginBottom: '2rem'}}>
    <Container sx={{ margin: "0 auto", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h2" sx={{ color: '#2c3e50', fontWeight: 'bold', textTransform: 'uppercase' }}>PORTFOLIO</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
        <Box sx={{ backgroundColor: "#2c3e50", width: 100, height: 4, borderRadius: 5 }} />
        <StarIcon sx={{ color: '#2c3e50', fontSize: 35 }} />
        <Box sx={{ backgroundColor: "#2c3e50", width: 100, height: 4, borderRadius: 5 }} />
      </Box>
      <Grid container spacing={4} >
        {portfolioImg.map((img, index) => {
          return <Grid item sm={12} md={6} lg={4} key={index}>
            <Box sx={{
              position: 'relative', overflow: 'hidden', cursor: 'pointer', borderRadius: 5, transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
              }
            }}>
              <Box component="img" src={img} alt={`Portfolio ${index + 1}`} sx={{ width: '100%', height: 'auto', display: 'block' }} />
            </Box>
          </Grid>


        })
        }


      </Grid>


    </Container>
  </Box>
}
export default Portfoilo;