import React from 'react'
import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = () => {
    return (
      <div className='ctn'>
        <div className='ctn2'>
          <h2 style={{textAlign: 'center', marginBottom: ''}}>Sign Up</h2>
          <Form.Label htmlFor="inputname">Name</Form.Label>
            <Form.Control
              type="text"
              id="inputname"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="inputname" muted>
              Your own first name.
            </Form.Text>
              <div className='sep'>

              </div>
            <Form.Label htmlFor="inputsurnames">Surnames</Form.Label>
            <Form.Control
              type="text"
              id="inputsurnames"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="inputsurnames" muted>
              Your own first name.
            </Form.Text>
              <div className='sep'>

              </div>
              <Form.Label htmlFor="inputemail">Email</Form.Label>
            <Form.Control
              type="text"
              id="inputemail"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="inputemail" muted>
              Your own first name.
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
            <Button variant="success">Register</Button>
          </div>
      </div>
    );
  };
  
export default SignUp