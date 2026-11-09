import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import useScrolled from '../hooks/useScrolled.js';
import { workCategories } from '../data/navigation.js';

const navLinkClass = ({ isActive }) =>
  `nav-link${isActive ? ' active' : ''}`;

export default function Navbar() {
  const scrolled = useScrolled();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  // Close both menus whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname, location.search]);

  // Close the dropdown when clicking anywhere outside it.
  useEffect(() => {
    if (!dropdownOpen) return undefined;

    const onPointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [dropdownOpen]);

  // Escape closes whichever menu is open.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const isWorkActive = location.pathname === '/work';
  const dropdownButtonClass = [dropdownOpen ? 'open' : '', isWorkActive ? 'active' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo" onClick={closeMenus}>
          Al<span>Daniel</span>.
        </Link>

        <nav
          id="navLinks"
          className={`nav-links${menuOpen ? ' open' : ''}`}
          aria-label="Primary"
        >
          <NavLink to="/" end className={navLinkClass} onClick={closeMenus}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeMenus}>
            About
          </NavLink>
          <NavLink to="/skills" className={navLinkClass} onClick={closeMenus}>
            Skills
          </NavLink>

          <div className="dropdown" ref={dropdownRef}>
            <button
              type="button"
              id="dropdownBtn"
              className={dropdownButtonClass}
              onClick={() => setDropdownOpen((open) => !open)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-controls="dropdownMenu"
            >
              My Work <span className="arrow">▼</span>
            </button>
            <ul
              id="dropdownMenu"
              className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}
            >
              {workCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={category.to}
                    className="nav-link"
                    onClick={closeMenus}
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <NavLink to="/contact" className={navLinkClass} onClick={closeMenus}>
            Contact
          </NavLink>
        </nav>

        <button
          type="button"
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="navLinks"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
