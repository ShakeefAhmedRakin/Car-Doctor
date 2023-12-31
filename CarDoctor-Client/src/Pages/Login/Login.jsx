import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "sonner";
import { useContext } from "react";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully logged in. Redirecting...");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Successfully logged in. Redirecting...");
        e.target.reset();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
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
              <form className="flex flex-col" onSubmit={handleLogin}>
                <h1 className="text-center text-2xl lg:text-4xl font-semibold mb-8">
                  Login
                </h1>
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
                  Log In
                </button>
                <p className="my-7 font-medium text-center">Or Login With</p>
              </form>
              <div className="flex justify-center items-center gap-4">
                <button className="btn btn-circle">
                  <BiLogoFacebook className="text-2xl text-[#46639e]"></BiLogoFacebook>
                </button>
                <button className="btn btn-circle">
                  <BiLogoLinkedin className="text-xl text-[#0a66c2]"></BiLogoLinkedin>
                </button>
                <button className="btn btn-circle" onClick={handleGoogleSignIn}>
                  <FcGoogle className="text-xl"></FcGoogle>
                </button>
              </div>
              <p className="mt-12 text-center font-medium text-sm lg:text-base">
                {"Don't have an account? "}
                <Link to="/register">
                  <span className="link link-hover text-primary">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
