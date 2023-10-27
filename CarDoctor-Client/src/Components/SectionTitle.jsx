const SectionTitle = ({ title, heading, desc }) => {
  return (
    <>
      <div className="space-y-2">
        <h4 className="text-lg md:text-lg text-primary font-bold text-center">
          {title}
        </h4>
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          {heading}
        </h1>
        <p className="text-center mx-auto max-w-4xl text-sm md:text-base">
          {desc}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
