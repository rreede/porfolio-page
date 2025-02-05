import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Project from './components/Project.tsx';
import ProductView from './components/ProductView.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/project" element={<Project />} />
          <Route path="/product/:id" element={<ProductView/>}/>
        </Routes>
  </BrowserRouter>
  </StrictMode>,
)
