import React, { useState } from "react";
import { projet } from "../Data";
import { Modal } from "flowbite-react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ReactPlayer from "react-player";

export default function Projet() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // Suivi du projet sélectionné

  const handleProjectClick = (project) => {
    setSelectedProject(project); // Définit l'état du projet sélectionné
    setOpenModal(true); // Ouvre la modale
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProject(null); // Réinitialise l'état du projet sélectionné
  };

  return (
    <>
      {projet.map((item) => (
        <div
          key={item.id} // Utilise une clé unique pour chaque projet
          onClick={() => handleProjectClick(item)}
          class="cursor-pointer hover:scale-105 duration-500 relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 m-5"
        >
          <div className="relative  h-55 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={item.image} alt="card-image" />
          </div>
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {item.intituler}
            </h5>
          </div>
        </div>
      ))}

      {openModal &&
        selectedProject && ( // Ne rend la modale que si elle est ouverte et qu'un projet est sélectionné
          <Modal dismissible show={openModal} onClose={handleCloseModal}>
            <Modal.Header>{selectedProject.intituler}</Modal.Header>
            <Modal.Body>
              <div className="space-y-6">
                {selectedProject.intituler == "Introduction JT" ? (
                  <div className="flex flex-col items-center justify-center ">
                    <ReactPlayer
                      url="/assets/videos/intro-eurotech.mp4"
                      width={540}
                      controls
                    />
                  </div>
                ) : (
                  <img src={selectedProject.image} />
                )}

                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {selectedProject.description}
                </p>
                <p>Outil :</p>
                <ul className="flex flex-row">
                  {selectedProject.outil.map((item) => (
                    <li
                      className="p-2"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={item.nom}
                    >
                      <ReactTooltip type="success" id="my-tooltip" />
                      <img className=" w-10 h-10" src={item.image} />
                    </li>
                  ))}
                </ul>
              </div>
            </Modal.Body>
            <Modal.Footer>
              {selectedProject.detail == "" ? (
                ""
              ) : (
                <a
                  href={selectedProject.detail}
                  target="_blank"
                  class="bg-transparent border text-text-slate-900  bg-border hover:bg-slate-900 hover:text-white font-bold py-2 px-3 rounded-full"
                >
                  détail
                </a>
              )}
              {selectedProject.gitlab == "" ? (
                ""
              ) : (
                <a href={selectedProject.gitlab} target="_blank" className="">
                  <img
                    className="w-10 h-10"
                    src={"/assets/images/gitlab.png"}
                  />
                </a>
              )}
              {selectedProject.github == "" ? (
                ""
              ) : (
                <a href={selectedProject.github} target="_blank" className="">
                  <img
                    className="w-10 h-10"
                    src={"/assets/images/github.png"}
                  />
                </a>
              )}
            </Modal.Footer>
          </Modal>
        )}
    </>
  );
}
