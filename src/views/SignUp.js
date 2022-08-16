
import React from 'react'
import { SignUpForm } from 'components/user'
import { Container } from 'react-bootstrap'
function Signup() {
  return (
    <Container className="d-flex align-items-center justify-content-center" 
      style={{minHeight:"100vh"}}
    >
      <div className="w-100" style={{maxWidth: '500px'}}>
        <SignUpForm/>
      </div>
    </Container>
  )
}

export default Signup