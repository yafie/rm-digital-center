const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212]">
      <div className="border-b border-solid border-[#262626]">
        <div className="px-4 sm:px-[50px] footer-grid">
          <div className="pt-[60px] md:pt-[90px] lg:pt-[140px]">
            <img
              className="h-[33px] mb-[30px]"
              src="/Logo-web-DCT-Putih.webp"
              alt=""
            />
            <p className="text-white max-w-[310px] text-[16px]">
              Transform your business to maximize its potential growth through
              in-depth business analysis and the implementation of the latest
              technology
            </p>
          </div>
          <div className="border border-solid border-[#262626] sm:border-l sm:border-r mt-[50px]  sm:mt-0">
            <ul className="h-full w-full">
              <li className="py-[38px] text-center border-b border-solid border-[#262626] hover:bg-white group cursor-pointer transition duration-300">
                <a
                  href="/"
                  className="text-white text-[16px] outline-0 uppercase group-hover:text-black "
                >
                  Linkedin
                </a>
              </li>
              <li className="py-[38px] text-center hover:bg-white group cursor-pointer transition duration-300">
                <a
                  href="/"
                  className="text-white text-[16px] outline-0 uppercase group-hover:text-black"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="py-[45px] sm:pt-[90px] text-center sm:text-right">
            <h1 className="text-[52px] lg:text-[140px] text-white">
              LET'S TALK
            </h1>
          </div>
        </div>
      </div>
      <div className="px-4 py-[30px] sm:p-[50px]">
        <div className="flex sm:flex-row flex-col-reverse justify-between px-3 gap-4">
          <p className="max-w-none sm:max-w-[235px] text-white text-[16px] text-center sm:text-left">
            © 2023 | Alrights reserved by{" "}
            <a href="#" target="_blank">
              Digitalcenter.id
            </a>
          </p>
          <div className="flex justify-center items-center">
            <ul className="flex flex-row gap-6">
              <li className="">
                <a href="/" className="text-white text-[16px] outline-0">
                  ABOUT US
                </a>
              </li>
              <li className="">
                <a href="/" className="text-white text-[16px] outline-0">
                  FAQS
                </a>
              </li>
              <li className="">
                <a href="/" className="text-white text-[16px] outline-0">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
