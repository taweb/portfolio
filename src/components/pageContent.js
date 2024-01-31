import React from 'react';
import styled from 'styled-components';
import {breakPoints, contentWidth} from '../theme/variables';

const PageContentWrapper = styled.div`
    padding: 2rem 1.5rem;
    max-width: ${contentWidth};
    margin: 0 auto;
    @media(${breakPoints.desktop}) {
        padding: 3rem 3rem;
    }
    @media(${breakPoints.xldesktop}) {
        padding: 3rem 10rem;
    }
`

const PageContent = ({children}) => {
    return ( 
        <PageContentWrapper>
            {children}
        </PageContentWrapper>
     );
}
 
export default PageContent;