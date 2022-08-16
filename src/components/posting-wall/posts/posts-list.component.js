import React, { useEffect, useState } from 'react'
import PostCard from './post-card.component'
import { getPosts } from '../../../services/firebaseApi'
import { Container } from 'react-bootstrap'

function PostsList() {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const posts = await getPosts();
    setPosts(posts)
  }
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <Container>
      {posts.length && posts.map((item) => <p>{item.title}</p>)}
    </Container>
  )
}

export default PostsList