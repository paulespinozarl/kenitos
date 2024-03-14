import { useMediaQuery } from "@react-hook/media-query";
import { papayqueso, pretzel6, queso3 } from "../../public";

const Us = () => {
  const isShortScreen = useMediaQuery("(max-width: 864px)");
  return (
    <div className="madimi-one-regular">
      <div id="nosotros" className="flex lg:flex-row flex-col">
        <img
          className="`h-96 lg:h-calc-64 w-sreen lg:w-1/2 bg-cover bg-no-repeat"
          src={papayqueso}
          alt="papayqueso"
        />
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
        <img
          className="`h-96 lg:h-calc-64 w-sreen lg:w-1/2 bg-cover bg-no-repeat"
          src={queso3}
          alt="papayqueso"
        />{" "}
      </div>
      <div className="flex lg:flex-row flex-col">
        <img
          className="`h-96 lg:h-calc-64 w-sreen lg:w-1/2 bg-cover bg-no-repeat"
          src={pretzel6}
          alt="papayqueso"
        />
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
