import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Site from "./Site/home.jsx"; 
import PagePlanos from "./Site/planos.jsx";
import PageGaleria from "./Site/galeria.jsx";
import Conheca from "./Site/conheca.jsx";


function App() {
  return (
    <BrowserRouter  basename="/Site-Maps">
      <Routes>
      <Route path='/' element={<Site />} />
      <Route path='/planos' element={<PagePlanos/>}/>
      <Route path='/galeria' element={<PageGaleria/>}/>
      <Route path='/trafegopago' element={<Conheca/>}/>
      </Routes>
    </BrowserRouter>
  );
  
}


export default App;