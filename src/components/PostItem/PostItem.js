import React, { PropTypes } from 'react';

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

PostItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  authorName: PropTypes.string,
  company: PropTypes.string,
  city: PropTypes.string,
  onChange: PropTypes.func
};

export default PostItem;
