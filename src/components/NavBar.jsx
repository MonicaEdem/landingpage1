import { Menu, X, ShoppingBag } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const menuRef = useRef(null); // Reference for detecting clicks outside

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside); // For touch devices
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  const handleClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close menu on mobile when a link is clicked
  };

  return (
    <nav className="fixed w-full bg-white text-gray-900 py-4 px-6 lg:px-20 shadow-md z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={() => handleClick("home")}>
          {logo && <img src={logo} alt="logo" className="w-20 h-16" />}
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden block text-orange-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {[
            { name: "About", link: "about" },
            { name: "Products", link: "products" },
            { name: "Our Story", link: "about-innovator" },
            { name: "Contact Us", link: "contact" },
          ].map(({ name, link }) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => handleClick(link)}
              className={`text-lg font-medium transition ${
                activeLink === link
                  ? "text-green-500 font-semibold"
                  : "text-gray-700 hover:text-orange-400 active:text-green-500"
              }`}
            >
              {name}
            </a>
          ))}

          {/* Shop Now Button */}
          <button className="flex items-center gap-2 px-5 py-2 bg-green-500 rounded-full text-white hover:bg-orange-400 transition duration-300">
            <ShoppingBag className="size-5" /> Shop now
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-[#F8F8F8] py-6 flex flex-col items-center gap-6 transition-transform duration-300 shadow-lg rounded-b-lg"
        >
          {[
            { name: "About", link: "about" },
            { name: "Products", link: "products" },
            { name: "Our Story", link: "about-innovator" },
            { name: "Contact Us", link: "contact" },
          ].map(({ name, link }) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => handleClick(link)}
              className={`text-lg transition ${
                activeLink === link
                  ? "text-green-500 font-semibold"
                  : "text-gray-700 hover:text-orange-400 active:text-green-500"
              }`}
            >
              {name}
            </a>
          ))}

          {/* Shop Now Button in Mobile Menu */}
          <button className="w-11/12 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 rounded-full text-white hover:bg-orange-400 transition duration-300">
            <ShoppingBag className="size-5" /> Shop now
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
