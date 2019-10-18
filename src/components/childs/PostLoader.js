import React from 'react';
import ContentLoader from 'react-content-loader';
const PostLoader = () => {
    return (
        <div className="post card">
            <ContentLoader 
            height={60}
            width={500}
            speed={1}
            primaryColor="#dddddd"
            secondaryColor="#b694ed"
        >
                <rect x="10" y="32" rx="3" ry="3" width="350" height="3" /> 
                <rect x="10" y="39" rx="3" ry="3" width="296" height="3" /> 
                <rect x="10" y="20" rx="3" ry="3" width="200" height="7" /> 
                <rect x="10" y="46" rx="3" ry="3" width="217" height="3" />
        </ContentLoader>
      </div>

    );
}

export default PostLoader;
