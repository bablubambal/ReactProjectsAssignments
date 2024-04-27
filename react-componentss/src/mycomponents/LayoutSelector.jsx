const LayoutSelector = ({ onSelect }) => {
    return (
      <select className="form-control" onChange={e => onSelect(e.target.value)}>
        <option value="textTopImageBottom">Text Top, Image Bottom</option>
        <option value="textLeftImageRight">Text Left, Image Right</option>
        <option value="textRightImageLeft">Text Right, Image Left</option>
      </select>
    );
  };


  export default LayoutSelector;