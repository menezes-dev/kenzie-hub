import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../Loading";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  if (loading) return <Loading />;

  return user ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default ProtectedRoutes;
