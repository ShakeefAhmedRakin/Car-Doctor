import { useLoaderData } from "react-router-dom";
import PageTitle from "../../Components/PageTitle";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "sonner";

const ServiceDetail = () => {
  const service = useLoaderData();

  const { user } = useContext(AuthContext);

  const bookingInfo = {
    user_id: user.uid,
    service_id: service._id,
  };

  const handleBooking = () => {
    fetch(`${import.meta.env.VITE_apiURL}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully booked!");
        } else {
          toast.error("Already booked!");
        }
      });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        {/* TITLE SECTION */}
        <PageTitle
          route={"Home/Service Details"}
          title={"Service Details"}
        ></PageTitle>

        <div className="my-10">
          <div className=" flex flex-col lg:flex-row gap-6">
            {/* IMAGE+DESC */}
            <div className="flex-1">
              <img
                src={service.img}
                className="w-full rounded-xl aspect-video object-cover"
              />
              <h1 className="text-4xl font-bold mt-6 mb-2">{service.title}</h1>
              <p className="text-gray-600 text-sm md:text-base">
                {service.description}
              </p>
            </div>
            {/* SERVICES */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-fit">
                {service?.facility?.map((facility) => (
                  <>
                    <div className="p-5 bg-gray-100 rounded-xl border-t-2 border-primary">
                      <h1 className="text-lg font-extrabold">
                        {facility.name}
                      </h1>
                      <p className="text-gray-600 text-sm md:text-base">
                        {facility.details}
                      </p>
                    </div>
                  </>
                ))}
              </div>
              <div className="flex justify-between lg:justify-end items-center gap-6 mt-6">
                <h1 className="text-2xl font-bold whitespace-nowrap">
                  Price: {service.price}
                </h1>

                <div className="w-full">
                  <button
                    onClick={handleBooking}
                    className="btn btn-primary bg-primary hover:bg-primary text-white text-base px-5 border-primary normal-case hover:border-primary hover:text-white w-full"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
