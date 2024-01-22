import React from 'react'
import Button from 'react-bootstrap/Button'
import './style.css'

const row = ({ID,DT,CDT,ST,Month,index}) => {

    return (
        <tr>
            <td>
                {ID}
            </td>
            <td>
                {DT}
            </td>
            <td>
                {CDT}
            </td>
            <td>
                {ST}
            </td>
            <td>
                {Month}
            </td>
            <td style={{textAlign: 'center'}}>
                <Button variant="primary">Update</Button>
                <Button variant="danger">Delete</Button>
            </td>
        </tr>
    )
}

export default row