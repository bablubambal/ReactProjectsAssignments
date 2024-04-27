// TextContent.js
import React from 'react';
import EditableField from './EditableField';

const TextContent = ({ heading, paragraph, onHeadingChange, onParagraphChange }) => {
  return (
    <div className="flex-fill p-2">
      <EditableField value={heading} onValueChange={onHeadingChange} />
      <EditableField value={paragraph} onValueChange={onParagraphChange} fieldType="textarea" />
    </div>
  );
};

export default TextContent;
