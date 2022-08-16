import React from 'react';
import { Container } from 'react-bootstrap';
import { PostList } from '../components/posting-wall';

function Home() {
  return (
    <Container fluid>
        <PostList />
    </Container>
  )
}

export default Home





