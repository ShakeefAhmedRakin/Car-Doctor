import { useState, useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import ServiceCard from "../../../Components/ServiceCard";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services?limit=6")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <SectionTitle
        title={"Services"}
        heading={"Our Service Area"}
        desc={
          "From diagnostics to repairs, Car Doctor has your vehicle needs covered. Keep your car in top shape with our expert maintenance and repairs."
        }
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center items-center mb-8">
        <Link to="/services" reloadDocument>
          <button className="btn btn-primary bg-transparent text-primary text-base font-semibold px-5 border-primary normal-case hover:bg-primary hover:border-primary hover:text-white">
            See All Services
          </button>
        </Link>
      </div>
    </>
  );
};

export default ServiceSection;
