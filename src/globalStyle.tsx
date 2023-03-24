import { createGlobalStyle, DefaultTheme, GlobalStyleComponent, ThemeProps } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {  
box-sizing: border-box;
font-family: sans-serif;
line-height: 1.5;
}

body {
background: ${({ theme }: any) => theme.body};
color: ${({ theme }: any) => theme.text};
font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
transition: all 0.50s linear;
}

*,
::after,
::before {
box-sizing: inherit;
}
`;
