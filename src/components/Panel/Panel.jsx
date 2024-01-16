import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'



const Panel = () => {
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

    const getTasks = () => {
      xLabels.forEach( month => {
        pData.push(100)
      })
    }

    

    const pData = []
    getTasks()
    return (
      <div>

      <BarChart
        width={1000}
        height={400}
        series={[
          { data: pData, label: 'Task amount', id: 'pvId', stack: 'total' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
      </div>
    );
  };
  
export default Panel