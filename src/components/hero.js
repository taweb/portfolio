import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import CustomLink from './link';
import {colors, fontSizes, breakPoints, layout} from '../theme/variables';
import { useStaticQuery, graphql } from 'gatsby';

const HeroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - ${layout.headerHeight});
    @media (${breakPoints.desktop}) {
        height: calc(100vh - ${layout.footerHeight});
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    @media (${breakPoints.desktop}) {
        clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    } 
`

const HeaderContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%, 0%);
    width: 100%;
    text-align: center;
    padding: 0px 20px;
    font-size: ${fontSizes.medium};
    @media (${breakPoints.tablet}) {
        top: 20%;
    }
    @media (${breakPoints.desktop}) {
        left: calc(50% + (${layout.sidebarWidth})/2);
        width: calc(100% - ${layout.sidebarWidth});
        top: 30%;
    }
`

const HeaderText = styled.h1`
    color: ${colors.white};
    text-shadow: 1px 1px 2px ${colors.black};
    margin-bottom: 2rem;
`

const StyledSpan = styled.span`
    display: block;
`

const PrimaryText = styled(StyledSpan)`
    font-size: ${fontSizes.title};
    margin-bottom: 10px;
    letter-spacing: 3px;
`

const SecondaryText = styled(StyledSpan)`
    font-size: ${fontSizes.large};
`

const StyledCustomLink = styled(CustomLink)`
    margin: 0px 10px;
`

const QuickLinkContainer = styled.p`
    display: block;
    font-size: ${fontSizes.medium};
    @media (${breakPoints.mobile}) {
        display: inline;
    }
`

const Hero = () => {
    const data = useStaticQuery(graphql`
        query coverImgQuery {
            allFile(filter: {relativePath: { eq: "cover.JPG" }}) {
                edges {
                  node {
                    childImageSharp {
                      gatsbyImageData(transformOptions: {
                        duotone: {
                          highlight: "#7b8897",
                          shadow: "#0f4975"
                        }
                      })
                    }
                  }
                }
            }
        }
    `)

    const img = getImage(data.allFile.edges[0].node.childImageSharp)

    return (
        <HeroWrapper>
            <ImageWrapper>
                <GatsbyImage 
                    image={img}
                    alt="Cover image"
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            </ImageWrapper>
            <HeaderContainer>
                <HeaderText>
                    <PrimaryText>Tim Atherton</PrimaryText>
                    <SecondaryText>I'm a Web Developer in Bristol, UK</SecondaryText>
                </HeaderText>
                <QuickLinkContainer>
                    <StyledCustomLink to='/skills' type={'normal'} color={colors.white} highlight={colors.redDarkened}>Skills & Experience</StyledCustomLink>
                </QuickLinkContainer>
                <QuickLinkContainer>
                    <StyledCustomLink to='/contact' type={'normal'} color={colors.white} highlight={colors.redDarkened}>Get in Touch</StyledCustomLink>
                </QuickLinkContainer>
            </HeaderContainer>
        </HeroWrapper>
    )
}
export default Hero
 