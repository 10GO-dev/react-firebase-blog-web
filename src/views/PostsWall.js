import React from 'react';
import { Container } from 'react-bootstrap';
import { PostList } from 'components/posting-wall';

function PostsWall() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{maxWidth: '800px', marginTop: "20px"}}>
        <PostList />
    </Container>
  )
}

export default PostsWall





