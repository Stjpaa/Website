import * as React from 'react';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigationbar } from '../Components/Navigationbar';
import { Home } from '../Pages/Home';
import { About } from '../Pages/About';
import { Projects } from '../Pages/Projects';

export const App = () => {

  return (
    <NextUIProvider theme={darkTheme}>
      <Navigationbar />
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>  
  );
};

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#444444',
      foreground: '#E6E8EB'
    }
  }
})

// color palette: https://www.canva.com/colors/color-palettes/dark-road-curve/
