import React from 'react';
import projects from '../../data/projects.json'
import Project from './project'
import styled from 'styled-components'
import {breakPoints} from '../../theme/variables';


const ProjectsContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (${breakPoints.xldesktop}) {
        flex-wrap: wrap;
        align-content: space-between;

        /* UPDATE THIS */
        height: 1600px;
    }
    @media (${breakPoints.ultrawide}) {

        /* UPDATE THIS */
        height: 1790px;
    }
`

const StyledProject = styled(Project)`
    width: 100%;
    max-width: 400px;
    margin-bottom: 40px;

    @media (${breakPoints.xldesktop}) {
        width: 48%;
        max-width: 400px;
        &:nth-child(2n+1) { order: 1; }
        &:nth-child(2n+2) { order: 2; }
    }
`

const ProjectList = ({images}) => {
    return (
        <ProjectsContainer>
            {projects.map((project, i) => {
                const img = images.allFile.edges.find(n => {
                    return n.node.relativePath === `projects/${project.img}`;
                });
                return (
                    <StyledProject key={i} project={project} image={img} />
                )
            })
            }
        </ProjectsContainer>
    );
}
 
export default ProjectList;