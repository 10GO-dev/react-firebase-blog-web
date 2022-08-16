import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap'


function LoginForm() {
  const usernameRef = useRef()
  const passwordRef = useRef()

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Sign in</h2>
        <Form>
          <Form.Group id="username">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" ref={usernameRef} required/>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required/>
          </Form.Group>
          <Button className="w-100 mt-4" type="submit">Login</Button>
        </Form>
      </Card.Body>
        <div className="w-100 text-center mt-2 mb-2">
          Don't have an account yet? Sign Up
        </div>
    </Card>
  )
}

export default LoginForm

