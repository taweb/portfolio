import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
    margin-bottom: 4rem;
    display: inline-block;
    &::after {
        content: "";
        position: absolute;
        height: 5px;
        background-color: var(--currentColor);
        width: 100%;
        bottom: -10px;
        left: 0;
    }
`

const PageHeader = ({children}) => {
    return ( 
        <StyledHeader>{children}</StyledHeader>
    );
}
 
export default PageHeader;