import React, {Component} from 'react';
import CustomLink from './link';
import styled from 'styled-components';
import { fontSizes, colors, breakPoints } from '../theme/variables';

const StyledLogo = styled.div`
    @media (${breakPoints.desktop}) {
      width: 100%;
    }
`

const StyledCustomLink = styled(CustomLink)`
    padding-right: 30px;
    font-size: ${fontSizes.large};
    color: ${colors.secondaryBlue};
    font-weight: bold;
    display: inline-block;
    width: 100%;
    @media (${breakPoints.desktop}) {
        padding-right: 0;
    }
`

class Logo extends Component {
    toggle = () => {
        const {isOpen, onClickHandler} = this.props
        if (!isOpen) {
            return
        }
        onClickHandler()
    }

    render() {
        const {siteTitle} = this.props
        return (
            <StyledLogo>
                <StyledCustomLink
                    to='/'
                    type={'none'}
                    onClick={this.toggle}
                >
                    {siteTitle}
                </StyledCustomLink>
            </StyledLogo>
        );
    }
}
 
export default Logo;