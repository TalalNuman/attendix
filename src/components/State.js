import React, { useState, useEffect } from "react";

export default function State() {
    
  const [arr, setarr] = useState([
  ]);
  const data = arr.map((student) => {
    return (
      <div key={student.rollno}>
        <h1>{student.name}</h1>
        <h1>{student.rollno}</h1>
      </div>
    );
  });
 
  return <div>{data}</div>;
}
