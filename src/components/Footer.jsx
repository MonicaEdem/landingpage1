import React from "react";
import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.svg";
import Tiktok from "../assets/images/tiktok.svg";
import Linkedin from "../assets/images/linkedin.svg";
import Twitter from "../assets/images/twitterx.svg";
import { Phone, Mail } from "lucide-react";
import logo from "../assets/images/footerLogo1.png";

const Footer = () => {
  const footerData = {
    phoneNumber: "+233550420351",
    email: "bridgetkudoagbo@gmail.com",
    facebookLink: "https://facebook.com",
    instagramLink: "https://instagram.com",
    tiktokLink: "https://tiktok.com",
    linkedinLink: "https://linkedin.com",
    twitterLink: "https://twitter.com",
  };

  return (
    <footer className="bg-[#222222] text-white py-12" id="contact">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center lg:text-left">
          
          {/* Logo & Motto */}
          <div className="flex flex-col items-center lg:items-start">
            <img src={logo} alt="logo" className="mb-4 w-24 h-24 shadow-lg" />
            <p className="text-green-500 text-lg leading-loose max-w-xs text-center lg:text-left">
              Sustainable Living, Inspired by Nature
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2 text-lg">
              <li><a href="#about" className="hover:text-green-500 transition duration-300">About</a></li>
              <li><a href="#products" className="hover:text-green-500 transition duration-300">Products</a></li>
              <li><a href="#about-innovator" className="hover:text-green-500 transition duration-300">Our Story</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Contact Us</h3>
            <div className="flex items-center space-x-3 mb-2  text-lg">
              <Phone className="w-5 h-5 text-green-500" />
              <a href={`tel:${footerData.phoneNumber}`} className="hover:text-green-500 transition duration-300">
                {footerData.phoneNumber}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-green-500" />
              <a href={`mailto:${footerData.email}`} className="hover:text-green-500 transition duration-300">
                {footerData.email}
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center lg:items-start justify">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Stay in Touch</h3>
            <div className="flex space-x-4">
              {[{ link: footerData.facebookLink, img: Facebook },
                { link: footerData.instagramLink, img: Instagram },
                { link: footerData.tiktokLink, img: Tiktok },
                { link: footerData.linkedinLink, img: Linkedin },
                { link: footerData.twitterLink, img: Twitter }].map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                  <img src={social.img} alt="Social Media" className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Helicimush. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
