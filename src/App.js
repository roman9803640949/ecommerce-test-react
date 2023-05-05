import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import { lazy } from "react";
// const Footer = lazy(() => import("./components/Footer"));
function App() {
  console.log("app");
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={PrivateRoute(<Footer />)} />
          <Route path="/add" element={PrivateRoute(<Footer />)} />
          <Route path="/update" element={PrivateRoute(<Footer />)} />
          <Route path="/logout" element={PrivateRoute(<Footer />)} />
          <Route path="/profile" element={PrivateRoute(<Footer />)} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
