import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Outlet, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";

function Template() {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat w-full"
        // style={{ backgroundImage: "url(src/assets/backG.jpg)" }}
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/gs-DGCbuLZJbTYTBIyWhxFN1l_km47khDQuY8IBR9n8QgONLFYm1FzN8eC503g7oqKaNU2n5nwM9OckNV0h5dDNtIw=s1600-w1600-h1000')`,
        }}
      >
        <NavBar />
        <div className="relative z-10 h-full w-full">
          <Outlet />
        </div>
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
