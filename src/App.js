import React, { useState, useEffect, useRef } from 'react';

import WinXP from 'WinXP';
import LoadingScreen from 'components/Loading/LoadingScreen'; // Boot screen
import Login from 'components/Loading/Login'; // Login screen
import startupSound from 'assets/startup.mp3';

const App = () => {
  const [step, setStep] = useState('BOOT'); // BOOT, LOGIN, DESKTOP
  const audioRef = useRef(new Audio(startupSound));

  useEffect(() => {
    // Simulate boot time
    if (step === 'BOOT') {
      const timer = setTimeout(() => {
        setStep('LOGIN');
      }, 3000); // 3s boot
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleLogin = () => {
    // Play sound and go to desktop
    audioRef.current.play().catch(e => console.error('Audio play failed', e));
    setStep('DESKTOP');
  };

  const handleTurnOff = () => {
    // Go back to boot screen (or actually reload, but state reset is smoother)
    setStep('BOOT');
  };

  if (step === 'BOOT') return <LoadingScreen />;
  if (step === 'LOGIN') return <Login onLogin={handleLogin} onTurnOff={handleTurnOff} />;
  return <WinXP onShutdown={handleTurnOff} />;
};

export default App;
