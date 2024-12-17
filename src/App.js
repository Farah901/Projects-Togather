import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profiles from "./Pages/Profiles";
import NotFound from "./Pages/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './Pages/Calculator'
import WorldQuest from './Pages/WorldQuest'
import TodoApp from './Pages/TodoApp'



export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/world-flags" element={<WorldQuest />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
