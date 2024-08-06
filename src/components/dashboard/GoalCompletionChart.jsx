import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const GoalCompletionChart = () => {
  const data = {
    datasets: [
      {
        data: [70, 30], 
        backgroundColor: ['#87CEEB', '#E0E0E0'], 
        hoverBackgroundColor: ['#87CEEB', '#E0E0E0'],
      },
    ],
    labels: ['Completed', 'Remaining'],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
        },
      },
    },
    cutout: '70%', // Adjust to create the desired thickness of the doughnut
  };

  return (
    <div style={{ width: '105px', height: '105px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default GoalCompletionChart;
