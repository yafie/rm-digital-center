const SectionHero: React.FC = () => {
  return (
    <>
      <div className="mx-auto px-4 lg:px-[100px] h-full relative">
        <div className="grid grid-cols-3 min-h-[150vh]">
          <div className="relative">
            <div className="absolute w-[1px] h-full top-0 left-0 bg-[#efefef]"></div>
          </div>
          <div className="relative">
            <div className="absolute w-[1px] h-full top-0 left-0 bg-[#efefef]"></div>
          </div>
          <div className="relative">
            <div className="absolute w-[1px] h-full top-0 left-0 bg-[#efefef]"></div>
            <div className="absolute w-[1px] h-full top-0 right-0 bg-[#efefef]"></div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full px-4 lg:px-[100px] flex flex-col sm:flex-row">
          <div className="w-full pt-[130px] sm:pt-[260px]">
            <h1 className="text-[40px] lg:text-[80px] font-semibold leading-none pb-6 relative">
              Digital Center Indonesia
              <img
                className="absolute sm:rotate-0 bottom-[-150px] sm:top-0 right-8 sm:right-0 bounce-horizontal icon-rotate"
                src="/arrow-icon-1.png"
                alt="icon arrow"
              />
            </h1>
            <p className="text-[16px] sm:text-[20px] text-[#555] pb-[48px]">
              Improve your business by analyzing it deeply and using the latest
              technology to increase growth.
            </p>
            <button className="font-medium mb-32 text-base text-white bg-[#745eff] leading-none px-[36px] py-[18px] rounded-md hover:bg-[#ff977b] transition duration-300">
              Get To Know More
            </button>
            <img
              className="absolute left-[24px] lg:left-[100px] bottom-0 rotate-360 hidden sm:block"
              src="/hero-shape-3.png"
              alt="icon shape 3"
            />
          </div>
          <div className="w-full pt-0 md:pt-[130px] sm:pt-[20px] bg-blue">
            <img src="/hero-4-1.png" alt="Hero Image" />
            <img
              className="absolute bottom-0 right-[100px] md:right-[1rem] hidden sm:block"
              src="/hero-shape-2.png"
              alt="icon shape 2"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[10%] lg:top-[12%] left-[-20px] bounce-horizontal hidden md:block"
        src="/hero-shape.png"
        alt="icon shape"
      />
    </>
  );
};

export default SectionHero;
