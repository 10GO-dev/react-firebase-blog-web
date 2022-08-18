import React from 'react'
import { Card, Button,Badge } from 'react-bootstrap';

function PostCard({post}) {
  return (
    <Card style={{ width: '600px', margin: '3px'}}>
      <Card.Header>{post.author}</Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <Button variant="light">❤ {post.likes} Likes</Button>
      </Card.Body>
    </Card>
  )
}

export default PostCard