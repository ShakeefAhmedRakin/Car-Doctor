import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Error from "./Pages/Error/Error";
import AuthProvider from "./providers/AuthProvider";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import AllServices from "./Pages/AllServices/AllServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader: () => fetch(`http://localhost:5000/services`),
      },
      {
        path: "/detail/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
