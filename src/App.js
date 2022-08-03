import { Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Home from "./components/Pages/Home";
import { useState, useEffect } from "react";
import { ThemeContext } from "./components/Context/ThemeContext";
import AddTodo from "./components/Pages/AddTodo";
import EditTodo from "./components/Pages/EditTodo";
import Footer from "./components/shared/Footer";
import NotFound from "./components/Pages/NotFound";
import Loading from "./components/shared/Loading";
import DataStructure from "./components/Pages/DataStructure";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <div
            className={`h-screen mx-auto  ${
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
                <Route path="/ds" element={<DataStructure />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </ThemeContext.Provider>
      )}
    </div>
  );
}

export default App;
