import React from 'react';
import { BrowserRouter, Routes as Rts, Route } from "react-router-dom";

import Deitar from './pages/Deitar';
import Homepage from './pages/Homepage';
import MeliantList from './pages/MeliantList';
import Random from './pages/Random';

function Routes() {
  return(
    <BrowserRouter>
      <Rts>
        <Route path="/" element={<Deitar/>}>
          <Route path="/" element={<Homepage/>} />
          <Route path="/list/:value" element={<MeliantList/>} />
          <Route path="/random" element={<Random/>} />
        </Route>
      </Rts>
    </BrowserRouter>
  )
}

export default Routes;