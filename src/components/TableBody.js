import React from "react";

export default function TableBody({name,rollno,attendance}) {
  return (
    <tbody className="text-sm divide-y divide-gray-100">
      <tr>
        <td className=" p-2 whitespace-nowrap">
          <div className="flex items-center">
            <div className="font-medium text-gray-800">{name}</div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-bold text-teal-600">{rollno}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-left font-medium text-green-500">Present</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Mark
            </span>
          </button>
        </td>
      </tr>
    </tbody>
  );
}
