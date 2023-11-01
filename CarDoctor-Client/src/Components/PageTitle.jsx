const PageTitle = ({ route, title }) => {
  return (
    <>
      <div className="relative h-[200px] flex justify-center items-center">
        <img
          src="/src/assets/banner/4.jpg"
          className="h-full w-full object-cover rounded-xl absolute"
        />
        <div className="rounded-xl h-full w-full absolute bg-gradient-to-r from-black to-transparent"></div>
        <div className="bg-primary absolute bottom-0 text-white font-medium px-8 md:px-12 py-3  rounded-t-xl">
          <h1 className="text-xs md:text-base">{route}</h1>
        </div>
        <div className="z-10">
          <h1 className="text-white font-bold text-2xl md:text-4xl">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
