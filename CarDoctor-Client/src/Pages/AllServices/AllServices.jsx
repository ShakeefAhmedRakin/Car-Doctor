import { useEffect, useState } from "react";
import PageTitle from "../../Components/PageTitle";
import ServiceCard from "../../Components/ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_apiURL}/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        {/* TITLE SECTION */}
        <PageTitle route={"Home/Services"} title={"Services"}></PageTitle>

        {/* CONTENT */}
        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllServices;
