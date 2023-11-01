import { AiFillCustomerService } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { RiServiceFill } from "react-icons/ri";
import { BsPersonCheckFill } from "react-icons/bs";
import PageTitle from "../../Components/PageTitle";

const About = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        {/* TITLE SECTION */}
        <PageTitle route={"Home/About"} title={"About Us"}></PageTitle>

        {/* CONTENT */}

        <div className="my-10">
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1">
                <h4 className="text-xl text-primary font-bold">About Us</h4>
                <hr className="my-4" />
                <p className="text-gray-600 text-sm md:text-base">
                  Welcome to Car Doctor, your trusted partner for all things
                  automotive. Our journey began with a passion for cars and a
                  commitment to excellence. With years of experience in the
                  automotive industry, our team of skilled professionals has
                  honed their expertise to provide top-quality car servicing and
                  repairs.
                </p>
              </div>
              <div className="flex-1">
                <h4 className="text-xl text-primary font-bold">Our Story</h4>
                <hr className="my-4" />
                <p className="text-gray-600 text-sm md:text-base">
                  {
                    "Founded in 2023, our mission has always been clear: to keep vehicles running at their best, ensuring your safety and peace of mind on the road. We understand the vehicle in your daily life, and we're here to make sure it performs optimally."
                  }
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl text-primary font-bold">
                Why Choose Car Doctor?
              </h4>
              <hr className="my-4" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* LIST ITEM */}
                <div className="shadow-xl rounded-xl p-4 space-y-2">
                  <h4 className="text-xl text-gray-700 font-bold flex gap-2 items-center">
                    <span className="text-primary">
                      <BsPersonCheckFill></BsPersonCheckFill>
                    </span>
                    Expertise
                  </h4>
                  <hr />
                  <p className="text-gray-600 text-sm md:text-base">
                    Our team is made up of experienced and certified mechanics
                    who are well-versed in diagnosing and repairing a wide range
                    of vehicle makes and models.
                  </p>
                </div>
                {/* LIST ITEM */}
                <div className="shadow-xl rounded-xl p-4 space-y-2">
                  <h4 className="text-xl text-gray-700 font-bold flex gap-2 items-center">
                    <span className="text-primary">
                      <AiFillCustomerService></AiFillCustomerService>
                    </span>
                    Quality Service
                  </h4>
                  <hr />
                  <p className="text-gray-600 text-sm md:text-base">
                    We pride ourselves on delivering the highest quality of
                    service. Whether it is a routine maintenance check or a
                    complex repair, we aim for perfection in every task we
                    undertake.
                  </p>
                </div>
                {/* LIST ITEM */}
                <div className="shadow-xl rounded-xl p-4 space-y-2">
                  <h4 className="text-xl text-gray-700 font-bold flex gap-2 items-center">
                    <span className="text-primary">
                      <GiReceiveMoney></GiReceiveMoney>
                    </span>
                    Affordability
                  </h4>
                  <hr />
                  <p className="text-gray-600 text-sm md:text-base">
                    We believe that quality car care should be accessible to
                    all. That is why we offer competitive pricing without
                    compromising on the level of service you receive.
                  </p>
                </div>
                {/* LIST ITEM */}
                <div className="shadow-xl rounded-xl p-4 space-y-2">
                  <h4 className="text-xl text-gray-700 font-bold flex gap-2 items-center">
                    <span className="text-primary">
                      <RiServiceFill></RiServiceFill>
                    </span>
                    Customer-Centric
                  </h4>
                  <hr />
                  <p className="text-gray-600 text-sm md:text-base">
                    Your satisfaction is our priority. We are here to answer
                    your questions, provide honest recommendations, and ensure
                    you are informed at every step of the servicing process.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl text-primary font-bold">Our Commitment</h4>
              <hr className="my-4" />
              <p className="text-gray-600 text-sm md:text-base">
                At Car Doctor, we are dedicated to maintaining the health of
                your vehicle. Our state-of-the-art facility is equipped with the
                latest tools and technology to address your needs efficiently
                and effectively. From routine oil changes and brake inspections
                to complex engine repairs, we handle it all with precision and
                care.<br></br>
                <br></br>
                We believe in building long-lasting relationships with our
                customers, and your trust is of the utmost importance to us. We
                are here to be your automotive partner, ensuring that your
                vehicle runs at its best for years to come.<br></br>
                <br></br>
                Thank you for considering Car Doctor for your automotive needs.
                We look forward to serving you and your vehicle with the highest
                standards of excellence.
              </p>
            </div>
            <div>
              <h4 className="text-xl text-primary font-bold">Contact Us</h4>
              <hr className="my-4" />
              <p className="text-gray-600 text-sm md:text-base mb-4">
                Have questions or ready to schedule your next car servicing
                appointment? Contact us today to experience the Car Doctor
                difference.
              </p>
              <div className="flex justify-center md:justify-end">
                <button className="btn btn-primary bg-primary hover:bg-primary text-white text-base px-5 border-primary normal-case hover:border-primary hover:text-white">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
