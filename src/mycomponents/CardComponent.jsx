// CardComponent.js
import React from 'react';

const CardComponent = ({ id, title, body }) => {
  // Placeholder image URL
  const imageUrl = `https://via.placeholder.com/150/0000FF/808080?text=ID:${id}`;

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={`Placeholder for ${id}`} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
