import { useState, lazy, Suspense } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
// COmponents lazilt loaded
const Navbar = lazy(() => import("./paths/Navbar"));

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
