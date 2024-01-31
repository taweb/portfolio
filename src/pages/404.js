import React from 'react'
import {Seo} from '../components/seo'
import PageContent from '../components/pageContent';
import CustomLink from '../components/link';

const NotFoundPage = () => (
  <>
    <Seo title='404: Not found' />
    <PageContent>
      <h1>404</h1>
      <h2>Page not Found</h2>
      <p>Sorry, it looks like this page could not be found. Please check the URL or <CustomLink to="/">return to Home</CustomLink> to start again.</p>
    </PageContent>
  </>
)

export default NotFoundPage
