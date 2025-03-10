import { Menu, X, ShoppingBag } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { fetchData } from "../api/Api";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [link, setLink] = useState("#");
  const [imageUrl, setImageUrl] = useState("");

  const sections = [
    { name: "About", link: "about" },
    { name: "Products", link: "products" },
    { name: "Our Story", link: "about-innovator" },
    { name: "Contact Us", link: "contact" },
  ];

  useEffect(() => {
    fetchData("Sheet1!A1:B100")
      .then((responseData) => {
        const dataMap = {};
        responseData.forEach((row) => {
          if (row.length >= 2) {
            dataMap[row[0]] = row[1];
          }
        });

        if (dataMap["Navbar logo url"]?.startsWith("http")) {
          setImageUrl(dataMap["Navbar logo url"]);
        }

        setLink(dataMap["Shop Button"] || "#");
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      sections.forEach(({ link }) => {
        const element = document.getElementById(link);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
            currentSection = link;
          }
        }
      });

      const footer = document.getElementById("contact");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (
          window.innerHeight + window.scrollY >= document.body.offsetHeight - 10 ||
          (footerRect.top <= window.innerHeight * 0.5 && footerRect.bottom >= 0)
        ) {
          currentSection = "contact";
        }
      }

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);

    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: link === "contact" ? "end" : "start" });

      if (link === "contact") {
        setTimeout(() => setActiveLink("contact"), 300);
      }
    }
  };

  return (
    <nav className="fixed w-full bg-white text-gray-900 py-4 px-6 lg:px-20 shadow-md z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={() => handleClick("home")}>
          {imageUrl && <img src={imageUrl} alt="logo" className="w-20 h-16" />}
        </a>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="lg:hidden block text-orange-400"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {sections.map(({ name, link }) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link);
              }}
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
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-green-500 rounded-full text-white hover:bg-orange-400 transition duration-300"
          >
            <ShoppingBag className="size-5" /> Shop now
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute top-full left-0 w-full bg-[#F8F8F8] py-6 flex flex-col items-center gap-6 transition-transform duration-300 shadow-lg rounded-b-lg"
        >
          {sections.map(({ name, link }) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link);
              }}
              className={`text-lg transition ${
                activeLink === link
                  ? "text-green-500 font-semibold"
                  : "text-gray-700 hover:text-orange-400 active:text-green-500"
              }`}
            >
              {name}
            </a>
          ))}

          {/* Shop Now Button (Mobile) */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11/12 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 rounded-full text-white hover:bg-orange-400 transition duration-300"
          >
            <ShoppingBag className="size-5" /> Shop now
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
