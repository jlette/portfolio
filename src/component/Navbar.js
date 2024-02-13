import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  // Ajoutez un état pour gérer l'affichage du menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-[#13171F] border-gray-200 dark:bg-gray-900 sticky top-0 z-50 p-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 ">
        <Link
          to="accueil"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#17E7ED] text-white cursor-pointer"
        >
          <span className="text-[#17E7ED] self-center text-2xl font-semibold whitespace-nowrap ">
            LETTE VOUETO Jimmy
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:text-[#17E7ED] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          }  items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          id="navbar-default"
        >
          <ul class="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg  lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0  dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="competences"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#17E7ED] text-white cursor-pointer"
              >
                Compétences
              </Link>
            </li>
            <li>
              <Link
                to="formation"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#17E7ED] text-white cursor-pointer"
              >
                Formation
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#17E7ED] text-white cursor-pointer"
              >
                Expérience
              </Link>
            </li>
            <li>
              <Link
                to="projets"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#17E7ED] text-white cursor-pointer"
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#17E7ED] text-white cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
