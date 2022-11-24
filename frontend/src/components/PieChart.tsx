import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, Colors)

interface props {
  data: any
}

export const PieChart = ({ data }: props) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Pie Chart</h2>
      <Pie data={data} />
    </div>
  )
}
