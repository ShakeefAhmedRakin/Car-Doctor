import SectionTitle from "../../../Components/SectionTitle";
import ServiceCard from "../../../Components/ServiceCard";

const ServiceSection = () => {
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
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
      </div>
    </>
  );
};

export default ServiceSection;
