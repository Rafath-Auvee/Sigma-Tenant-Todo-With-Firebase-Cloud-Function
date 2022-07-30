import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Home = () => {
  const baseURL = "https://todoapp-auvee.herokuapp.com/all";
  const [todos, setTodo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${baseURL}`)
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        // console.log(setTodo)
        // console.log(data)
        // console.log(todos)
      });
  }, [todos]);

  const editTodo = async (todo) => {
    await navigate(`/edit/${todo._id}`, { state: todo });
  };

  const confirmDelete = async (id) => {
    const agree = window.confirm("Confirm?");
    if (agree) {
      const url = `https://todoapp-auvee.herokuapp.com/all/${id}`;
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

      //   toast.error("Product Deleted 😭", {
      //   position: "top-center",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      // });
    }
  };

  const handleComplete = (id) => {
    const agree = window.confirm("Complete?");
    const url = `https://todoapp-auvee.herokuapp.com/all/${id}`;
    fetch(`${url}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    }).then((res) => res.json().then((data) => {}));
  };

  const handleError = (id) => {
    const agree = window.confirm("Not Complete?");
    const url = `https://todoapp-auvee.herokuapp.com/all/${id}`;
    fetch(`${url}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    }).then((res) => res.json().then((data) => {}));
  };

  return (
    <div className="container mx-auto my-7 px-5">

      <h1 className="text-center text-5xl mb-5"> <a href="https://github.com/Rafath-Bin-Zafar-Auvee/" className="btn btn-lg btn-outline bg-green-500" target="_blank" rel="noopener noreferrer"> Developed By : Rafath Bin Zafar Auvee 😎</a></h1>
      {/* <div className="divider bg-black"></div> */}
      <div className="overflow-x-auto">
        <table className={`table w-full `}>
          <thead>
            <tr className="bg-green-500">
              <th></th>
              <th className="text-1xl">Name</th>
              <th className="text-1xl">Description</th>
              <th className="text-1xl">Date</th>
              <th className="text-1xl">Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                {todo.Complete === true && (
                  <td className="line-through text-green-500">{todo.Task}</td>
                )}
                {todo.Complete === false && (
                  <td className="no-underline">{todo.Task}</td>
                )}

                {todo.Complete === true && (
                  
                    <td className="break-all w-1/5 line-through text-green-500">
                      {todo.Description.length > 100
                        ? todo.Description.slice(0, 20)
                        : todo.Description}
                    </td>
                  
                )}
                {todo.Complete === false && (
                  
                    <td className="break-all w-1/5">
                      {todo.Description.length > 100
                        ? todo.Description.slice(0, 50)
                        : todo.Description}
                    </td>
                  
                )}

                {todo.Complete === true && (
                  <td className="line-through text-green-500">{todo.Deadline}</td>
                )}
                {todo.Complete === false && (
                  <td className="no-underline">{todo.Deadline}</td>
                )}

                
                <td>
                  {todo.Complete === "" && (
                    <button
                      onClick={() => handleComplete(todo._id)}
                      className="btn btn-outline bg-blue-500 text-white btn-xs"
                    >
                      Pending
                    </button>
                  )}
                  {todo.Complete === false && (
                    <button
                      className="btn btn-outline bg-blue-500 text-white btn-xs"
                      onClick={() => handleComplete(todo._id)}
                    >
                      Pending
                    </button>
                  )}
                  {todo.Complete === true && (
                    <button className="btn btn-outline bg-green-500 text-white btn-xs"
                    onClick={() => handleError(todo._id)}
                    >
                      Complete
                    </button>
                  )}
                </td>
                <th>
                  <button
                    className="btn btn-outline bg-amber-500 text-white btn-xs"
                    onClick={() => editTodo(todo)}
                  >
                    Edit
                  </button>
                </th>
                <th>
                  <button
                    className="btn btn-outline bg-red-500 text-white btn-xs"
                    onClick={() => confirmDelete(todo._id)}
                  >
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
