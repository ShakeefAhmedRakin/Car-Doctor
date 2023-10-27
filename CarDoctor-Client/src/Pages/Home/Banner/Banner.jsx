import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <>
      <div className="relative flex justify-start items-center h-[700px] md:h-[600px]">
        <div className="p-4 lg:p-0 absolute z-10 text-white max-w-md ml-0 lg:ml-[100px] space-y-7">
          <h1 className="font-bold text-5xl lg:text-6xl">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-base lg:text-lg">
            Revitalize Your Ride with Affordable Price For Car Servicing.
            Quality Maintenance and Repairs That Will Not Break the Bank. Drive
            Smarter, Spend Less.
          </p>
          <div className="flex gap-5 flex-col md:flex-row">
            <button className="btn btn-primary bg-primary hover:bg-primary text-white text-base px-5 border-primary normal-case  h-14 hover:border-primary hover:text-white">
              Discover More
            </button>
            <button className="btn btn-primary bg-transparent text-white text-base px-5 border-white normal-case h-14 hover:bg-primary hover:border-primary hover:text-white">
              Latest Project
            </button>
          </div>
        </div>
        <div className="carousel w-full rounded-xl h-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="h-full w-full absolute bg-gradient-to-r from-black to-transparent"></div>
            <img
              src="/src/assets/banner/1.jpg"
              className="w-full object-cover"
            />
            <div className="absolute flex justify-center md:justify-end transform -translate-y-1/2 w-full gap-3 bottom-0 right-0 md:right-5">
              <a
                href="#slide6"
                className="btn btn-circle bg-primary border-none hover:bg-primary text-white btn-md lg:btn-lg"
              >
                <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-primary border-none hover:bg-primary text-white btn-md lg:btn-lg"
              >
                <AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight>
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="h-full w-full absolute bg-gradient-to-r from-black to-transparent"></div>
            <img
              src="/src/assets/banner/2.jpg"
              className="w-full object-cover"
            />
            <div className="absolute flex justify-center md:justify-end transform -translate-y-1/2 w-full gap-3 bottom-0 right-0 md:right-5">
              <a
                href="#slide1"
                className="btn btn-circle bg-primary border-none hover:bg-primary text-white btn-md lg:btn-lg"
              >
                <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
              </a>
              <a
                href="#slide3"
                className="btn btn-circle bg-primary border-none hover:bg-primary text-white btn-md lg:btn-lg"
              >
                <AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight>
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="h-full w-full absolute bg-gradient-to-r from-black to-transparent"></div>
            <img
              src="/src/assets/banner/3.jpg"
              className="w-full object-cover"
            />
            <div className="absolute flex justify-center md:justify-end transform -translate-y-1/2 w-full gap-3 bottom-0 right-0 md:right-5">
              <a
                href="#slide2"
                className="btn btn-circle bg-primary border-none hover:bg-primary text-white btn-md lg:btn-lg"
              >
                <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
              </a>
              <a
                href="#slide4"
                className="btn btn-circle bg-primary border-none hover:bg-primary text-white btn-md lg:btn-lg"
              >
                <AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight>
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="h-full w-full absolute bg-gradient-to-r from-black to-transparent"></div>
            <img
              src="/src/assets/banner/4.jpg"
              className="w-full object-cover"
            />
            <div className="absolute flex justify-center md:justify-end transform -translate-y-1/2 w-full gap-3 bottom-0 right-0 md:right-5">
              <a
                href="#slide3"
                className="btn btn-circle bg-primary border-none hover:bg-primary text-white btn-md lg:btn-lg"
              >
                <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
              </a>
              <a
                href="#slide5"
                className="btn btn-circle bg-primary border-none hover:bg-primary text-white btn-md lg:btn-lg"
              >
                <AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight>
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <div className="h-full w-full absolute bg-gradient-to-r from-black to-transparent"></div>
            <img
              src="/src/assets/banner/5.jpg"
              className="w-full object-cover"
            />
            <div className="absolute flex justify-center md:justify-end transform -translate-y-1/2 w-full gap-3 bottom-0 right-0 md:right-5">
              <a
                href="#slide4"
                className="btn btn-circle bg-primary border-none hover:bg-primary text-white btn-md lg:btn-lg"
              >
                <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
              </a>
              <a
                href="#slide6"
                className="btn btn-circle bg-primary border-none hover:bg-primary text-white btn-md lg:btn-lg"
              >
                <AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight>
              </a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <div className="h-full w-full absolute bg-gradient-to-r from-black to-transparent"></div>
            <img
              src="/src/assets/banner/6.jpg"
              className="w-full object-cover"
            />
            <div className="absolute flex justify-center md:justify-end transform -translate-y-1/2 w-full gap-3 bottom-0 right-0 md:right-5">
              <a
                href="#slide5"
                className="btn btn-circle bg-primary border-none hover:bg-primary text-white btn-md lg:btn-lg"
              >
                <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-primary border-none hover:bg-primary text-white btn-md lg:btn-lg"
              >
                <AiOutlineArrowRight className="text-xl"></AiOutlineArrowRight>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
