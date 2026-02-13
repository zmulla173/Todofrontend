import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Todo from "./Pages/Todo";

function App(){
return(
  <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Todo" element={<Todo/>}/>
      

    </Routes>
  </div>
)
}

export default App;