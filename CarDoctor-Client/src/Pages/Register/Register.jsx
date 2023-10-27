import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 md:px-8 my-12">
        <div className="flex gap-5 lg:gap-10 items-start justify-between">
          {/* IMAGE */}
          <div className="flex-1 hidden md:flex mt-20">
            <img src="/src/assets/login/login.svg" className="mx-auto" />
          </div>

          {/* FORM */}
          <div className="flex-1">
            <div className="w-full py-16 px-8 md:px-12 lg:px-20 border-[1px] rounded-xl shadow-sm">
              <form className="flex flex-col">
                <h1 className="text-center text-2xl lg:text-4xl font-semibold mb-8">
                  Sign Up
                </h1>
                <label className="text-base lg:text-lg font-semibold mt-6 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Username"
                  required
                  className="py-3 px-4 border-[1px] rounded-xl text-sm"
                />
                <label className="text-base lg:text-lg font-semibold mt-6 mb-3">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="py-3 px-4 border-[1px] rounded-xl text-sm"
                />
                <label className="text-base lg:text-lg font-semibold mt-6 mb-3">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  required
                  className="py-3 px-4 border-[1px] rounded-xl text-sm"
                />
                <button className="btn mt-8 btn-primary bg-primary hover:bg-primary text-white text-base px-5 border-primary normal-case hover:border-primary hover:text-white">
                  Sign Up
                </button>
                <p className="my-7 font-medium text-center">Or Sign Up With</p>
              </form>
              <div className="flex justify-center items-center gap-4">
                <button className="btn btn-circle">
                  <BiLogoFacebook className="text-2xl text-[#46639e]"></BiLogoFacebook>
                </button>
                <button className="btn btn-circle">
                  <BiLogoLinkedin className="text-xl text-[#0a66c2]"></BiLogoLinkedin>
                </button>
                <button className="btn btn-circle">
                  <FcGoogle className="text-xl"></FcGoogle>
                </button>
              </div>
              <p className="mt-12 text-center font-medium text-sm lg:text-base">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="link link-hover text-primary">Log In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;