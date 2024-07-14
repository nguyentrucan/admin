import React, { useState } from "react";

const AddLesson = () => {
  return (
    <div className="px-2 lg:px-7 py-6 min-w-screen min-h-screen ">
      <div className="w-full p-4 bg-[#968ef0] rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[#000000] uppercase font-bold text-3xl mb-4 w-full text-center">
            Add Lesson
          </h1>
        </div>
        <form>
          <div className="flex flex-col w-full gap-1 mb-3">
            <label htmlFor="class">Class</label>
            <input
              className="px-3 py-2 outline-none border border-slate-400 rounded-md"
              type="text"
              name="class"
              placeholder="Class"
              id="class"
              required
            />
          </div>
          <div className="flex flex-col w-full gap-1 mb-3">
            <label htmlFor="phase">Phase</label>
            <input
              className="px-3 py-2 outline-none border border-slate-400  rounded-md"
              type="number"
              name="phase"
              placeholder="Phase"
              id="phase"
              required
            />
          </div>
          <div className="flex flex-col w-full gap-1 mb-3">
            <label htmlFor="classify">Classify</label>
            <select
              className="px-3 py-2 outline-none border border-slate-400  rounded-md"
              name="classify"
              required
            >
              <option value={""} disabled>
                Select
              </option>
              <option value={"Done"}>Done</option>
              <option value={"Submitted"}>Submitted</option>
              <option value={"Skip"}>Skip</option>
            </select>
          </div>
          <div className="flex flex-col w-full gap-1 mb-3">
            <label htmlFor="lesson">Lesson</label>
            <input
              className="px-3 py-2 outline-none border border-slate-400 rounded-md"
              type="text"
              name="lesson"
              placeholder="Lesson"
              id="lesson"
              required
            />
          </div>
          <div className="flex flex-col w-full gap-1 mb-3">
            <label htmlFor="code">Code</label>
            <input
              className="px-3 py-2 outline-none border border-slate-400 rounded-md"
              type="text"
              name="code"
              placeholder="K41Ph"
              id="code"
              required
              disabled
            />
          </div>
          <div className="flex flex-col w-full gap-1 mb-3">
            <label htmlFor="code">Student</label>
            <input
              className="px-3 py-2 outline-none border border-slate-400 rounded-md"
              type="text"
              name="code"
              placeholder="Student"
              id="code"
              required
            />
          </div>
          <div className="flex flex-col w-full gap-1 mb-3">
            <label htmlFor="code">Coach</label>
            <input
              className="px-3 py-2 outline-none border border-slate-400 rounded-md"
              type="text"
              name="code"
              placeholder="Coach"
              id="code"
              required
            />
          </div>
          <button className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded px-7 py-2 mb-3">
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLesson;
