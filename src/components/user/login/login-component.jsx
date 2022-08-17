import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from 'context/AuthContext'
import {useNavigate, Link} from 'react-router-dom'


function LoginForm() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signin } = useAuth()
  const [error,setError] = useState()
  const [loading,setLoading] = useState()
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await signin(emailRef.current.value, passwordRef.current.value)
      .then(()=> {
        navigate('/')
      }).catch((error) => console.log(error))
    } catch {
      setError('Failed to login')
    }
    setLoading(false)
  }

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Sign in</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required/>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required/>
          </Form.Group>
          <Button disabled={loading} className="w-100 mt-4" type="submit">Login</Button>
        </Form>
      </Card.Body>
        <div className="w-100 text-center mt-2 mb-4">
          Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </div>
    </Card>
  )
}

export default LoginForm

