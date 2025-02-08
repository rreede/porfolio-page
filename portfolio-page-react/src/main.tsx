import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Project from './components/Project.tsx';
import ProductView from './components/ProductView.tsx';
import Favorites from './components/Favorites.tsx';
import CheckoutView1 from './components/Checkout-view-1.tsx';
import CheckoutView2 from './components/Checkout-view-2.tsx';
import CheckoutView3 from './components/Checkout-view-3.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/project" element={<Project />} />
          <Route path="project/product/:id" element={<ProductView/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="project/checkout-1" element={<CheckoutView1/>}/>
          <Route path="project/checkout-2" element={<CheckoutView2/>}/>
          <Route path="project/checkout-3" element={<CheckoutView3/>}/>
        </Routes>
  </BrowserRouter>
  </StrictMode>,
)
