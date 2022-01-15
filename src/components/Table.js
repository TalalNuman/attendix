import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";
import axios from "axios";
export default function TableHead({subject}) {
  const getData = async () => {
    let response = await axios
      .get("https://sheetsu.com/apis/v1.0su/4813c0d57156")
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
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left"></div>
          </th>
        </tr>
      </thead>
      {StudentData}
    </table>
  );
}
