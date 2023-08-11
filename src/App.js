import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Home from "./Components/Home";
import ViewBlog from "./Components/ViewBlog";
import Add from "./Components/Add";
import { useState } from "react";
import { MyContext } from "./Context/Context";



function App() {
  const [title, setTitle] = useState([]);


  return (
    <>
    <MyContext.Provider value={{title, setTitle }}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<Add/>} />
      <Route path="/view/:id" element={<ViewBlog/>} />
    </Routes>
    </MyContext.Provider>

    </>
  );
}

export default App;
