import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    .text {
        color: ${({ theme }) => theme.text};
        transition: all 0.50s linear;
    }

    #header {
        background-color: ${({ theme }) => theme.headerBackground}
    }

    #logo-icon {
        color: ${({ theme }) => theme.logoColor}
    }

    #toggle-icon {
        color: ${({ theme }) => theme.logoColor}
    }
`;