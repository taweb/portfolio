import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { colors, fontSizes, breakPoints } from '../theme/variables.js';
import PageHeader from './pageHeader'
import {GatsbyImage, getImage } from "gatsby-plugin-image"

const Summary = styled.p`
    font-size: ${fontSizes.medium};
    font-weight: bold;
`

const Container = styled.div`
    display: grid;
    grid-gap: 15px 20px;
    @media (${breakPoints.desktop}) {
        grid-gap: 15px 30px;
        grid-template-columns: repeat(2, 1fr);
    }
`

const About = () => {
    const data = useStaticQuery(graphql`
        query portrait {
            allFile(filter: {relativePath: { eq: "portrait.JPG" }}) {
                edges {
                  node {
                    childImageSharp {
                      gatsbyImageData(width: 250, height: 250)
                    }
                  }
                }
            }
        }
    `)

    const img = getImage(data.allFile.edges[0].node.childImageSharp)
    return ( 
        <>
            <PageHeader>About Me</PageHeader>
            <Container>
                <GatsbyImage
                    image={img} 
                    alt='Portrait of Me' 
                    style={{
                        border: `2px solid ${colors.black}`,
                        borderRadius: "50%",
                        justifySelf: "center"
                    }}
                />
                <Summary>Hello, I'm Tim Atherton, a software engineer based in Bristol, UK. I have 5 years of experience developing web applications of varying scales and complexity.</Summary>
                <p>I have recently been working at <a href="https://www.wazoku.com/">Wazoku</a>, a growing innovation management company based in London but operating globally.</p>
                <p>In my spare time I enjoy attending running club, live music, comedy and travelling. I'm slightly obsessed with Glastonbury Festival having attended 8 years in a row. I studied Earth Sciences at university and maintain a strong interest in the natural world.</p>
            </Container>
        </>
     );
}
 
export default About;