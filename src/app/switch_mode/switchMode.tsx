import { FormControlLabel, Switch } from "@mui/material";
import { SwitchDiv } from "./styled";

interface Props {
  themeToggler: () => void;
  theme: string;
}

export const SwitchMode = ({ themeToggler, theme }: Props) => (
  <SwitchDiv>
    <FormControlLabel control={<Switch color={"error"} onChange={themeToggler} />} label={`Dark Mode`} />
  </SwitchDiv>
);
