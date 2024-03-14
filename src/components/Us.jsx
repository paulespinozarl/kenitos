import { useMediaQuery } from "@react-hook/media-query";

const Us = () => {
  const isShortScreen = useMediaQuery("(max-width: 864px)");
  return (
    <div className="madimi-one-regular">
      <div id="nosotros" className="flex lg:flex-row flex-col">
        <div className="h-96 lg:h-calc-64 w-sreen lg:w-1/2 bg-[url('../public/papayqueso.jpg')] bg-cover bg-no-repeat"></div>
        <div className="h-1/2 lg:h-calc-64 w-sreen lg:w-1/2 flex justify-center items-center p-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laborum
            molestiae nostrum expedita totam adipisci modi reprehenderit eius
            consequuntur delectus dicta temporibus dolorem, repellendus natus
            cum aspernatur perferendis porro iusto?
          </p>
        </div>
      </div>
      <div
        className={`flex lg:flex-row ${
          isShortScreen ? "flex-col-reverse" : "flex-col"
        }`}
      >
        <div className="h-1/2 lg:h-calc-64 w-sreen lg:w-1/2 flex justify-center items-center p-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laborum
            molestiae nostrum expedita totam adipisci modi reprehenderit eius
            consequuntur delectus dicta temporibus dolorem, repellendus natus
            cum aspernatur perferendis porro iusto?
          </p>
        </div>
        <div className="h-96 lg:h-calc-64 w-sreen lg:w-1/2 bg-[url('../public/queso-3.jpg')] bg-cover bg-no-repeat"></div>
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="h-96 lg:h-calc-64 w-sreen lg:w-1/2 bg-[url('../public/pretzel-6.jpg')] bg-cover bg-no-repeat"></div>
        <div className="h-1/2 lg:h-calc-64 w-sreen lg:w-1/2 flex justify-center items-center p-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laborum
            molestiae nostrum expedita totam adipisci modi reprehenderit eius
            consequuntur delectus dicta temporibus dolorem, repellendus natus
            cum aspernatur perferendis porro iusto?
          </p>
        </div>
      </div>
    </div>
  );
};

export { Us };
