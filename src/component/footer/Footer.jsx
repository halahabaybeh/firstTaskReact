import { Box, Button, Container, Typography, Grid } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return <Box sx={{ backgroundColor: '#2c3e50', color: 'white', textAlign: 'center', pt: 10 }}>

      <Grid container spacing={4} sx={{margin:'0 auto', width:'80%'}}>
        <Grid Item sm={12} md={6} lg={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1 , color: 'white', textAlign: 'center', py: 2 }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Location</Typography>
        <Typography variant='body1'>2215 John Daniel Drive
        </Typography>
        <Typography variant='body1'>Clark, MO 65243</Typography>
      </Box>
    </Grid>
    <Grid Item sm={12} md={6} lg={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1 , color: 'white', textAlign: 'center', py: 2}}>
        <Typography variant='h6' sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Around the Web</Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
          <FacebookIcon sx={{ color: 'white', fontSize: 30, cursor: 'pointer' }} />
          <TwitterIcon sx={{ color: 'white', fontSize: 30, cursor: 'pointer' }} />
          <LinkedInIcon sx={{ color: 'white', fontSize: 30, cursor: 'pointer' }} />
          <LinkedInIcon sx={{ color: 'white', fontSize: 30, cursor: 'pointer' }} />
        </Box>
      </Box>
</Grid>
<Grid Item sm={12} md={6} lg={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1,  color: 'white', textAlign: 'center', py: 2  }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>About Freelancer</Typography>
        <Typography variant='body1'>Freelance is a free to use, MIT licensed Bootstrap theme created by
        <Typography variant='p' component='span' sx={{ color: '#3498db', textDecoration: 'underline' , p:1, cursor: 'pointer'}} >Start Bootstrap</Typography>
        </Typography>
       
      </Box>
      </Grid>
</Grid>
 <Box variant='p' sx={ {backgroundColor:'#1a252f' , display:'flex', justifyContent:'center', alignItems:'center' , p:3}} >Copyright © Your Website 2023</Box>
  </Box >
}
export default Footer;