import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }

    body{
        background-color: var(--color-grey-4);
    }

    button{
        cursor: pointer;
    }

    :root{

        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
    
        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F8F9FA;
       
        --color-sucess: #3FE864;
        --color-negative: #E83F5B;

        --font-family: 'Inter', sans-serif;

    }
`;

export default GlobalStyle;
