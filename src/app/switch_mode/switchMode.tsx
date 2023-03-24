import { FormControlLabel, Switch } from "@mui/material";
import { SwitchDiv } from "./styled";

interface Props {
  themeToggler: () => void;
  theme: string;
}

export const SwitchMode = ({ themeToggler, theme }: Props) => (
  <SwitchDiv>
    <FormControlLabel control={<Switch onChange={themeToggler} />} label={`${theme} Mode`} />
  </SwitchDiv>
);
