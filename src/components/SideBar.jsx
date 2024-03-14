import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { Link } from "react-scroll";

const links = [
  {
    href: "https://www.linkedin.com/in/paulespinozarl/",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/paulespinozarl",
    icon: FaGithub,
  },
  {
    href: "",
    icon: IoDownloadOutline,
  },
];

const sections = [
  { id: "sobre-mi", text: "Sobre mi" },
  { id: "experiencia", text: "Experiencia" },
  { id: "educacion", text: "Educación" },
];

const SideBarLink = ({ href, icon: Icon, size = 30, text, onClick }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={""}
      className="transition-transform duration-200 hover:scale-125 mr-5"
      onClick={onClick}
    >
      <Icon size={size} />
      {text && <span className="ml-2">{text}</span>}
    </a>
  );
};

export const SideBar = ({ handleLinkClick }) => {
  return (
    <div className="m-10 text-gray-950">
      <div className="flex justify-around">
        {links.map((link, index) => (
          <SideBarLink key={index} {...link} />
        ))}
      </div>
      <div className="flex justify-around text-lg mt-10">
        {sections.map(({ id, text }) => (
          <Link
            key={id}
            spy={true}
            smooth={true}
            duration={1000}
            to={id}
            offset={-64}
            onClick={handleLinkClick}
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};
