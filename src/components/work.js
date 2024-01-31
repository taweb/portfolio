import React from 'react';

const Work = ({data}) => {
    const {frontmatter: {title}, html} = data    
    
    return ( 
        <>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </>
     );
}
 
export default Work;