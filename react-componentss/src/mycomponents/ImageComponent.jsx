// ImageContent.js
import React from 'react';
import EditableField from './EditableField';

const ImageContent = ({ imageSrc, onImageChange }) => {
  return (
    <div className="flex-fill p-2">
      <img src={imageSrc} className="img-fluid" alt="dynamic" />
      <EditableField value={imageSrc} onValueChange={onImageChange} />
    </div>
  );
};

export default ImageContent;
