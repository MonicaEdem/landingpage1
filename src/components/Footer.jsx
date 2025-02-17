import React from "react";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Tiktok from "../assets/tiktok.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitterx.svg";

import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const footerData = {
    phoneNumber: "+1234567890",
    email: "info@example.com",
    facebookLink: "https://facebook.com",
    instagramLink: "https://instagram.com",
    tiktokLink: "https://tiktok.com",
    linkedinLink: "https://linkedin.com",
    twitterLink: "https://twitter.com",
  };

  return (
    <footer className="bg-[#111827] text-white" id="contact">
      <div className="container mx-auto px-6 py-12 lg:px-20 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <img src="" alt="logo" className="mb-4 w-24 h-24 lg:w-16 lg:h-16" />
            <p className="text-[#959CA8] text-base leading-relaxed max-w-xs">
              Motto of the business
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about-product" className="text-[#959CA8] hover:text-[#D4AF37] transition-colors duration-300">About</a></li>
              <li><a href="#products" className="text-[#959CA8] hover:text-[#D4AF37] transition-colors duration-300">Products</a></li>
              <li><a href="#our-story" className="text-[#959CA8] hover:text-[#D4AF37] transition-colors duration-300">Our Story</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-3 mb-2 text-[#959CA8]">
              <Phone className="w-5 h-5 text-[#D4AF37]" />
              <a href={`tel:${footerData.phoneNumber}`} className="hover:text-[#D4AF37] transition-colors duration-300">
                {footerData.phoneNumber}
              </a>
            </div>
            <div className="flex items-center space-x-3 text-[#959CA8]">
              <Mail className="w-5 h-5 text-[#D4AF37]" />
              <a href={`mailto:${footerData.email}`} className="hover:text-[#D4AF37] transition-colors duration-300">
                {footerData.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4">Stay in Touch</h3>
            <div className="flex space-x-4">
              <a href={footerData.facebookLink}><img src={Facebook} alt="Facebook" className="w-10 transform transition-transform hover:scale-110" /></a>
              <a href={footerData.instagramLink}><img src={Instagram} alt="Instagram" className="w-10 transform transition-transform hover:scale-110" /></a>
              <a href={footerData.tiktokLink}><img src={Tiktok} alt="Tiktok" className="w-9 transform transition-transform hover:scale-110" /></a>
              <a href={footerData.linkedinLink}><img src={Linkedin} alt="Linkedin" className="w-10 transform transition-transform hover:scale-110" /></a>
              <a href={footerData.twitterLink}><img src={Twitter} alt="Twitter" className="w-9 transform transition-transform hover:scale-110" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#111827]">
        <hr className="border-[#2D3748] my-4 mr-6 ml-6" />
        <p className="text-center text-sm text-[#959CA8] py-4">
          © {new Date().getFullYear()} Business name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
