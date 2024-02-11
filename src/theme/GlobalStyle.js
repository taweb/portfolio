import { createGlobalStyle } from 'styled-components';
import { colors, fontSizes, breakPoints } from './variables.js';

export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    :root {
        --currentColor: ${colors.red};

        --skills: ${colors.red};
        --projects: ${colors.yellow};
        --about: ${colors.green};
        --contact: ${colors.lightBlue};
    }

    html {
        font-size: 62.5%;
    }

    body {
        color: ${colors.black};
        height: 100%;
        box-sizing: border-box;
    }

    h1 {
        font-size: ${fontSizes.xlarge};
        margin-bottom: 1.5rem;
        position: relative;
    }

    h2 {
        font-size: ${fontSizes.large};
        margin-bottom: 1rem;
    }

    h3 {
        font-size: ${fontSizes.medium};
    }

    p, label {
        font-size: ${fontSizes.normal};
        margin-bottom: 1rem;
    }

    input, textarea {
        font-size: ${fontSizes.normal};
    }

    ul, ol {
        list-style-type: none;
    }

    a {
        color: ${colors.black};
        text-decoration: none;
        background-image: linear-gradient(${colors.black}, ${colors.black}), linear-gradient(var(--currentColor), var(--currentColor));
        background-position: 0% 100%, 0% 100%;
        background-repeat: no-repeat, no-repeat;
        background-size: 100% 2px, 100% 0px;
        @media (${breakPoints.desktop}) {
            transition: background-size .3s;
            &:hover {
                background-size: 100% 2px, 100% 100%;
            }
        }
    }
`