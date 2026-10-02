import { Box, Container, Grid, Typography, Button } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import DownloadIcon from '@mui/icons-material/Download';

function About() {
    return <Box sx={{ backgroundColor: '#1abc9c',  display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem', py: 10 }}>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '70%', gap: '1.5rem' }}>
            <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>ABOUT</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                <Box sx={{ backgroundColor: "white", width: 100, height: 4, borderRadius: 5 }} />
                <StarIcon sx={{ color: 'white', fontSize: 35 }} />
                <Box sx={{ backgroundColor: "white", width: 100, height: 4, borderRadius: 5 }} />
            </Box>
            <Grid container spacing={4}>
                <Grid item sm={12} md={6}>
                    <Typography variant='p' sx={{ color: 'white', fontSize: 18, textAlign: 'justify' }}>
                        Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Typography variant='p' sx={{ color: 'white', fontSize: 18, textAlign: 'justify' }}>
                        You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                    </Typography>

                </Grid>
            </Grid>
<Button variant='outlined' startIcon={<DownloadIcon style={{ fontSize: '1.5rem' }} />} sx={{color: 'white' ,'&:hover':{backgroundColor: 'white', color: '#1abc9c', borderColor: 'white'} , px: 5 , py: 3, borderRadius: 2, fontSize: '1.2rem', borderColor: 'white', textTransform: 'none' }}>Free Download</Button>
        </Container>
    </Box>
}
export default About;