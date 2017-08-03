import React from 'react';

const PostItem = ({ id, title, body, authorName, company, city, onRemove }) => {
  return (
    <article>
      <h2>{title}</h2>
      <span>{authorName}</span> - <span>{company}</span> - <span>{city}</span>
      <p>{body}</p>
      <button onClick={() => onRemove(id)}>X</button>
    </article>
  );
};

export default PostItem;
