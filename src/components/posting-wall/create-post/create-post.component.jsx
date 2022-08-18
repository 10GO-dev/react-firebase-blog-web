import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from 'context/AuthContext'
import {useNavigate} from 'react-router-dom'
import { db } from 'config/firebase-config'
import { addDoc, collection } from 'firebase/firestore'


function CreatePostForm() {
  const titleRef = useRef()
  const contentRef = useRef()
  const { currentUser } = useAuth()
  const [error,setError] = useState()
  const [loading,setLoading] = useState()
  const navigate = useNavigate()
  const postRef = collection(db, "posts")


  const CreatePost = async () => {
    setLoading(true)
    const postData = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      author: currentUser.diplayName ? currentUser.diplayName : currentUser.email.slice(0, currentUser.email.indexOf('@')),
      author_id: currentUser.uid,
      likes: 0,
      date: new Date()
    };
    setError('')
    await addDoc(postRef, postData)
      .then(()=> {
        setLoading(false)
        navigate('/')
      }).catch((error) => setError(error))
  }
  
  async function handleSubmit(e){
    e.preventDefault()
    CreatePost()
  }

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Create Post</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" ref={titleRef} required/>
          </Form.Group>
          <Form.Group id="content">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" placeholder="Write post content here..." ref={contentRef} style={
              { height: '150px'}
            } required/>
          </Form.Group>
          <Button disabled={loading} className="w-100 mt-4" type="submit">Create</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default CreatePostForm