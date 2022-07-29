import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Home = () => {
  const baseURL = "http://localhost:5000/all";

  const [todos, setTodo] = useState([]);

  const navigate = useNavigate();

  useEffect(
    () => {
      fetch(`${baseURL}`)
        .then((res) => res.json())
        .then((data) => {
          setTodo(data);
          // console.log(setTodo)
          // console.log(data)
          // console.log(todos)
        });
    },
    [todos]
  );
  
  const editTodo = async(todo) => {
    await navigate(`/edit/${todo._id}`, { state: todo });
  }

  const confirmDelete = async (id) => {
    const agree = window.confirm("Confirm?");
    if (agree) {
      const url = `http://localhost:5000/all/${id}`;
      console.log(id);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = todos.filter((todo) => todo._id !== id);
          setTodo(remaining);
        });

      // toast.error("Product Deleted 😭", {
      //   position: "top-center",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      // });
    }
  };

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
                <td>{(todo.Description).length > 100 ? (todo.Description).slice(0, 50) : (todo.Description) }</td>
                <td>{todo.Deadline}</td>
                <th>
                  <button class="btn btn-outline bg-amber-500 text-white btn-xs" onClick={()=>editTodo(todo)}>
                    Edit
                  </button>
                </th>
                <th>
                  <button class="btn btn-outline bg-red-500 text-white btn-xs" onClick={() => confirmDelete(todo._id)}>
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
