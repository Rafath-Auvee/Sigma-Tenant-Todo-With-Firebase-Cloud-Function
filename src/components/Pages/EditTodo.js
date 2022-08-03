import React, { useState, useRef } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { database } from "../../firebase.init.js";

const EditTodo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const { name, date, uidd, status } = location.state;

  const handleEditTodo = async (e) => {
    e.preventDefault();

    const Task = e.target.TaskName.value;
    const Deadline = e.target.TaskDate.value;

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      update(ref(database, `/tasks/${uidd}`), {
        name: Task,
        uidd: uidd,
        date: Deadline,
        status: status,
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    });
  };

  return (
    <div className={`max-w-screen-md mx-auto p-5 mt-5 pt-6 h-screen`}>
      <div className="text-center mb-16">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Edit <span className="text-indigo-600">Todo</span>
        </h3>
      </div>

      <form className={`w-full `} onSubmit={handleEditTodo}>
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
              placeholder={name}
              name="TaskName"
              required
            />
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
              name="TaskDate"
              id="grid-last-name"
              type="date"
              required
              // onFocus={Deadline} onBlur={Deadline}
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

export default EditTodo;
