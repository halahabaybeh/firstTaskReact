import { Box, Container, Grid, Typography, Button, TextField } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

function ContactMe() {
  return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , py:10}}>
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='h2' sx={{ color: '#2c3e50', textTransform: 'uppercase', fontWeight: 'bold' }}>Contact Me</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
        <Box sx={{ backgroundColor: "#2c3e50", width: 100, height: 4, borderRadius: 5 }} />
        <StarIcon sx={{ color: '#2c3e50', fontSize: 35 }} />
        <Box sx={{ backgroundColor: "#2c3e50", width: 100, height: 4, borderRadius: 5 }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', width: '50%' }}>
        <TextField variant="standard"
          label="Full Name"
          InputLabelProps={{
            sx: {
              color: 'gray',
              fontSize: 20,
              '&.Mui-focused': { color: 'gray', fontSize: 18 } // تغيير لون الليبل عند الضغط ليتناسق مع الخط
            }
          }}
          sx={{
            // 1. مسافة بين النص والخط + تغيير لون الخط العادي (قبل الضغط)
            '& .MuiInput-root': {
              pb: 2,
              '&:before': {
                borderBottom: '0.5px solid gray', // لون وسُمك الخط في الحالة العادية
              },
            },
            // 2. لون وسُمك الخط عند التركيز/الضغط (Focus)
            '& .MuiInput-root:after': {
              borderBottom: '2px solid #1abc9c',
            },
          }}
        />
        <TextField variant="standard"
          label="Email address"
          InputLabelProps={{
            sx: {
              color: 'gray',
              fontSize: 20,
              '&.Mui-focused': { color: 'gray', fontSize: 18 } // تغيير لون الليبل عند الضغط ليتناسق مع الخط
            }
          }}
          sx={{
            // 1. مسافة بين النص والخط + تغيير لون الخط العادي (قبل الضغط)
            '& .MuiInput-root': {
              pb: 2,
              '&:before': {
                borderBottom: '0.5px solid gray', // لون وسُمك الخط في الحالة العادية
              },
            },
            // 2. لون وسُمك الخط عند التركيز/الضغط (Focus)
            '& .MuiInput-root:after': {
              borderBottom: '2px solid #1abc9c',
            },
          }}
        />
         <TextField variant="standard"
          label="Phone Number"
          InputLabelProps={{
            sx: {
              color: 'gray',
              fontSize: 20,
              '&.Mui-focused': { color: 'gray', fontSize: 18 } 
            }
          }}
          sx={{
            '& .MuiInput-root': {
              pb: 2,
              '&:before': {
                borderBottom: '0.5px solid gray', 
              },
            },
            '& .MuiInput-root:after': {
              borderBottom: '2px solid #1abc9c',
            },
          }}
        />
          <TextField
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="standard"
           InputLabelProps={{
            sx: {
              color: 'gray',
              fontSize: 20,
              '&.Mui-focused': { color: 'gray', fontSize: 18 } 
            }
          }}
          sx={{
            '& .MuiInput-root': {
              pb: 2,
              '&:before': {
                borderBottom: '0.5px solid gray', 
              },
            },
            '& .MuiInput-root:after': {
              borderBottom: '2px solid #1abc9c',
            },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
          <Button variant="contained" sx={{ backgroundColor: '#1abc9c', color: 'white', textTransform: 'capitalize', fontSize: 20, '&:hover': { backgroundColor: '#16a085' } }}>Send</Button>
        </Box>

      </Box>
    </Container>



  </Box>
}

export default ContactMe;