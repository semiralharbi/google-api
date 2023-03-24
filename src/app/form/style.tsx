import styled from "styled-components";

export const StyledForm = styled.form`
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  max-width: 80%;
  width: 100%;
`;

export const StyledButton = styled.button`
  width: 10%;
  font-size: 1.5vw;
  text-align: center;
  color: black;
  background-color: white;
  box-shadow: 1px 1px 6px black;
  border: 1px solid ${({ theme }) => theme.color.mandy};
  border-radius: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile600}) {
    width: 20%;
    font-size: 3vw;
  }
  &:hover {
    background-color: #ff000050;
  }
`;

export const StyledInput = styled.input`
  padding-left: 10px;
  margin: auto 2%;
  font-size: 2vw;
  width: 60%;
  height: 50px;
  box-shadow: 1px 1px 6px black;
  border: 1px solid ${({ theme }) => theme.color.mandy};
  border-radius: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile600}) {
    width: 60%;
    padding-left: 10px;
    font-size: 3vw;
  }
  &:focus {
    outline: none;
  }
`;
