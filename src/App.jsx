import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HamburgerMenu from './Menu';
import About from './About';
import ComingSoon from './ComingSoon';

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src={isMobile ? "/math_bg_phone.mp4" : "/math_bg.mp4"}
        type="video/mp4"
      />

      <HamburgerMenu />

      <div className="absolute top-0 left-0 z-10 text-white p-4">
        <h2 className="text-xl md:text-3xl font-medium mt-2 text-gray-300">
          SQA Math Animations
        </h2>
        <p className="text-xs md:text-lg mt-4">
          beautiful maths to shape beautiful minds
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}
