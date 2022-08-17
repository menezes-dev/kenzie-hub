import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 20px;

  span {
    font-size: 20px;
    font-weight: 700;
    color: var(--color-grey-0);
  }
`;

export const Loader = styled.div`
  animation: is-rotating 1s infinite;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 16px solid var(--color-grey-3);
  border-top-color: var(--color-primary);

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
