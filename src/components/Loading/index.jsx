import { Container, Loader } from "./styles";

const Loading = () => {
  return (
    <Container>
      <span>Carregando...</span>
      <Loader></Loader>
    </Container>
  );
};

export default Loading;
