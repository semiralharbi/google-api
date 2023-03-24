import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../globalStyle";
import { darkTheme, lightTheme } from "../theme";
import { DivSquare } from "./div";
import { Form } from "./form";
import { SwitchMode } from "./switch_mode/switchMode";

function App() {
  const [theme, setTheme] = useState("Light");

  const themeToggler = () => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  };
  const themeMode = theme === "Light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <main>
        <SwitchMode themeToggler={themeToggler} theme={theme} />
        <DivSquare id="map">
          <p>First you need to enter an address!</p>
        </DivSquare>
        <Form theme={theme}></Form>
      </main>
    </ThemeProvider>
  );
}

export default App;
