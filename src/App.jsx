import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HamburgerMenu from './Menu';
import About from './About';
import ComingSoon from './ComingSoon';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-1000 relative">
      <HamburgerMenu />

      <div className="absolute top-0 left-0 z-10 text-white p-4">
        <h2 className="text-xl md:text-3xl font-medium mt-2 text-gray-300">
          Maths and Physics Tutoring
        </h2>

        <div className="mt-12 flex flex-col md:flex-row gap-10 items-start">
          {/* Left Card with Bigger Picture */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6 max-w-sm text-center">
            <img
              src="/Uwais.JPG"
              alt="Uwais - Tutor"
              className="w-55 h-55 rounded-full object-cover mx-auto mb-4"
            />
              <p className="text-white mb-2 font text-lg font-medium">
                IET Prize Winner — Top Graduate<br />
                First-Class Engineering Degree
              </p>
            <p className="text-gray-300 mb-2 text-lg font-medium">
              National 5 & Higher Maths and Physics
            </p>
            <p className="text-gray-300 mt-4 text-lg font-medium">
              Pricing: <br />
              £20/hour online<br />
              £25/hour in person
            </p>
            <div className="text-white mt-5 text-lg font-medium flex flex-col items-center gap-2">
            <p className="text-center">Get in touch:</p>
            <span className="flex items-center gap-2">
              <FaPhone className="text-gray-300" />
              07557051092
            </span>
            
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-gray-300" />
              uwaisdin7@gmail.com
            </span>
          </div>
          </div>

          {/* Right Animation Boxes Side by Side */}
          <div className="flex-1 flex flex-row gap-4">

            {/* Second Animation (Placeholder) */}
            <div className="bg-gray-900 rounded-2xl shadow-lg p-4 flex-1 h-80 md:h-150">
            <h3 className="text-white text-lg mb-2 text-center md:text-left">
                I am to provide a strong intuition and sound understanding
              </h3>
              <video
                className="w-full flex-2 rounded-lg object-cover"
                autoPlay
                loop  
                muted
                playsInline
                src="/ymxc.mp4"
              />
            </div>
          </div>
        </div>
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
