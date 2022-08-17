import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import React, {useState} from 'react'
import {useAuth} from 'context/AuthContext'
import { useNavigate as navigate } from 'react-router-dom';

function NavBar() {
  const { currentUser, logout } = useAuth();
  const [ error, setError ] = useState();
  async function handleLogout() {
    setError('')
    try {
      await logout()
      .then(() => {
        navigate("/")
      })
    } catch{
      setError('Failed to logout')
    }
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>PostsWall</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/create">
                <Nav.Link>Create Post</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
            <Nav className="mr-auto">
            {!currentUser && <>
            <LinkContainer to="/signup">
                <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
                <Button>Login</Button>
            </LinkContainer>
            </>
            }
            {currentUser &&  
            <NavDropdown title={`Signed as: ${currentUser.displayName ? currentUser.displayName : currentUser.email }`} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleLogout}>
                Log out 🏃‍♂️💨
              </NavDropdown.Item>
            </NavDropdown>
            }
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;