import styled from "styled-components";

export const Container = styled.div`
  width: 370px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 50px 0;

  @media (max-width: 415px) {
    width: 300px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  button {
    width: 68px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;
    background: var(--color-grey-3);
    border: 1px solid var(--color-grey-3);
    border-radius: 4px;

    font-size: 12px;
    font-weight: 600;
    color: var(--color-grey-0);

    transition: 0.5s;
  }

  button:hover {
    background: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: var(--color-grey-3);
  text-align: left;
  color: var(--color-grey-0);
  gap: 20px;

  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 20px;
    gap: 20px;
  }

  div h1 {
    font-size: 18px;
    font-weight: 700;
  }

  div h3 {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-grey-1);
  }

  span {
    font-size: 12px;
    font-weight: 400;
  }

  .errors {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-negative);
  }

  input,
  select {
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
    color: var(--color-grey-1);
  }

  button {
    box-sizing: border-box;

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

    font-size: 16px;
    font-weight: 500;
    color: var(--color-grey-0);

    margin-bottom: 40px;

    transition: 0.5s;
  }

  button:hover {
    background: var(--color-primary-focus);

    border: 1px solid var(--color-primary-focus);
  }
`;
