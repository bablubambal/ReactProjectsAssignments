// CardsContainer.js
import React, { useContext, useEffect } from 'react';
import useFetchPosts from './useFetchPosts';
import CardComponent from './CardComponent';
import { LayoutContext } from './LayoutContext';

const CardsContainer = () => {
  const { data, loading, error } = useFetchPosts('https://jsonplaceholder.typicode.com/posts');
  const { saveLayoutData } = useContext(LayoutContext);

  useEffect(() => {
    // Assuming you want to save all the post data to the context
    saveLayoutData(data);
  }, [data, saveLayoutData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <div className="row">
        {data.map(post => (
          <CardComponent key={post.id} id={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
