import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Audio from './Audio';
import Contact from './Contact';
import Home from './Home';
import Videos from './Videos';
import './index.css';
import { LanguageProvider } from './LanguageContext';
import Page from './Page';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Page>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="audio" element={<Audio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="videos" element={<Videos />} />
          </Routes>
        </Page>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
