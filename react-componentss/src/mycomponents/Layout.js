// Layout.js
import React from 'react';
import TextContent from './TextContent';
// import ImageContent from './ImageContent';
import ImageContent from './ImageComponent';

const Layout = ({ layout, heading, paragraph, imageSrc, onHeadingChange, onParagraphChange, onImageChange }) => {
  const layoutClass = getLayoutClass(layout);

  return (
    <div className={`d-flex ${layoutClass} mb-4`}>
      <TextContent
        heading={heading}
        paragraph={paragraph}
        onHeadingChange={onHeadingChange}
        onParagraphChange={onParagraphChange}
      />
      <ImageContent
        imageSrc={imageSrc}
        onImageChange={onImageChange}
      />
    </div>
  );
};

const getLayoutClass = (layout) => {
  switch (layout) {
    case 'textTopImageBottom':
      return 'flex-column';
    case 'textLeftImageRight':
      return 'flex-row';
    case 'textRightImageLeft':
      return 'flex-row-reverse';
    default:
      return '';
  }
};

export default Layout;
