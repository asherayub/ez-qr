const HowItWorks = () => {
  return (
    <section className="how__it__works pt-24 mb-24 w-full">
      <h1 className="text-5xl sm:text-9xl font-bold mb-8">How It Works</h1>
      <video
        className="  border-2 rounded-lg mx-auto block"
        src="../../assets/EZQR-how-it-works.mp4"
        autoPlay
        loop
        muted
      ></video>
    </section>
  );
};

export default HowItWorks;
