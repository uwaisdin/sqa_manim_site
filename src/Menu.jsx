import { useState } from 'react';
import { Link } from 'react-router-dom';

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleEnter = () => setHovering(true);
  const handleLeave = () => {
    setTimeout(() => setHovering(false), 200);
  };

  const toggleClick = () => setMenuOpen(!menuOpen);
  const isOpen = menuOpen || hovering;

  return (
    <div
      className="absolute top-0 right-0 z-30 p-6 text-white"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Hamburger + Menu text */}
      <div
        onClick={toggleClick}
        className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="flex flex-col justify-center space-y-1.5">
          <span className="block w-7.5 h-0.5 bg-white rounded-full transition-all"></span>
          <span className="block w-7.5 h-0.5 bg-white rounded-full transition-all"></span>
        </div>

        {/* Hide "Menu" text on small screens */}
        <span className="hidden sm:inline text-xl font-medium tracking-wide">
          Menu
        </span>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-6 mt-3 bg-white text-black rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-out origin-top-right
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
        `}
        style={{ minWidth: '180px' }}
      >
        <ul className="py-3 px-5 space-y-3 text-right">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-600 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-600 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/ComingSoon"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-600 transition"
            >
              National 5
            </Link>
          </li>
          {/* Add more links here if needed */}
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;

