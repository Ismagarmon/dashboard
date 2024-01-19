import React from 'react'
import Table from 'react-bootstrap/Table'


const TaskList = () => {

  const tl = [
    { ID_TASK: 1, DT: "Una tarea cualquiera", CDT: "2024", ST: "Finished", Month: "January" },
    { ID_TASK: 2, DT: "A peculiar assignment", CDT: "2024-01-19", ST: "Finished", Month: "January" },
    { ID_TASK: 3, DT: "Task with a twist", CDT: "2024-01-19", ST: "Finished", Month: "January" },
    { ID_TASK: 4, DT: "The enigmatic job", CDT: "2024-01-19", ST: "Finished", Month: "January" },
    { ID_TASK: 5, DT: "Mission Unusual", CDT: "2024-01-19", ST: "Finished", Month: "January" },
    { ID_TASK: 6, DT: "Eccentric Challenge", CDT: "2024-01-19", ST: "Finished", Month: "January" },
    { ID_TASK: 7, DT: "Quirky Duty", CDT: "2024-01-19", ST: "Finished", Month: "January" },
    { ID_TASK: 8, DT: "Offbeat Task", CDT: "2024-01-19", ST: "Finished", Month: "January" },
    { ID_TASK: 9, DT: "Unusual Endeavor", CDT: "2024-01-19", ST: "Finished", Month: "January" },
    { ID_TASK: 10, DT: "Astronomical Assignment", CDT: "2024-01-19", ST: "Finished", Month: "January" },
    { ID_TASK: 11, DT: "Mysterious Mission", CDT: "2024-01-19", ST: "Finished", Month: "January" },
    { ID_TASK: 12, DT: "Cryptic Challenge", CDT: "2024-01-19", ST: "Finished", Month: "January" }
  ]

  return (
    <div className='ctn'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID_TASK</th>
            <th>DescriptionTaks</th>
            <th>CreatedDateTask</th>
            <th>StatusTask</th>
            <th>Month</th>
          </tr>
        </thead>
        <tbody>
          {tl.map(task => {
            <tr key={task.ID_TASK}>
              ASD
            </tr>
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TaskList