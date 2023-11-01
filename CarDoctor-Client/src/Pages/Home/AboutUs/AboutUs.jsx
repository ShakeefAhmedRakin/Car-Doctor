import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div
        className="flex flex-col lg:flex-row justify-between py-20
      gap-y-12 md:gap-y-24"
      >
        <div className="flex-1 relative flex justify-center lg:justify-start">
          <img
            src="/src/assets/about_us/person.jpg"
            className="w-3/4 aspect-square object-cover object-left rounded-xl"
          />
          <img
            src="/src/assets/about_us/parts.jpg"
            className="w-1/2 aspect-square object-cover absolute right-0 lg:right-12 top-[50%] lg:top-[65%] xl:top-[50%] border-[10px] border-white rounded-xl"
          />
        </div>
        <div className="flex-1 space-y-4 p-4 md:p-0">
          <h4 className="text-xl text-primary font-bold">About Us</h4>
          <h1 className="text-3xl md:text-5xl font-bold">
            Years of Qualifications and Experience in the Field
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            At Car Doctor, we take pride in our rich legacy of expertise,
            spanning many years in the automotive industry. Our dedicated team,
            comprising experienced professionals, possesses a deep understanding
            of car servicing and repairs. We are committed to providing
            top-notch service, using the latest techniques and technology to
            ensure optimal performance and safety.<br></br>
            <br></br>Our journey is rooted in a passion for automobiles and a
            mission to deliver unparalleled quality and value to our customers.
            Trust us for all your automotive needs, and experience the
            difference that years of qualification and experience make.
          </p>
          <div>
            <Link to="/about">
              <button className="btn btn-primary bg-primary hover:bg-primary text-white text-base px-5 border-primary normal-case hover:border-primary hover:text-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
