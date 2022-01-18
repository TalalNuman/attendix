import React, { useState } from "react";
import Table from "./Table";

export default function StudentCard() {
 const [subject, setSubject] = useState('DB')
 const [date, setDate] = useState(new Date())
    const changeHandler = (e) => {
      setSubject(e.target.value)
  }
    const dateChangeHandler = (e) => {
      setDate(e.target.value)
      
  }

  return (
    <div className="h-full bg-emerald-200">
      <div className="flex flex-col h-full pt-10">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="flex  px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Student List</h2>
              <input type='date' onChange={dateChangeHandler} className="mx-auto"/>
            <select  value={subject} onChange={changeHandler} id="subject" className="ml-auto">
              <option  value="DB">DataBase</option>
              <option  value="OS">Operating System</option>
            </select>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <Table subject={subject} date={date}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
