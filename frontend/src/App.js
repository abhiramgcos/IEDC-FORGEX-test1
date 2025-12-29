import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventInfo from './components/EventInfo';
import Speakers from './components/Speakers';
import RSVPModal from './components/RSVPModal';
import Footer from './components/Footer';

function App() {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);

  const handleRSVPClick = () => {
    setIsRSVPModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsRSVPModalOpen(false);
  };

  return (
    <div className="App min-h-screen bg-black">
      <Navbar onRSVPClick={handleRSVPClick} />
      <Hero onRSVPClick={handleRSVPClick} />
      <EventInfo />
      <Speakers />
      <Footer />
      <RSVPModal isOpen={isRSVPModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;