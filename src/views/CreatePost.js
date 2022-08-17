import React from 'react'
import { CreatePostForm } from 'components/posting-wall'
import { Container } from 'react-bootstrap'

function CreatePost() {
  return (
    <Container className="d-flex align-items-center justify-content-center" 
      style={{minHeight:"100vh"}}
    >
      <div className="w-100" style={{maxWidth: '600px'}}>
        <CreatePostForm />
      </div>
    </Container>
  )
}

export default CreatePost