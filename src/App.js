import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./components/Pages/Home";
import { useState } from "react";
import { ThemeContext } from "./components/Context/ThemeContext";
import AddTodo from "./components/Pages/AddTodo";
import EditTodo from "./components/Pages/EditTodo";
import Footer from "./components/shared/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div
        className={`h-screen container mx-auto px-4 ${
          isDarkMode
            ? "bg-black text-white ease-in duration-500 "
            : "bg-white text-black ease-in duration-500 "
        }`}
      >
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddTodo />} />
            <Route path="/edit/:id" element={<EditTodo />} />
          </Routes>
          <Footer/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
