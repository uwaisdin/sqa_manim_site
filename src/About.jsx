import { useState, useEffect } from 'react';
import HamburgerMenu from './Menu';

export default function About() {
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
        src={isMobile ? "/ymxc.mp4" : "/ymxc.mp4"}
        type="video/mp4"
      />

      <HamburgerMenu />

      <div className="absolute top-0 left-0 z-10 text-white p-6 max-w-md">
        <h1 className="text-2xl font-semibold text-gray-300 mb-4">About Us</h1>
        <p className="text-base leading-relaxed text-gray-200">
          Hi, I am Uwais. The creator of this platform. My sole goal in life
           is to try to make the world a better place. I think maths is the most
           power tool us humans have access to, and I want to make it
           accessible for all.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          This page works seamlessly on desktop and mobile devices.
        </p>
      </div>
    </div>
  );
}
