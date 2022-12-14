import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from 'context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

function SignUpForm() {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error,setError] = useState()
  const [loading,setLoading] = useState()
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    if (passwordRef.current.value!==passwordConfirmRef.current.value){
      return setError('Password do not match')
    }
    try {
      setError('')
      setLoading(true)
      const displayName = firstNameRef+ ' '+lastNameRef
      await signup(emailRef.current.value, passwordRef.current.value, displayName)
      .then(() => navigate('/'))
    } catch(error) {
        console.log(error)
        const errorMsg = error.code.replace("auth/","")
        setError(errorMsg.replace("-"," "))
      }
  
    setLoading(false)
  }
  
  
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
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
          <Form.Group id="password-confirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} required/>
          </Form.Group>
          <Button disabled={loading} className="w-100 mt-4" type="submit">Sign Up</Button>
        </Form>
      </Card.Body>
        <div className="w-100 text-center mt-2 mb-4">
          Already have an account? <Link to="/login">Sign In</Link>
        </div>
    </Card>
  )
}
export default SignUpForm;