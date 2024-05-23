import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Subscription from "./Components/Pages/Subscription";
import Content from "./Components/Pages/Content";
import Course from "./Components/Pages/Course";
const App = () => {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/Login" ||
    location.pathname === "/Register" ||
    location.pathname === "/Subscription";
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
      <Routes>
        <Route path="/Subscription" element={<Subscription />} />
      </Routes>
      <Routes>
        <Route path="/Course/:title/:deskripsi" element={<Course />} />
      </Routes>
      <Routes>
        <Route path="/content/:title/:image" element={<Content />} />
      </Routes>
    </>
  );
};

export default App;
