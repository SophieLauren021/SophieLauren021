import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Alunos from './Alunos';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Routes>
      <Route path='/alunos' element={<Alunos/>}/>
    </Routes>
     </BrowserRouter>
  </React.StrictMode>
);
