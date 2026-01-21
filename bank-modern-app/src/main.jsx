import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import OurStory from './components/pages/OurStory.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/our-story' element={<OurStory />} />
      </Routes>
    </BrowserRouter>
  </>
);