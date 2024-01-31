import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes, linkColors } from '../../theme/variables.js';
import CustomLink from '../link';
import Button from '../button';
import {GatsbyImage, getImage } from "gatsby-plugin-image"

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

const ProjectContainer = styled.figure`
    border: 2px solid ${colors.black};
    margin: 0;
    page-break-inside: avoid;
    break-inside: avoid;
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const ProjectCaption = styled.figcaption`
    text-align: center;
    font-size: ${fontSizes.medium};
`

const Project = ({project, className, image}) => {
    const img = getImage(image.node.childImageSharp)
    const repoUrl = project.links.find(link => link.name || null === 'repo').url || null
    return (
        <ProjectContainer className={className}>
            <CustomLink as='a' type={'none'} href={repoUrl}>
                <GatsbyImage 
                    image={img}
                    objectFit='cover'
                    objectPosition='top'
                    style={{width: "100%"}}
                    alt="Project photo"
                />
                <ProjectCaption>{project.name}</ProjectCaption>
            </CustomLink>
            <LinkContainer>
                {project.links.map((link, i) => {
                    const linkType = link.name;
                    const linkColor = linkColors[linkType] || "";                       
                    return (
                        <Button href={`${link.url}`} key={i} style={{background: `${linkColor}`}}>
                            {capitalize(link.name)}
                        </Button>
                    )
                })}
            </LinkContainer>
        </ProjectContainer>
    );
}
 
export default Project;