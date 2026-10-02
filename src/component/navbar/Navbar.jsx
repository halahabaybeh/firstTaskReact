import {Box , List, ListItem , Link , Container} from '@mui/material';

function Navbar(){

return <Box sx={{backgroundColor: '#2c3e50', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0,  zIndex: 9999, width: '100%' }}>
   <Container sx={{margin:'0 auto' ,display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem'}}>
         <Link href="#" underline='none' sx={{ fontSize: '2rem', fontWeight: 'bold', color:'white' , textTransform: 'uppercase' }}>Start Bootstrap</Link>
         <List sx={{display:'flex', gap:'2rem' , justifyContent: 'center', alignItems: 'center'  }}>
            <ListItem disablePadding ><Link href="#portfolio" underline='none'  sx={{listStyle: 'none', color: 'white' , textTransform: 'uppercase' , fontWeight:'bold' }}>portfolio</Link></ListItem>
            <ListItem disablePadding><Link href="#about" underline='none' sx={{listStyle: 'none', color: 'white' , textTransform: 'uppercase' , fontWeight:'bold'}}>about</Link></ListItem>
            <ListItem disablePadding><Link href="#contact" underline='none' sx={{listStyle: 'none', color: 'white' , textTransform: 'uppercase' ,fontWeight:'bold' }}>contact</Link></ListItem>
         </List>
       
   </Container>
       </Box>

}
export default Navbar;