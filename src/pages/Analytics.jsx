import React from 'react'
import Navbar from '../Components/Navbar'
import { Chart } from 'primereact/chart';
import Footer from '../Components/Footer'

export default function Analytics() {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Budget',
        data: [6500, 5900, 8000, 8100, 5600,7000,3000],
        backgroundColor: '#38026e'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Monthly Sales Data'
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1 className='font-bold text-xl p-3'>Analytics</h1>

        {/* Corrected chart container */}
        <div className="w-full lg:1/3 p-4">
          <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
        
      </div>
      <div className='mt-106 lg:mt-0'>
          <Footer />
      </div>
      
    </div>
  )
}
