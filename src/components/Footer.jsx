import React, { useEffect, useState } from "react";
import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.svg";
import Tiktok from "../assets/images/tiktok.svg";
import Linkedin from "../assets/images/linkedin.svg";
import Twitter from "../assets/images/twitterx.svg";
import { Phone, Mail } from "lucide-react";
import { fetchData } from "../api/Api";
import loadingImage from "../assets/images/ffffff.png"; // Placeholder image

const Footer = () => {
  const [paragraph, setParagraph] = useState("Sustainable Living, Inspired by Nature");
  const [imageUrl, setImageUrl] = useState(loadingImage);
  const [facebook, setFacebook] = useState("#");
  const [instagram, setInstagram] = useState("#");
  const [twitter, setTwitter] = useState("#");
  const [tikTok, setTikTok] = useState("#");
  const [linkedIn, setLinkedIn] = useState("#");
  const [phoneNumber, setPhoneNumber] = useState("+233550420351");
  const [email, setEmail] = useState("bridgetkudoagbo@gmail.com");
 

  useEffect(() => {
    fetchData("Sheet1!A1:B100")
      .then((responseData) => {
        const dataMap = {};
        responseData.forEach((row) => {
          if (row.length >= 2) {
            dataMap[row[0]] = row[1];
          }
        });

        setParagraph(dataMap["Slogan"] || paragraph);
        setImageUrl(dataMap["Footer logo url"] || loadingImage);
        setFacebook(validateUrl(dataMap["Facebook"]));
        setInstagram(validateUrl(dataMap["Instagram"]));
        setTwitter(validateUrl(dataMap["TwitterX"]));
        setLinkedIn(validateUrl(dataMap["Linkedin"]));
        setTikTok(validateUrl(dataMap["Tiktok"]));

        // Fix for Phone Number Undefined Issue
        const apiPhoneNumber = dataMap["Phone number"];
        if (apiPhoneNumber && apiPhoneNumber.trim() !== "") {
          setPhoneNumber(apiPhoneNumber.startsWith("+") ? apiPhoneNumber : `+233${apiPhoneNumber}`);
        }

        setEmail(dataMap["email"] || email);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Helper function to validate and format URLs
  const validateUrl = (url) => {
    return url && url.startsWith("http") ? url : "#";
  };

  return (
    <footer className="bg-[#222222] text-white py-12" id="contact">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center lg:text-left">
          
          {/* Logo & Motto */}
          <div className="flex flex-col items-center lg:items-start">
            <img src={imageUrl} alt="logo" className="mb-4 w-24 h-24 shadow-lg rounded-full object-contain" />
            <p className="text-green-500 text-lg leading-loose max-w-xs text-center lg:text-left">
              {paragraph}
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
            <div className="flex items-center space-x-3 mb-2 text-lg">
              <Phone className="w-5 h-5 text-green-500" />
              <a href={`tel:${phoneNumber}`} className="hover:text-green-500 transition duration-300">
                {phoneNumber}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-green-500" />
              <a href={`mailto:${email}`} className="hover:text-green-500 transition duration-300">
                {email}
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Stay in Touch</h3>
            <div className="flex space-x-4">
              {[
                { link: facebook, img: Facebook },
                { link: instagram, img: Instagram },
                { link: tikTok, img: Tiktok },
                { link: linkedIn, img: Linkedin },
                { link: twitter, img: Twitter }
              ].map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer"
                   className="hover:scale-110 transition-transform duration-300">
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
