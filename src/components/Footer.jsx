import { SlSocialInstagram } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiWhatsappLogoThin } from "react-icons/pi";

const Footer = () => {
  return (
    <footer
      id="contacto"
      className="flex justify-center items-center flex-col bg-slate-50"
    >
      <nav className="flex w-screen h-24 justify-center gap-10 items-center">
        <a
          className="transition-transform duration-200 hover:scale-125 cursor-pointer"
          href="https://www.instagram.com/kenitos.gourmet/"
          target="_blank"
        >
          <SlSocialInstagram size={23} />
        </a>
        <a
          className="transition-transform duration-200 hover:scale-125 cursor-pointer"
          href="https://www.facebook.com/kenitosgourmet"
          target="_blank"
        >
          <CiFacebook size={25} />
        </a>
        <a
          className="transition-transform duration-200 hover:scale-125 cursor-pointer"
          href="mailto:kenitos@gmail.com"
          target="_blank"
        >
          <CiMail size={25} />
        </a>
        <a
          className="transition-transform duration-200 hover:scale-125 cursor-pointer"
          href="https://wa.me/+541157667045"
          target="_blank"
        >
          <PiWhatsappLogoThin size={25} />
        </a>
      </nav>
      <div className="flex justify-center items-center mb-6">
        <MdOutlineLocationOn size={13} />
        <span className="ml-2">Diputado Pedrera 1790 V. Alsina.</span>
      </div>
      <div className="text-xs mb-2 flex justify-center items-center">
        <small className="mr-1">Desarrollado por Paul Espinoza |</small>
        <a
          className="transition-transform duration-200 hover:scale-125 cursor-pointer"
          href="mailto:paulespinozarl@gmail.com"
          target="_blank"
        >
          <CiMail size={14} />
        </a>
      </div>
    </footer>
  );
};

export { Footer };
