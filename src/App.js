import "./App.css";
import Navbar from "./component/Navbar";
import StudenTimeline from "./component/StudentTimeline";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { PiStudentFill } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Projet from "./component/Card";
import Contact from "./component/Contact";
import ExpTimeline from "./component/ExpTimeline";

function App() {
  const [text] = useTypewriter({
    words: ["suis je ?"],
    loop: {},
  });

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <div
        style={{ backgroundImage: `url("/assets/images/background.png")` }}
        className=" bg-cover bg-center flex flex-row flex-wrap justify-center display-inline-block "
        id="accueil"
      >
        <div className="flex flex-col  w-6/8 p-0 lg:p-36  m-10 text-left tracking-wide">
          <Fade direction="up" triggerOnce={true} duration={1000}>
            {/* <div className="text-center">
              <h1 className="text-5xl ">
                <span className="text-[#00AB94]">{"Qui"}</span>{" "}
                <span className="text-white">{text}</span>
                <Cursor />
              </h1>
            </div> */}
            <div className="pb-5">
              <p className="text-white text-left text-xl font-light">
                Bonjour,
              </p>
              <p className="text-left text-white text-6xl">
                Je suis{" "}
                <span className="font-medium text-[#17E7ED]">
                  LETTE VOUETO Jimmy
                </span>
              </p>
              <p className=" text-white  text-6xl">
                Future développeur full stack
              </p>
            </div>
            <div>
              <ul className="flex flex-row items-center ">
                <li className="pr-5">
                  <a
                    href="https://github.com/jlette"
                    target="_blank"
                    className=""
                  >
                    <svg
                      width="98"
                      height="96"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hover:scale-125 duration-500"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                </li>
                <li className="pr-5">
                  <a
                    href="https://gitlab.com/jlettevoueto"
                    target="_blank"
                    className=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      fill-rule="evenodd"
                      className="hover:scale-125 duration-500"
                    >
                      <path d="M32 61.477L43.784 25.2H20.216z" fill="#e24329" />
                      <path d="M32 61.477L20.216 25.2H3.7z" fill="#fc6d26" />
                      <path
                        d="M3.7 25.2L.12 36.23a2.44 2.44 0 0 0 .886 2.728L32 61.477z"
                        fill="#fca326"
                      />
                      <path
                        d="M3.7 25.2h16.515L13.118 3.366c-.365-1.124-1.955-1.124-2.32 0z"
                        fill="#e24329"
                      />
                      <path d="M32 61.477L43.784 25.2H60.3z" fill="#fc6d26" />
                      <path
                        d="M60.3 25.2l3.58 11.02a2.44 2.44 0 0 1-.886 2.728L32 61.477z"
                        fill="#fca326"
                      />
                      <path
                        d="M60.3 25.2H43.784l7.098-21.844c.365-1.124 1.955-1.124 2.32 0z"
                        fill="#e24329"
                      />
                    </svg>
                  </a>
                </li>
                <li className="pr-5">
                  <a
                    target="_blank"
                    href="/assets/pdf/CV-JLETTEVOUETO.pdf"
                    className=""
                  >
                    <button
                      onClick={() => setOpenModal(true)}
                      class="bg-transparent border text-white bg-border hover:bg-white hover:text-slate-900  font-bold py-4 px-6 rounded-full"
                    >
                      curriculum vitae
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
      <section className="bg-[#13171F]" id="competences">
        <div className="container mx-auto p-20 ">
          <Fade direction="up" triggerOnce={true} duration={1000}>
            <div className="text-white justify-center pb-10">
              <h1 className="text-6xl font-medium text-[#17E7ED]">
                Compétences
              </h1>
            </div>
            <div className="skills-container">
              <p className="text-white border-white pb-3">Front-End</p>
              <hr className="text-center w-48 mx-auto pb-3" />
              <ul className="flex flex-row justify-center ">
                <li className="p-3">
                  <img
                    className="w-20 h-20 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
                    src="/assets/images/reactjs.png"
                  />
                </li>
                <li className="p-3 ">
                  <img
                    className="w-20 h-20 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
                    src="/assets/images/java-script.png"
                  />
                </li>
                <li className="p-3 ">
                  <img
                    className="w-20 h-20 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
                    src="/assets/images/tailwindcss.png"
                  />
                </li>
                <li className="p-3 ">
                  <img
                    className="w-20 h-20 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
                    src="/assets/images/bootstrap.png"
                  />
                </li>
                <li className="p-3">
                  <img
                    className=" w-20 h-20  transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
                    src="/assets/images/html.png"
                  />
                </li>
                <li className="p-3">
                  <img
                    className=" transition-all duration-300 cursor-pointer grayscale hover:grayscale-0 w-20 h-20"
                    src="/assets/images/css.png"
                  />
                </li>
              </ul>
              <p className="text-white  border-white  pb-3">Back-End</p>
              <hr className="text-center w-48 mx-auto pb-3" />
              <ul className="flex flex-row justify-center ">
                <li className="p-3 ">
                  <img
                    className=" w-20 h-20 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
                    src="/assets/images/laravel.png"
                  />
                </li>
                <li className="p-3 ">
                  <img
                    className=" w-20 h-20 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
                    src="/assets/images/php.png"
                  />
                </li>
                <li className="p-3 ">
                  <img
                    className=" w-20 h-20 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
                    src="/assets/images/mysql.png"
                  />
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </section>
      <section className="bg-[#13171F]" id="formation">
        <div className="container mx-auto p-20 ">
          <Fade direction="up" triggerOnce={true} duration={1000}>
            <div className=" text-white justify-center pb-10">
              <h1 className="text-center text-6xl font-medium text-[#17E7ED] ">
                Formation
              </h1>
            </div>
            <Fade direction="up" triggerOnce={true} duration={1000}>
              <StudenTimeline />
            </Fade>
          </Fade>
        </div>
      </section>
      <section className="bg-[#13171F]" id="experience">
        <div className="container  mx-auto p-20 ">
          <Fade direction="up" triggerOnce={true} duration={900}>
            <div className=" text-white justify-center pb-10">
              <h1 className="text-center text-6xl font-medium text-[#17E7ED] ">
                Expérience
              </h1>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce={true} duration={1000}>
            <ExpTimeline />
          </Fade>
        </div>
      </section>
      <section className="bg-[#13171F]" id="projets">
        <div className="container mx-auto p-20 ">
          <Fade direction="up" triggerOnce={true} duration={1000}>
            <div className=" text-white justify-center pb-10">
              <h1 className="text-center text-6xl font-medium text-[#17E7ED] ">
                Projets
              </h1>
            </div>
            <div className="flex flex-wrap justify-center">
              <Projet />
            </div>
          </Fade>
        </div>
      </section>

      <section
        style={{ backgroundImage: `url("/assets/images/background.png")` }}
        className=" bg-cover bg-end "
        id="contact"
      >
        <Fade direction="up" triggerOnce={true} duration={1000}>
          <Contact />
        </Fade>
      </section>

      <footer class=" justify-center bottom-0 left-0 z-20 w-full p-4 bg-[#13171F]  shadow md:flex  md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span class="text-sm text-white  text-center dark:text-gray-400">
          © 2023 LETTE VOUETO Jimmy
        </span>
      </footer>
    </div>
  );
}

export default App;
