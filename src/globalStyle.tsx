import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        html {
        box-sizing: border-box;
        font-family: sans-serif;
        line-height: 1.5;
        color: black;
        
        }

        *,
        ::after,
        ::before {
        box-sizing: inherit;
        }
`;
