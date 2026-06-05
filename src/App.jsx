import { useEffect } from 'react';
import './App.css'

import Lenis from 'lenis';
import PhoneScene from './components/model3d/PhoneScene';
import Navbar from './components/shared/Navbar';
import Landing from './pages/Landing';
import Property from './pages/Property';
import Loading from './components/shared/Loading';



function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <div className='w-screen min-h-[500vh] relative bg-[#f5f5f5] '>
      <Loading/>
      <Navbar/>
      <PhoneScene />
      <Landing/>
      <Property/>

    </div>
  )
}

export default App
