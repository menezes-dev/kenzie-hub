import { Container, Form, Register } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
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
      <img src="./logo.png" alt="logo" />
      <Form onSubmit={handleSubmit(login)}>
        <h1>Login</h1>

        <span>Email</span>
        <input type="email" placeholder="Email" {...register("email")} />
        <span className="errors">{errors.email?.message}</span>

        <span>Senha</span>
        <input type="password" placeholder="Senha" {...register("password")} />
        <span className="errors">{errors.password?.message}</span>

        <button type="submit">Entrar</button>
        <Register>
          <span>Ainda não possui uma conta?</span>
          <button onClick={() => navigate("/register")}>Cadastre-se</button>
        </Register>
      </Form>
    </Container>
  );
};

export default Login;
