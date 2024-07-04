import React from "react";
import footPic from "../assets/image 1.png";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

function FooterSection() {
  return (
    <div className="bg-[#123557]">
      <footer className="mx-4 p-4 sm:p-6 xl:mx-16 mt-16">
        <hr className="my-6 border-gray-700 lg:my-8" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start mb-6 sm:mb-0">
            <img src={footPic} alt="Company Logo" className="h-12 w-auto" />
          </div>
          <div className="flex justify-around w-full sm:w-2/3 mb-6 sm:mb-0">
            <div className="text-white text-center sm:text-left">
              <h1 className="font-bold mb-2">Company</h1>
              <p className="hover:underline cursor-pointer">About</p>
              <p className="hover:underline cursor-pointer">FAQs</p>
            </div>
            <div className="text-white text-center sm:text-left">
              <h1 className="font-bold mb-2">Terms</h1>
              <p className="hover:underline cursor-pointer">Privacy Policy</p>
              <p className="hover:underline cursor-pointer">Terms of Service</p>
            </div>
            <div className="text-white text-center sm:text-left">
              <h1 className="font-bold mb-2">Related</h1>
              <p className="hover:underline cursor-pointer">Contact Us</p>
              <p className="hover:underline cursor-pointer">Support</p>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end space-x-6">
            <a
              href="https://www.linkedin.com/in/khurshd-alam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              <AiFillLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/khurshedeth/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              <AiFillGithub className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/eth_parzivaleth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              <AiFillTwitterCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white"
            >
              <FaFacebookSquare className="w-5 h-5" />
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-700 lg:my-8" />
      </footer>
    </div>
  );
}

export default FooterSection;
