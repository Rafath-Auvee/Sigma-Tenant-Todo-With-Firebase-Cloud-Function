import React, { useState } from "react";
import { database } from "../../firebase.init.js";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";

const AddTodo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTodo = async (e) => {
    e.preventDefault();
    
    const uidd = uid();
    
    const Task = e.target.TaskName.value;
    const Deadline = e.target.TaskDate.value;
    const Status = false
    

    set(ref(database, `/tasks/${uidd}`), {
      name: Task,
      date: Deadline,
      uidd: uidd,
      status: Status
    });
    e.target.reset();
    alert("Task Added Successfully!!")

  };

  return (
    <div className={`max-w-screen-md mx-auto p-5 mt-5 pt-6 h-screen`}>
      <div className="text-center mb-16">
        {/* <p className="mt-4 text-3xl md:text-5xl lg:text-7xl text-center leading-7 text-indigo-500 font-regular ">
          AddTodo
        </p> */}
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Add <span className="text-indigo-600">Todo</span>
        </h3>
      </div>

      <form onSubmit={handleTodo} className={`w-full `}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Task Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="TaskName"
              placeholder="Rafath"
              required
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Task Deadline
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="date"
              name="TaskDate"
              required
              placeholder="mm-dd-yyyy"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          
          <div className="flex justify-between w-full px-3">
            <button
              className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
              type="submit"
            >
              Done
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
