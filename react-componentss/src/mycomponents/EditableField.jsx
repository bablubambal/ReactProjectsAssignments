const EditableField = ({ value, onValueChange, fieldType = 'text', className = '' }) => {
    return (
      <input
        type={fieldType}
        className={`form-control ${className}`}
        value={value}
        onChange={e => onValueChange(e.target.value)}
      />
    );
  };


  export default EditableField;