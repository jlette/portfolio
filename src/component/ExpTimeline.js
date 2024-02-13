import React from "react";
import { exp } from "../Data";
import { MdWorkOutline } from "react-icons/md";

export default function ExpTimeline() {
  const sortedExp = [...exp].sort((a, b) => b.id - a.id); // Tri par ID en ordre décroissant

  return (
    <ol className="items-center justify-center lg:flex display-block">
      {sortedExp.map((item) => (
        <li className="relative mb-6 mx-0 lg:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 lg:ring-8 dark:ring-gray-900 shrink-0">
              <MdWorkOutline className="text-[#00AB94]" />
            </div>
            <div
              className="hidden lg:block w-full bg-gray-200 h-0.5 dark:bg-gray-700 lg:flex-1" // Add lg:flex-1 class
            ></div>
          </div>
          <div className="mt-3 lg:pe-8">
            <h3 className="text-lg font-semibold text-white dark:text-white">
              {item.intituler}
            </h3>
            <time className="block mb-2 text-lg font-normal leading-none text-white dark:text-gray-500">
              {item.date}
            </time>
            <p className="text-base font-normal text-white dark:text-gray-400">
              {item.entreprise}
            </p>
            <a target="_blank" href={item.pdf} className="">
              <button class="bg-transparent border text-white bg-border hover:bg-white hover:text-slate-900  font-bold py-2 px-3 rounded-full">
                détail
              </button>
            </a>
          </div>
        </li>
      ))}
    </ol>
  );
}
