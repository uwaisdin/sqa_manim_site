import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside); // For mobile

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const toggleClick = () => setMenuOpen(!menuOpen);

  return (
    <div
      ref={menuRef}
      className="absolute top-0 right-0 z-30 p-6 text-white"
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

        <span className="hidden sm:inline text-xl font-medium tracking-wide">
          Menu
        </span>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-6 mt-3 bg-white text-black rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-out origin-top-right
          ${menuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
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
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;

