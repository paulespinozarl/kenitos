import { pancho1, papa1, pretzel7, queso1 } from "../../public";

const Products = () => {
  return (
    <div id="products" className="w-screen h-full  kalam-regular">
      <h3 className="w-sreen h-[30vh] text-5xl flex justify-center items-center">
        Productos
      </h3>
      <div className="grid grid-cols-4 grid-rows-1">
        <div className="relative">
          <img
            src={queso1}
            alt="queso1"
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
            src={pancho1}
            alt="pancho1"
            className="w-full h-full opacity-100 hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center bg-black bg-opacity-50">
            <p className="text-white text-center text-2xl">Pan de pancho</p>
          </div>
        </div>
        <div className="relative">
          <img
            src={papa1}
            alt="papa1"
            className="w-full h-full opacity-100 hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center bg-black bg-opacity-50">
            <p className="text-white text-center text-2xl">Pan de papa</p>
          </div>
        </div>
        <div className="relative">
          <img
            src={pretzel7}
            alt="pretzel7"
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
