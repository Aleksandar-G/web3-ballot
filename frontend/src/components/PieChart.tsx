import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { data } from './data'

ChartJS.register(ArcElement, Tooltip, Legend)

export const PieChart = () => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Pie Chart</h2>
      <Pie data={data} />
    </div>
  )
}
