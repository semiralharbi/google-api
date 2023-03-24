import { ReactNode } from "react";
import { StyledDiv } from "./styled";
interface Props {
  id?: string;
  children: ReactNode;
}
export const DivSquare = ({ children, id }: Props) => <StyledDiv id={id}>{children}</StyledDiv>;
