import styled from "styled-components";

export const StyledSelect = styled.select`
  margin: auto 5%;
  align-items: center;
  text-align: center;
  font-size: 1.3vw;
  width: 8%;
  height: 50px;
  box-shadow: 1px 1px 6px black;
  border: 1px solid ${({ theme }) => theme.color.mandy};
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile600}) {
    width: 20%;
    font-size: 3vw;
  }
`;
