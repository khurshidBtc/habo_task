import React, { useState } from "react";
import Image from "../assets/image 1.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"

function NavBar() {
  const [isclicked, setIsclicked] = useState(false);

  const clickHandler = () => {
    setIsclicked(!isclicked);
  };

  return (
    <nav
      className="z-[1000] flex my-6 mx-[4rem] max-md:mx-[1rem] px-[2rem] py-[0.6rem] justify-between items-center
      sticky top-[24px]"
    >
      <a href="/">
        <img src={Image} alt="error" className="w-[150px] rounded-xl" />
      </a>

      <ul className="flex space-x-6 text-lg items-center max-md:hidden capitalize">
        <li className=" cursor-pointer">
          <a href="/">Find Suppliers</a>
        </li>
        <li className=" cursor-pointer">
          <a href="/">Find Service tags</a>
        </li>
        <li>
          <RiArrowDropDownLine size={25}/>
        </li>
        <div className=" flex gap-2.5 items-center font-bold text-[#00732f] border-2 border-[#00732f] px-[15px] py-2 hover:bg-gradient-to-b rounded-lg cursor-pointer">
          Login/Signup
        </div>
      </ul>
      {!isclicked && (
        <div
          className=" w-10 h-10 hidden max-md:block rounded-[5px] cursor-pointer"
          onClick={clickHandler}
        ><GiHamburgerMenu size={25}/></div>
      )}
      {isclicked && (
        <div
          alt="Error"
          className=" w-10 h-10 hidden max-md:block rounded-[5px] cursor-pointer"
          onClick={clickHandler}
        ><AiOutlineClose size={25}/></div>
      )}
      {isclicked && (
        <ul className=" w-full absolute right-0 top-[100px] flex flex-col items-center gap-[20px] py-[30px] rounded-2xl bg-[#123557] backdrop-filter backdrop-blur-lg text-white">
          <li className=" cursor-pointer">
            <a href="/" onClick={clickHandler}>
              {" "}
              find Suppliers
            </a>
          </li>
          <li className=" cursor-pointer">
            <option href="#contact" onClick={clickHandler}>
              Find Service tags
            </option>
          </li>

          <a className=" cursor-pointer flex items-center gap-2.5" href="/">
            Login/Signup
          </a>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
