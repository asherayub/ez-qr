const Hero = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero w-full sm:h-screen grid grid-cols-1 grid-rows-2 sm:grid-cols-3 sm:grid-rows-1 place-items-center">
      <div className="hero__left col-span-2 mr-auto">
        <div className="tagline">
          <h1 className="text-5xl sm:text-9xl  font-bold">
            EZ<span className="text-accent">QR</span>
          </h1>
          <h2 className="text-xs sm:text-2xl font-bold tracking-widest ">
            QR Code Generator
          </h2>
        </div>
        <p className="text-sm sm:text-2xl mt-2 ">
          Generate{" "}
          <span className="font-bold z-10 rounded-lg relative before:absolute before:w-full before:-z-10 before:h-2 before:bottom-1 before:bg-primaryUser">
            customizable
          </span>{" "}
          QR codes on the go.
        </p>
        {/* link to get Started */}

        <button
          className=" bg-accent text-primary text-lg mx-auto block sm:inline sm:text-2xl mt-8
            font-bold py-3 px-6 rounded-md hover:bg-accent/70 transition duration-300 ease-in-out "
          onClick={() => handleClickScroll("start")}
        >
          Get Started
        </button>
      </div>
      <div className="hero__right">
        <img
          className="w-20 sm:w-auto min-w-[220px]"
          src="../../assets/logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
