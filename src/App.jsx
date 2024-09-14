import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Outlet, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";

function Template() {
  return (
    <>
      <NavBar />
      <div
        className="mx-3 bg-local bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(src/assets/backG.jpg)" }}
      >
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<Home />} />
        <Route path="/filter/:status" element={<Home />} />
        <Route path="/view/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
