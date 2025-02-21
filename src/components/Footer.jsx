import React from "react";
import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.svg";
import Tiktok from "../assets/images/tiktok.svg";
import Linkedin from "../assets/images/linkedin.svg";
import Twitter from "../assets/images/twitterx.svg";
import { Phone, Mail } from "lucide-react";
import logo from "../assets/images/logo.png";

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
    <footer className="bg-[#1A1A1A] text-[#E0E0E0]" id="contact">
      <div className="container mx-auto px-6 py-12 lg:px-20 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <img src={logo} alt="logo" className="mb-4 w-24 h-24" />
            <p className="text-green-500 text-base leading-relaxed max-w-xs">
              Motto of the business
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-[#E0E0E0] hover:text-orange-400 transition-colors duration-300">About</a></li>
              <li><a href="#products" className="text-[#E0E0E0] hover:text-orange-400 transition-colors duration-300">Products</a></li>
              <li><a href="#about-innovator" className="text-[#E0E0E0] hover:text-orange-400 transition-colors duration-300">Our Story</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Contact Us</h3>
            <div className="flex items-center space-x-3 mb-2">
              <Phone className="w-5 h-5 text-green-500" />
              <a href={`tel:${footerData.phoneNumber}`} className="text-[#E0E0E0] hover:text-orange-400 transition-colors duration-300">
                {footerData.phoneNumber}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-green-500" />
              <a href={`mailto:${footerData.email}`} className="text-[#E0E0E0] hover:text-orange-400 transition-colors duration-300">
                {footerData.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Stay in Touch</h3>
            <div className="flex space-x-4">
              <a href={footerData.facebookLink}><img src={Facebook} alt="Facebook" className="w-10 transition-transform hover:scale-110" /></a>
              <a href={footerData.instagramLink}><img src={Instagram} alt="Instagram" className="w-10 transition-transform hover:scale-110" /></a>
              <a href={footerData.tiktokLink}><img src={Tiktok} alt="Tiktok" className="w-9 transition-transform hover:scale-110" /></a>
              <a href={footerData.linkedinLink}><img src={Linkedin} alt="Linkedin" className="w-10 transition-transform hover:scale-110" /></a>
              <a href={footerData.twitterLink}><img src={Twitter} alt="Twitter" className="w-9 transition-transform hover:scale-110" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1A1A1A]">
        <hr className="border-[#444] my-4 mr-6 ml-6" />
        <p className="text-center text-sm text-green-500 py-4">
          © {new Date().getFullYear()} Helicimush. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
