import CssBaseline from "@mui/material/CssBaseline";
import About from "./component/about/About";
import ContactMe from "./component/contactMe/ContactMe";
import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Portfoilo from "./component/portfoilo/Portfoilo";
import { createTheme, ThemeProvider } from '@mui/material/styles';
function App() {

  const theme = createTheme({
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
  });
  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Portfoilo />
      <About />
      <ContactMe />
      <Footer />

    </ThemeProvider>


  </>

}

export default App;