import React from 'react'
import Table from 'react-bootstrap/Table'
import {tl} from '../../data/tasks'
import ROW from './row/row'
import './style.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const TaskList = () => {

  const xLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  return (
    <div className='ctn '>
      <div className='table2'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>DescriptionTask</th>
              <th>StatusTask</th>
              <th>Month</th>
              <th style= {{textAlign: 'center'}} >Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td><input size={60}></input></td>
            <td>
              <Form.Select aria-label="Default select example">
                <option value='Started'>Started</option>
                <option value='StandBy'>StandBy</option>
                <option value='NotStarted'>NotStarted</option>
                <option value='Finished'>Finished</option>
              </Form.Select></td>
            <td>
              <Form.Select aria-label="Default select example">
                <option value={xLabels[0]}>{xLabels[0]}</option>
                <option value={xLabels[1]}>{xLabels[1]}</option>
                <option value={xLabels[2]}>{xLabels[2]}</option>
                <option value={xLabels[3]}>{xLabels[3]}</option>
                <option value={xLabels[4]}>{xLabels[4]}</option>
                <option value={xLabels[5]}>{xLabels[5]}</option>
                <option value={xLabels[6]}>{xLabels[6]}</option>
                <option value={xLabels[7]}>{xLabels[7]}</option>
                <option value={xLabels[8]}>{xLabels[8]}</option>
                <option value={xLabels[9]}>{xLabels[9]}</option>
                <option value={xLabels[10]}>{xLabels[10]}</option>
                <option value={xLabels[11]}>{xLabels[11]}</option>
              </Form.Select>
            </td>
            <td style={{textAlign: 'center'}}><Button variant="success">Insert</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='table-m'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID_TASK</th>
              <th>DescriptionTask</th>
              <th>CreatedDateTask</th>
              <th>StatusTask</th>
              <th>Month</th>
              <th style={{textAlign: 'center'}}>Operations</th>
            </tr>
          </thead>
          <tbody>
            {tl.map( ({ID_TASK, DT, CDT, ST, Month}, index) => <ROW key={index} ID={ID_TASK} DT={DT} CDT={CDT} ST={ST} Month={Month}></ROW>)}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TaskList