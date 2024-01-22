import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './style.css'

const Profile = () => {
    return (
      <div style={{width: '100%'}}>
        <div className='profile'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Email</th>
                <th style= {{textAlign: 'center'}} >Operations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>
                <input size={20} value={'Ismael'}/>
              </td>
              <td>
                  <input size={20} value={'García Montero'}/>
              </td>
              <td>
                <input size={20} value={'24'}/>
              </td>
              <td>
                <input size={30} value={'ismagarmon3@gmail.com'}/>
              </td>
              <td style={{textAlign: 'center'}}><Button variant="primary">Update</Button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  };
  
export default Profile