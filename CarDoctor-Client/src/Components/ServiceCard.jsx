import { BsArrowRight } from "react-icons/bs";

const ServiceCard = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-full p-3 border-[1px] rounded-xl shadow-sm">
        <img
          src="/src/assets/services/1.jpg"
          className="w-full aspect-video object-cover rounded-xl"
        />
        <h1 className="font-bold text-2xl mt-2">Electrical System</h1>
        <div className="flex justify-between items-start">
          <p className="font-semibold text-lg text-primary my-2">
            Price: $20.00
          </p>
          <button className="btn btn-circle bg-transparent">
            <BsArrowRight className="text-2xl text-primary"></BsArrowRight>
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
