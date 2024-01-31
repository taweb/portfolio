import React from 'react'
import {Seo} from '../components/seo'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby';
import ProjectList from '../components/projects/projectList';
import PageHeader from '../components/pageHeader'

const ProjectsPage = ({data}) => (
    <>
        <Seo title='Projects' />
        <PageContent>
            <PageHeader>Projects</PageHeader>
            <h2>Personal Projects</h2>
            <p>Below are a selection of personal projects or tutorials which I have been working on.</p>
            <ProjectList images={data} />
        </PageContent>
    </>
);

export default ProjectsPage;

export const query = graphql`
    {
        allFile(filter: {relativePath: {regex: "/projects/.*.png/"}}) {
            edges {
              node {
                childImageSharp {
                  gatsbyImageData(width: 320)
                }
                relativePath
              }
            }
        }
    }
    
`