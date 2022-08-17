import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (max-width: 1000px) {
    padding: 0 20px;
  }

  /* form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-left: 25%;
    margin-right: 25%;
  } */
`;

export const Header = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-grey-3);
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 55px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;

    background: var(--color-grey-3);
    border: 1px solid var(--color-grey-3);
    border-radius: 4px;

    color: var(--color-grey-0);

    transition: 0.5s;
  }

  button:hover {
    background: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
  }
`;

export const InfoUser = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-grey-3);
`;

export const InfoUserContent = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-0);

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const Tecnology = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TecnologyTitle = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-0);

  button {
    width: 32px;
    height: 32px;
    color: var(--color-grey-0);
    background: var(--color-grey-3);
    border: 1px solid var(--color-grey-3);
    border-radius: 4px;
    transition: 0.5s;
  }

  button:hover {
    background: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
  }
`;

export const TecnologyList = styled.ul`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: var(--color-grey-3);
  padding: 22px;
  border-radius: 4px;

  margin-bottom: 50px;

  @media (max-width: 450px) {
    padding: 10px;
  }
`;

export const Item = styled.li`
  width: 100%;
  height: 49px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-4);
  padding: 13px 22px;
  border-radius: 4px;

  color: var(--color-grey-0);

  transition: 0.3s;

  &:hover {
    background-color: var(--color-grey-2);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
  }

  @media (max-width: 450px) {
    div span {
      display: none;
    }
  }
`;
