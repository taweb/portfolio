import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes, breakPoints } from '../theme/variables.js';

const ButtonContainer = styled.a`
    width: 100%;
    padding: 1.2rem 0;
    text-decoration: none;
    text-align: center;
    font-size: ${fontSizes.normal};
    background: ${colors.black};
    color: ${colors.white};
    cursor: pointer;
    @media (${breakPoints.desktop}) {
        transition: none;
    }
    :hover {
        opacity: 0.8;
    }
    :focus {
        outline: 2px solid white;
        outline-offset: -5px;
    }
`

const Button = ({children, ...props}) => {
    return (
        <ButtonContainer {...props}>
                {children}
        </ButtonContainer>
    );
}
 
export default Button;