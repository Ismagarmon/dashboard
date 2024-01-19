import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { PieChart } from '@mui/x-charts/PieChart'
import './style.css'

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

  const pData = [100,200,300,400,500,600,700,800,900,1000,1100,1200]

  const data = [
    { id: 0, value: 10, label: 'Started' },
    { id: 1, value: 15, label: 'StandBy' },
    { id: 2, value: 20, label: 'NotStarted' },
    { id: 3, value: 40, label: 'Finished' }
  ]

  return (
    <div className='grid container'>
      <div className='flex-cc border'>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={200}
      />
      </div>
      <div>
        
      </div>
      <div>
        
      </div>
      <div className='flex-cc border'>
      <BarChart
        width={1000}
        height={200}
        series={[
          { data: pData, label: 'Task amount', id: 'pvId', stack: 'total' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      />
        
      
      </div>
      <div className='flex-cc border'>
      <div>
        <h2>Total tasks</h2>
        <p>50</p>
      </div>
      
      </div>
 


    </div>
  );
};

export default Panel