import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path={"/register"} element={<Register />} />
      <Route path={"/"} element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path={"/home"} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default RoutesApp;
