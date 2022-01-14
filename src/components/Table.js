import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";
import axios from "axios";
export default function TableHead({subject}) {
  const getData = async () => {
    let response = await axios
      .get("https://sheet.best/api/sheets/07267619-a2a7-419b-a762-4506687e5e0a")
      .then((response) => response.data);
    setData(response);
  };
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState([]);

  const StudentData = data.map((student) => {
    return (
      <TableBody
        key={student.rollno}
        name={student.name}
        rollno={student.rollno}
        subject={subject}
      />
    );
  });
  return (
    <table className="table-auto w-full">
      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
        <tr>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">Name</div>
          </th>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">Roll Number</div>
          </th>
        </tr>
      </thead>
      {StudentData}
    </table>
  );
}
