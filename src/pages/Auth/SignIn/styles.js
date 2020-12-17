import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${({ theme }) => theme.color};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 20px;
    line-height: 32px;
  }

  img {
    width: 230px;
  }
`;
