"use client";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [showBackground, setShowBackground] = useState(false);

  const TOP_OFFSET = 12;

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY, TOP_OFFSET);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed py-[3px] top-0 z-50 w-full ${
        showBackground ? "bg-[#fff] border-b border-[#efefef]" : ""
      }`}
    >
      <div className="px-4 sm:px-[30px] header-area h-[74px] w-full">
        <div className="flex items-center h-full">
          <div className="block">
            <a href="/">
              <img
                className="h-[45px]"
                src="/Logo-web-DCT-Footer.webp"
                alt=" digital center"
              />
            </a>
          </div>
        </div>
        <div className="w-full justify-end h-full hidden lg:flex">
          <ul className="p-0 m-0">
            <li className="inline-block mx-[38px] relative group">
              <a
                className="block text-lg py-[29px] outline-0 uppercase leading-none"
                href="#"
              >
                DIGITAL SERVICES
              </a>
              <ul className="absolute bg-[#121212] text-white w-[300px] top-[85px] text-left py-[15px] z-10 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:top-[75px]">
                <li className="h-[44px] flex items-center">
                  <a
                    title="Digital Transformation"
                    className="py-[10px] px-[20px] transition-all duration-300 hover:tracking-wider"
                    href="/"
                  >
                    Digital Transformation
                  </a>
                </li>
                <li className="h-[44px] flex items-center">
                  <a
                    title="Digital Marketing"
                    className="py-[10px] px-[20px] transition-all duration-300 hover:tracking-wider"
                    href="/"
                  >
                    Digital Marketing
                  </a>
                </li>
              </ul>
            </li>
            <li className="inline-block mx-[38px] relative group">
              <a
                className="block text-lg py-[29px] outline-none uppercase leading-none"
                href="#"
              >
                Case Study
              </a>
              <ul className="absolute bg-[#121212] text-white w-[300px] top-[85px] text-left py-[15px] z-10 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:top-[75px]">
                <li className="h-[44px] flex items-center">
                  <a
                    title="Digital Transformation"
                    className="py-[10px] px-[20px] duration-300 hover:tracking-wider"
                    href="/"
                  >
                    Our Case Study
                  </a>
                </li>
              </ul>
            </li>
            <li className="inline-block mx-[38px]">
              <a
                className="block text-lg py-[29px] outline-none uppercase leading-none"
                href="#"
              >
                Company
              </a>
            </li>
            <li className="inline-block mx-[38px] relative group">
              <a
                className="block text-lg py-[26px] outline-none uppercase leading-none"
                href="#"
              >
                Blog
              </a>
              <ul className="absolute bg-[#121212] text-white w-[300px] top-[85px] text-left py-[15px] z-10 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:top-[75px]">
                <li className="h-[44px] flex items-center">
                  <a
                    title="Digital Transformation"
                    className="py-[10px] px-[20px] duration-300 hover:tracking-wider"
                    href="/"
                  >
                    Our Blog
                  </a>
                </li>
              </ul>
            </li>
            <li className="inline-block mx-[38px] relative group">
              <a
                className="block text-lg py-[29px] outline-none uppercase leading-none"
                href="#"
              >
                Others
              </a>
              <ul className="absolute bg-[#121212] text-white w-[300px] top-[85px] text-left py-[15px] z-10 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:top-[75px]">
                <li className="h-[44px] flex items-center">
                  <a
                    title="Digital Transformation"
                    className="py-[10px] px-[20px] duration-300 hover:tracking-wider"
                    href="/"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex h-full items-center justify-end">
          <button
            className={`menu-icon transition-all duration-300 ${
              showBackground
                ? "after:w-[100px] after:h-[100px] after:right-[-20px] after:top-[-30px]"
                : ""
            }`}
          >
            <img className="h-[22px]" src="/menu-dark.svg" alt="Menubar Icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
