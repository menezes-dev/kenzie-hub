import { Container, Form, ModalContainer } from "./styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Modal = () => {
  const formSchema = yup.object().shape({
    title: yup.string().required("O título é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { setModal, addTech } = useContext(TechContext);

  return (
    <ModalContainer>
      <Container onSubmit={handleSubmit(addTech)}>
        <div>
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={() => setModal(false)}>X</button>
        </div>
        <Form>
          <span>Nome</span>
          <input
            type="text"
            placeholder="Ex: JS, CSS, React..."
            {...register("title")}
          />
          <span className="errors">{errors.title?.message}</span>

          <span>Selecionar Status</span>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intemediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </Form>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
