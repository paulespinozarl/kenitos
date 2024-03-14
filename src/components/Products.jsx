const Products = () => {
  return (
    <div id="products" className="w-screen h-full  kalam-regular">
      <div className="grid grid-cols-4 grid-rows-1">
        <div className="relative">
          <img
            src="../public/queso-1.jpg"
            alt=""
            className="w-full h-full opacity-100 hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center bg-black bg-opacity-50">
            <p className="text-white text-center text-2xl">
              Pan con queso Parmesano
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="../public/pancho-1.jpg"
            alt=""
            className="w-full h-full opacity-100 hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center bg-black bg-opacity-50">
            <p className="text-white text-center text-2xl">Pan de pancho</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="../public/papa-1.jpg"
            alt=""
            className="w-full h-full opacity-100 hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center bg-black bg-opacity-50">
            <p className="text-white text-center text-2xl">Pan de papa</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="../public/pretzel-7.jpg"
            alt=""
            className="w-full h-full opacity-100 hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center bg-black bg-opacity-50">
            <p className="text-white text-center text-2xl">Pan de pretzel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Products };
