import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    gap: 10px;
    background: var(--color-grey-2);
    color: var(--color-grey-0);
    border-radius: 4px 4px 0px 0px;
  }

  div h3 {
    font-size: 14px;
    font-weight: 700;
  }

  div button {
    background: none;
    border: none;
    color: var(--color-grey-1);
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: var(--color-grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 4px 4px;
  span {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-grey-0);
  }

  input,
  select {
    height: 48px;
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

    margin-bottom: 20px;

    transition: 0.5s;
  }

  button:hover {
    background: var(--color-primary-focus);

    border: 1px solid var(--color-primary-focus);
  }

  .errors {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-negative);
  }
`;
