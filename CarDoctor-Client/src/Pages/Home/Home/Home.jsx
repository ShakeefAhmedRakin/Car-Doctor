import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 md:px-8">
        <Banner></Banner>
        <AboutUs></AboutUs>
      </div>
    </>
  );
};

export default Home;
