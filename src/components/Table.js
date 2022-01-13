import React,{useState} from "react";
import TableBody from "./TableBody";

export default function TableHead() {
    const [arr, setarr] = useState([
        { name: "jamal", rollno: "1201" },
        { name: "umair", rollno: "1203" },
        { name: "mohsin", rollno: "1205" },
        { name: "Rouf", rollno: "1207" },
      ]);
    const data =arr.map((student) => {
        return (
          <TableBody key={student.rollno} name={student.name} rollno={student.rollno} />
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
          <div className="font-semibold text-left">Attendance</div>
        </th>
        <th className="p-2 whitespace-nowrap">
          <div className="font-semibold text-left"></div>
        </th>
      </tr>
    </thead>
    {data}
  </table>
  );
}
