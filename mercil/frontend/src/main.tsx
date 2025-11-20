import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Tester from './pages/tester.tsx';
import ShowDetail from './components/ShowDetail.tsx'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tester" element={<Tester />} />
        <Route path="/detail/:id" element={<ShowDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);