import React from 'react'
import Form from 'react-bootstrap/Form'
import './style.css'
import Button from 'react-bootstrap/Button'

const SignIn = () => {

  const handleClick = () => {
    const userSession = JSON.parse(sessionStorage.getItem('userSession'))

    userSession.isLogged = true

    sessionStorage.setItem('userSession', JSON.stringify(userSession))
    window.history.pushState(null, '', '/dashboard')
    // location.reload()
  }

    return (
      <div className='ctn'>
        <div className='ctn2'>
          <h2 style={{textAlign: 'center', marginBottom: '30px'}}>Sign In</h2>
          <Form.Label htmlFor="inputemail">Username / Email</Form.Label>
            <Form.Control
              type="text"
              id="inputemail"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="inputemail" muted>
              Your username must be registed or you can use an email finished with @gmail.com.
            </Form.Text>
              <div className='sep'>

              </div>
              <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and numbers,
              and must not contain spaces, special characters, or emoji.
            </Form.Text>
            <div className='sep'>

            </div>
            <Button variant="primary" onClick={handleClick}>Log In</Button>
          </div>
      </div>
    );
  };
  
export default SignIn