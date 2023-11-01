import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
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
          <Link to={`/detail/${service._id}`}>
            <button className="btn btn-circle bg-transparent">
              <BsArrowRight className="text-2xl text-primary"></BsArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
