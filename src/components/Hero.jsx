const Hero = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero w-full h-screen grid grid-cols-1 grid-rows-2 sm:grid-cols-3 sm:grid-rows-1 place-items-center">
      <div className="hero__left col-span-2 mr-auto">
        <div className="tagline">
          <h1 className="text-5xl sm:text-9xl  font-bold">EZQR</h1>
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
          className=" bg-accent text-primary
            font-bold py-2 px-4 rounded-md hover:bg-accent/70 transition duration-300 ease-in-out mt-8"
          onClick={() => handleClickScroll("start")}
        >
          Get Started
        </button>
      </div>
      <div className="hero__right">
        <img
          className="w-20 sm:w-auto min-w-[220px]"
          src="../logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;