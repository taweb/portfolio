import React from 'react';
import styled from 'styled-components';
import CustomLink from './link';
import {fontSizes} from '../theme/variables';


const LinkContainer = styled.div`
    font-size: ${fontSizes.normal};
`

const SocialLinks = ({className, color}) => {
    return ( 
        <LinkContainer className={className}>
            <CustomLink
                type={'none'}
                as='a'
                href='https://github.com/taweb'
                color={color}
            >
                GitHub
            </CustomLink>
            <CustomLink
                type={'none'}
                as='a'
                href='https://www.linkedin.com/in/tim-atherton-7726bb5a/'
                color={color}
            >
                LinkedIn
            </CustomLink>
            <CustomLink
                type={'none'}
                as='a'
                href='https://www.instagram.com/th_atherton/'
                color={color}
            >
                Instagram
            </CustomLink>
        </LinkContainer>
    );
}
 
export default SocialLinks;