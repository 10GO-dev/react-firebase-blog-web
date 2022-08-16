import React from 'react'
import { Card, Button,Badge } from 'react-bootstrap';

function PostCard({post}) {
  return (
    <Card style={{ width: '400px' }} className="">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{post.author}</Card.Subtitle>
        <Card.Text>
          {post.content}
        </Card.Text>
        <Badge>{post.post_date}</Badge>
        <Button variant="light">❤ {post.likes} Likes</Button>
      </Card.Body>
    </Card>
  )
}

export default PostCard