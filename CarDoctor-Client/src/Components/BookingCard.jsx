const BookingCard = ({ service, handleDelete }) => {
  return (
    <>
      <div className="flex flex-col justify-between h-full p-3 border-[1px] rounded-xl shadow-sm">
        <img
          src={service.img}
          className="w-full aspect-video object-cover rounded-xl"
        />
        <h1 className="font-bold text-2xl mt-2">{service.title}</h1>
        <div className="flex justify-between items-start">
          <p className="font-semibold text-lg text-primary my-2">
            Price: ${service.price}
          </p>
          <button
            onClick={() => {
              handleDelete(service.booking_id);
            }}
            className="btn btn-circle bg-transparent"
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingCard;
