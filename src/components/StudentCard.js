import React, { useState } from "react";
import Table from "./Table";
export default function StudentCard() {
  return (
    <div className="h-screen bg-emerald-300">
      <div className="flex flex-col h-full pt-10">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Student List</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <Table/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
