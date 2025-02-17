import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const logo = "logo.png"; 

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="fixed w-full bg-white py-4 px-6 lg:px-20 shadow-md z-50">
      <div className="flex items-center justify-between">
        <a href="#home" onClick={() => handleClick("home")}>
          {logo && <img src={logo} alt="logo" className="w-44 h-auto" />}
        </a>

        <button
          className="lg:hidden block text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X /> : <Menu size={24} />}
        </button>

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
              className={`text-gray-700 transition ${
                activeLink === link ? "text-green-600" : "hover:text-green-600"
              }`}
            >
              {name}
            </a>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-start mt-4 gap-4 lg:hidden transition-transform duration-300 ease-in-out transform">
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
              className={`text-gray-700 transition ${
                activeLink === link ? "text-green-600" : "hover:text-green-600"
              }`}
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
