import React, { useState, useEffect } from "react";
import { uid } from "uid";
import { database } from "../../firebase.init.js";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useParams, useNavigate } from "react-router-dom";
const Home = () => {
  const baseURL = "https://todoapp-auvee.herokuapp.com/all";
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    onValue(ref(database, `/tasks/`), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
          // console.log(todo)
        });
      }
    });
  }, []);

  const editTodo = async (todo) => {
    await navigate(`/edit/${todo.uidd}`, { state: todo });
  };


  const confirmDelete = async (id) => {
    const agree = window.confirm("Confirm Delete?");
    if (agree) {
      remove(ref(database, `/tasks/${id}`));
    }
  };

  const handleComplete = (id) => {
    const agree = window.confirm("Complete?");
    update(ref(database, `/tasks/${id}`), {
      status: true,
    });

  };

  const handlePending = (id) => {
    const agree = window.confirm("Not Complete?");
    update(ref(database, `/tasks/${id}`), {
      status: false,
    });
    
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
              
              <th className="text-1xl">Date</th>
              <th className="text-1xl">Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              
              <tr key={index}>
                {(console.log(todo))}
                <th>{index + 1}</th>
                
                

                {todo.status === true && (
                  <td className="line-through text-green-500">{todo.name}</td>
                )}
                {todo.status === false && (
                  <td className="no-underline">{todo.name}</td>
                )}

                

                {todo.status === true && (
                  <td className="line-through text-green-500">{todo.date}</td>
                )}
                {todo.status === false && (
                  <td className="no-underline">{todo.date}</td>
                )}

                
                <td>
                  {todo.status === "" && (
                    <button
                      onClick={() => handleComplete(todo._id)}
                      className="btn btn-outline bg-blue-500 text-white btn-xs"
                    >
                      Pending
                    </button>
                  )}
                  {todo.status === false && (
                    <button
                      className="btn btn-outline bg-blue-500 text-white btn-xs"
                      onClick={() => handleComplete(todo.uidd)}
                    >
                      Pending
                    </button>
                  )}
                  {todo.status === true && (
                    <button className="btn btn-outline bg-green-500 text-white btn-xs"
                    onClick={() => handlePending(todo.uidd)}
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
                    onClick={() => confirmDelete(todo.uidd)}
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
