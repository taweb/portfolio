import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header/header';
import Footer from './footer';
import styled from 'styled-components';
import {breakPoints, layout, colors} from '../theme/variables';
import { isHomepage } from '../utilities';
import { GlobalStyle } from '../theme/GlobalStyle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const HeaderLayout = styled(Header)`
  @media (${breakPoints.desktop}) {
      width: ${layout.sidebarWidth};
      height: 100%;
      background: ${(props) => isHomepage(props.path) && 'none'};
  }
`

const MainLayout = styled.main`
  margin-top: ${layout.headerHeight};
  flex: 1;
  @media (${breakPoints.desktop}) {
      margin-top: 0px;
      margin-left: ${(props) => isHomepage(props.path) ? `0px` : `${layout.sidebarWidth}`};
  }
`

const FooterLayout = styled(Footer)`
  position: ${(props) => isHomepage(props.path) && 'fixed'};
  bottom: ${(props) => isHomepage(props.path) && '0px'};
  width: 100%;
  color: ${(props) => isHomepage(props.path) && `${colors.white}`};
  @media (${breakPoints.desktop}) {
    margin-left: ${layout.sidebarWidth};
    position: static;
    width: auto;
    color: ${colors.black};
  }
`

const Layout = ({children, location}) => {
  
  const data = useStaticQuery(graphql`
    query titleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <GlobalStyle />
        <Wrapper>
          <HeaderLayout 
            siteTitle={data.site.siteMetadata.title}
            path={location.pathname}
          />
          <MainLayout path={location.pathname}>
            {children}
          </MainLayout>
          <FooterLayout path={location.pathname}/>
        </Wrapper>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerContent: PropTypes.element
}

export default Layout
