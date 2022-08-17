import { useEffect } from "react";
import { createContext, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [course_module, setCourse_module] = useState("");
  const [techsList, setTechsList] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    api
      .get("/profile")
      .then((res) => {
        setTechsList(res.data.techs);
        setName(res.data.name);
        setCourse_module(res.data.course_module);
      })
      .catch((err) => console.log(err));
  }, [name]);

  const addTech = async (data) => {
    await api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
        },
      })
      .then((res) => {
        setTechsList([res.data, ...techsList]);
        setModal(false);
        toast.success("Tecnologia Adicionada!");
      })
      .catch((err) => console.log(err));
  };

  const removeTech = async (id) => {
    await api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("@token"))}`,
        },
      })
      .then((res) => {
        const newList = techsList.filter((tech) => tech.id !== id);
        setTechsList(newList);
        toast.success("Tarefa removida!");
      })
      .catch(() => toast.error("Ocorreu um erro, tente novamente!"));
  };

  return (
    <TechContext.Provider
      value={{
        techsList,
        addTech,
        removeTech,
        name,
        course_module,
        modal,
        setModal,
        setTechsList,
        setName,
        setCourse_module,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
