import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="py-48 px-2">
        <div className="flex flex-col gap-5 justify-center items-center max-w-xs mx-auto border-[1px] p-8">
          <img src="/src/assets/logo.svg" className="w-full" />
          <hr className="w-full" />
          <h1 className="font-medium text-4xl text-center">404</h1>
          <h1 className="font-medium text-2xl text-center">Page not found</h1>
          <hr className="w-full" />
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary bg-primary hover:bg-primary text-white text-base px-5 border-primary normal-case hover:border-primary hover:text-white"
          >
            Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
