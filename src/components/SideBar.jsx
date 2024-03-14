import { Link } from "react-scroll";

const sections = [
  { id: "nosotros", text: "Nosotros" },
  { id: "products", text: "Productos" },
  { id: "contacto", text: "Contacto" },
];

export const SideBar = ({ handleLinkClick }) => {
  return (
    <div className="m-10 text-gray-950">
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
