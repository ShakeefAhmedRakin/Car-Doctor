import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Toaster } from "sonner";

const Root = () => {
  return (
    <div className="font-inter">
      <ScrollRestoration></ScrollRestoration>
      <Toaster richColors />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
