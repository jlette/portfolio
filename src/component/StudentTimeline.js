import React from "react";
import { PiStudentFill } from "react-icons/pi";
import { formation } from "../Data";

export default function StudenTimeline() {
  // Sort by ID in descending order
  const sortedFormation = [...formation].sort((a, b) => b.id - a.id);

  return (
    <ol className="items-center lg:flex display-block">
      {sortedFormation.map((item, index) => (
        <li key={index} className="relative">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 lg:ring-8 dark:ring-gray-900 shrink-0">
              <PiStudentFill className="text-[#00AB94]" />
            </div>
            <div
              className={`hidden lg:block w-full bg-gray-200 h-0.5 dark:bg-gray-700 lg:flex-1 ${
                index + 1 === sortedFormation.length && "lg:mt-1" // Add final-item styling
              }`}
            ></div>
          </div>
          <div className="mt-3 lg:pe-8">
            <h3 className="text-lg font-semibold text-white dark:text-white">
              {item.diplome}
            </h3>
            <time className="block mb-2 text-lg font-normal leading-none text-white dark:text-gray-500">
              {item.date}
            </time>
            <p className="text-base font-normal text-white dark:text-gray-400">
              {item.etablissement}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
