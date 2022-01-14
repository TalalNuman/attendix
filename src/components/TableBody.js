import React from "react";
import axios from "axios";

export default function TableBody({ name, rollno, subject }) {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  let date = day + "/" + month + "/" + year;

  const sendData = async () => {
    await axios.patch(
      `https://sheet.best/api/sheets/07267619-a2a7-419b-a762-4506687e5e0a/rollno/${rollno}`,
      {
        subject:'P',
        date
      }
    );
  };

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
        <button
          onClick={sendData}
          className="ml-auto relative flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Mark for {subject}
          </span>
        </button>
      </tr>
    </tbody>
  );
}
