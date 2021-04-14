import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body {
       background-color: ${({ theme }) => theme.body};
    }

    .textTheme {
        color: ${({ theme }) => theme.text}; 
        transition: all 0.50s linear;            
    }

    #header {
        background-color: ${({ theme }) => theme.headerBackground};
    }

    #logo-icon {
        color: ${({ theme }) => theme.logoColor};
    }

    #toggle-icon {
        color: ${({ theme }) => theme.logoColor};
    }

    .edit,
    .preview {
        background-color: ${({ theme }) => theme.background};
        border: solid .1rem ${({ theme }) => theme.text};
    }

    .edit-header,
    .preview-header {
        background-color: ${({ theme }) => theme.textHeader};
        border-bottom: solid .1rem ${({ theme }) => theme.text};
    }

    .preview table tr {
        background-color: ${({ theme }) => theme.background};
    }

    .preview table tr:nth-child(2n) {
        background-color: ${({ theme }) => theme.tableColor};
}
`;