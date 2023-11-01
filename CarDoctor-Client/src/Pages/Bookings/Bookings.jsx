import { useContext, useEffect, useState } from "react";
import PageTitle from "../../Components/PageTitle";
import { AuthContext } from "../../providers/AuthProvider";
import BookingCard from "../../Components/BookingCard";
import { toast } from "sonner";

const Bookings = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_apiURL}/bookings/${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setBookedServices(data);
        setLoading(false);
      });
  }, [user.uid]);

  const handleDelete = (idToBeDeleted) => {
    fetch(`${import.meta.env.VITE_apiURL}/bookings/${idToBeDeleted}`, {
      method: "DELETE",
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Item removed from cart");

          const remaining = bookedServices.filter(
            (product) => product.booking_id !== idToBeDeleted
          );
          setBookedServices(remaining);
        }
      });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        {/* TITLE SECTION */}
        <PageTitle route={"Home/Bookings"} title={"Bookings"}></PageTitle>

        {/* CONTENT */}
        <div className="my-10">
          {loading ? (
            <>
              <div className="flex items-center justify-center py-36">
                <span className="loading loading-bars loading-xl"></span>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
              {bookedServices.map((service) => (
                <BookingCard
                  key={service.booking_id}
                  service={service}
                  handleDelete={handleDelete}
                ></BookingCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Bookings;
