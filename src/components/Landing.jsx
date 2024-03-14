const Landing = () => {
  return (
    <section
      id="landing"
      className="relative w-full h-calc-64 bg-slate-800 mt-16"
    >
      <img
        src="../public/pretzel-3.jpg"
        alt="bg"
        className="object-cover w-full h-full opacity-60"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <div className="text-white font-bold">
          <h1 className="text-4xl lg:text-5xl mb-5">Fabrica de panes</h1>
          <h2>100% ARTESANAL</h2>
        </div>
      </div>
    </section>
  );
};

export { Landing };
