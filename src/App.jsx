import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
const App = () => {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/Login" || location.pathname === "/Register";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
