import styled from "styled-components";

export const StyledDiv = styled.div`
  margin: 24px auto;
  text-align: center;
  align-items: center;
  display: grid;
  max-width: 80%;
  width: 100%;
  height: 36rem;
  border: 1px solid ${({ theme }) => theme.color.mandy};
  border-radius: 20px;
  box-shadow: 2px 2px 10px black;
  background: white;
  color: black;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile600}) {
    max-width: 100%;
    height: 80vh;
  }
`;
