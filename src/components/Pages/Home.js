import React, { useState, useEffect } from "react";

const Home = () => {
  const baseURL = "http://localhost:5000/all";

  const [todos, setTodo] = useState([]);

  useEffect(
    () => {
      fetch(`${baseURL}`)
        .then((res) => res.json())
        .then((data) => {
          setTodo(data);
          console.log(setTodo)
          console.log(data)
          console.log(todos)
        });
    },
    [todos]
  );

  return (
    <div className="w-4/5 mx-auto my-7">
      {/* <div class="divider bg-black"></div> */}
      <div className="overflow-x-auto">
        <table className={`table w-full `}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Date</th>
              {/* <th>Status</th> */}
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr>
                <th>{index+1}</th>
                <td>{todo.Task}</td>
                <td>{todo.Description}</td>
                <td>{todo.Deadline}</td>
               
                <th>
                  <button class="btn btn-outline bg-amber-500 text-white btn-xs">
                    Edit
                  </button>
                </th>
                <th>
                  <button class="btn btn-outline bg-red-500 text-white btn-xs">
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
