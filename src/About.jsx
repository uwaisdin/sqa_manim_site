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
    <div className="relative min-h-screen w-full bg-gray-1000 flex flex-col items-start p-6 gap-8">
      <HamburgerMenu />

      {/* Title in top-left */}
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-300">
        About Me
      </h1>

      {/* Paragraph left-aligned, wider */}
      <p className="text-sm md:text-lg leading-relaxed text-gray-200 max-w-5xl">
        I’m Uwais, an Electronic and Electrical Engineering graduate with a passion for sharing the beauty of mathematics and physics. Over the years, I’ve helped students gain confidence and clarity in their studies, turning complex concepts into engaging, intuitive lessons. My teaching blends rigorous understanding with visual and creative methods, ensuring that every student not only solves problems but truly understands the underlying ideas. When I’m not tutoring, I enjoy exploring science, philosophy, and the way the world works — and I bring that curiosity into every lesson. My goal is to inspire a love for learning, nurture critical thinking, and help students unlock their full potential.
      </p>

      {/* Animation / Video Box */}
      <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
        <video
          className="w-full h-auto max-h-[325px] md:max-h-[425px] object-contain rounded-2xl"
          autoPlay
          loop
          muted
          playsInline
          src="/math_bg.mp4"
          type="video/mp4"
        />
      </div>
    </div>
  );
}
