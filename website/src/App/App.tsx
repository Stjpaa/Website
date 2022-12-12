import { NextUIProvider, createTheme } from '@nextui-org/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigationbar } from '../Components/Navigationbar';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { Projects } from '../Pages/Projects';
import { Games } from '../Pages/Games';
import { Software } from '../Pages/Software';

export const App = () => {

  return (
    <NextUIProvider theme={darkTheme}>
      <Navigationbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<div> <Projects /> <Games /> </div>} />
          <Route path="/projects/games" element={<div> <Projects /> <Games /> </div>} />
          <Route path="/projects/software" element={<div> <Projects /> <Software /> </div>} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>  
  );
};

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primaryLight: '#2B2F31',
      primaryLightHover: '#313538',
      primaryLightActive: '#3A3F42',
      primaryLightContrast: '#697177',
      primary: '#697177',
      primaryBorder: '#4C5155',
      primaryBorderHover: '#697177',
      primarySolidHover: '#787F85',
      primarySolidContrast: '#ffffff',
      background: '#2B2F31',
      selection: '#9BA1A6'
    },
    fonts: {
      
    }
  },
})

// color palette: https://www.canva.com/colors/color-palettes/dark-road-curve/
