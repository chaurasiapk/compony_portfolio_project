import React from 'react';
import { NavBar } from './components/navbar/navBar';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { Team } from './components/team/team'; 
import { Testimonials } from './components/testimonials/testimonials';
import { Contact } from './components/contact/contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Home />
      <Services />
      <Team />
      <Testimonials />
      <Contact/>
    </div>
  );
}

export default App;
