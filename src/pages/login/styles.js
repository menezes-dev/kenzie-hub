import styled from "styled-components";

export const Container = styled.div`
  width: 370px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 30px 0;

  img {
    margin-bottom: 36px;
  }

  @media (max-width: 415px) {
    width: 300px;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  color: var(--color-grey-0);
  background-color: var(--color-grey-3);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  gap: 20px;
  margin-bottom: 33px;

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;

    width: 100%;
    height: 48px;

    background: var(--color-grey-2);

    border: 1px solid var(--color-grey-2);
    border-radius: 4px;
    color: var(--color-grey-0);
  }

  h1 {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
  }

  span {
    font-size: 12px;
    font-weight: 400;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22px;
    gap: 10px;

    width: 100%;
    height: 48px;

    background: var(--color-primary);

    border: 1px solid var(--color-primary);
    border-radius: 4px;

    color: var(--color-grey-0);

    font-size: 16px;
    font-weight: 500;
    transition: 0.5s;
  }

  button:hover {
    background-color: var(--color-primary-focus);
    border: 1px solid var(--color-primary-focus);
  }

  .errors {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-negative);
  }
`;

export const Register = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 22px 0;
  gap: 22px;
  color: var(--color-grey-0);

  span {
    font-size: 12px;
    font-weight: 400;
  }

  button {
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22px;
    gap: 10px;

    background: var(--color-grey-1);
    border: 1px solid var(--color-grey-1);
    border-radius: 4px;

    color: var(--color-grey-0);
    font-size: 16px;
    font-weight: 500;

    transition: 0.5s;
  }

  button:hover {
    background-color: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
  }
`;
