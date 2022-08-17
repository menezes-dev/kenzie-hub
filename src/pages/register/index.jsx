import { Container, Form, Header } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Register = () => {
  const { register: registerUser } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Email Obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/(\d)/, "A senha deve conter ao menos 1 número")
      .matches(/(\W)|_/, "A senha deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "A senha deve conter ao menos 8 dígitos"),
    confirm_password: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .equals([yup.ref("password"), null], "As senhas não iguais"),
    bio: yup.string().required("Biografia obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo obrigatório"),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <Container>
      <Header>
        <img src="logo.png" alt="kenzie hub" />
        <button onClick={() => navigate("/")}>Voltar</button>
      </Header>
      <Form onSubmit={handleSubmit(registerUser)}>
        <div>
          <h1>Crie sua conta</h1>
          <h3>Rápido e grátis, vamos nessa</h3>
        </div>
        <span>Nome</span>
        <input
          type="text"
          placeholder="Digite seu nome aqui"
          {...register("name")}
        />
        <span className="errors">{errors.name?.message}</span>

        <span>Email</span>
        <input
          type="email"
          placeholder="Digite seu email aqui"
          {...register("email")}
        />
        <span className="errors">{errors.email?.message}</span>

        <span>Senha</span>
        <input
          type="password"
          placeholder="Digite seu senha aqui"
          {...register("password")}
        />
        <span className="errors">{errors.password?.message}</span>

        <span>Confirmar senha</span>
        <input
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("confirm_password")}
        />
        <span className="errors">{errors.confirm_password?.message}</span>

        <span>Bio</span>
        <input type="text" placeholder="Fale sobre você" {...register("bio")} />
        <span className="errors">{errors.bio?.message}</span>

        <span>Contato</span>
        <input
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <span className="errors">{errors.contact?.message}</span>

        <span>Módulo</span>
        <select {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro Módulo
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo Módulo
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro Módulo
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto Módulo
          </option>
        </select>
        <span className="errors">{errors.course_module?.message}</span>
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
};

export default Register;
