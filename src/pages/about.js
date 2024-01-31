import React from 'react';
import {Seo} from '../components/seo'
import PageContent from '../components/pageContent'
import About from '../components/about'

const AboutPage = () => {    
    return (
        <>  
            <Seo title='About' />
            <PageContent>
                <About/>
            </PageContent>
        </>
      );
}
 
export default AboutPage;