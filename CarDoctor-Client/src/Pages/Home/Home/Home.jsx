import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ServiceSection from "../ServiceSection/ServiceSection";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        <Banner></Banner>
        <AboutUs></AboutUs>
        <ServiceSection></ServiceSection>
      </div>
    </>
  );
};

export default Home;
