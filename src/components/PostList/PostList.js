import React from 'react';
import PostItem from '../PostItem/PostItem'

const PostList = ({ posts, onRemove }) => (
  <div>
    {posts && posts.map((post) => {
      return (<PostItem key={post.id} {...post} onRemove={onRemove} />);
    })}
  </div>
);

export default PostList;
