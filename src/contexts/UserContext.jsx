import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { TechContext } from "./TechContext";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { setName, setCourse_module, setTechsList } = useContext(TechContext);

  useEffect(() => {
    async function loadUser() {
      const token = JSON.parse(localStorage.getItem("@token"));
      if (token) {
        try {
          api.defaults.headers.Authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
          localStorage.clear();
        }
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  const login = async (data) => {
    await api
      .post("/sessions", data)
      .then((response) => {
        setUser(response.data.user);

        localStorage.setItem("@token", JSON.stringify(response.data.token));
        localStorage.setItem("@userid", JSON.stringify(response.data.user.id));

        setName(response.data.user.name);
        setCourse_module(response.data.user.course_module);
        setTechsList(response.data.user.techs);

        toast.success("Logado com sucesso!");
        navigate("/home", { replace: true });
      })
      .catch(() => toast.error("Email ou senha incorretos!"));
  };

  const register = async (data) => {
    await api
      .post("/users", data)
      .then(() => {
        toast.success("Cadastrado com sucesso!");
        navigate("/");
      })
      .catch(() => toast.error("Email já cadastrado!"));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        register,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
