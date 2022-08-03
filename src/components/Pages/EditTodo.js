import React, { useState, useRef } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";



const EditTodo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const { _id, Task, Description, Deadline, Complete } = location.state;

  const handleEditTodo = async (e) => {
    e.preventDefault();
    const Task = e.target.TaskName.value;
    // const Description = e.target.TaskDescription.value;
    const Deadline = e.target.TaskDate.value;
    const Complete = false;

    const task = {
      Task,
      // Description,
      Deadline,
      // Complete,
    };

    console.log(task);
    if (task) {
      // console.log("All inputs are working");
    } else {
      // console.log("All inputs are empty");
    }
    const api = `https://todoapp-auvee.herokuapp.com/edit/${_id}`;
    fetch(api, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Working and the Data", data);
        e.target.reset();
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
              placeholder={Task}
              name="TaskName"
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
