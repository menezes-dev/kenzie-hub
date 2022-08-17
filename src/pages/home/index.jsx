import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  HeaderContent,
  InfoUser,
  InfoUserContent,
  Item,
  Tecnology,
  TecnologyList,
  TecnologyTitle,
} from "./styles";
import { TechContext } from "../../contexts/TechContext";
import Modal from "../../components/Modal";

const Home = () => {
  const { techsList, removeTech, name, course_module, modal, setModal } =
    useContext(TechContext);

  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src="./logo.png" alt="Logo Kenzie Hub" />
          <button onClick={logout}>Sair</button>
        </HeaderContent>
      </Header>
      <InfoUser>
        <InfoUserContent>
          <h3>{name}</h3>
          <span>{course_module}</span>
        </InfoUserContent>
      </InfoUser>
      <Tecnology>
        <TecnologyTitle>
          <span>Tecnologias</span>
          <button onClick={() => setModal(true)}>+</button>
        </TecnologyTitle>
        <TecnologyList>
          {techsList.map((tech) => (
            <Item key={tech.id}>
              <span>{tech.title}</span>
              <div>
                <span>{tech.status}</span>
                <button onClick={() => removeTech(tech.id)}>
                  <img src="trash.png" alt="" />
                </button>
              </div>
            </Item>
          ))}
        </TecnologyList>
      </Tecnology>

      {modal && <Modal />}
    </Container>
  );
};

export default Home;
