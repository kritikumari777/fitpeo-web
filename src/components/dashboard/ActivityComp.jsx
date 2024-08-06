import React, { useEffect } from 'react';

function ActivityComp() {
  useEffect(() => {
    // Load the Google Charts library
    window.google.charts.load('current', { packages: ['corechart'] });
    window.google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Create the data table
      const data = window.google.visualization.arrayToDataTable([
        ['Year', 'Sales'],
        ['2019', 1000],
        ['2020', 1170],
        ['2021', 660],
        ['2022', 1030]
      ]);

      // Define chart options
      const options = {
        title: 'Company Performance',
        chartArea: { width: '50%' },
        hAxis: {
          title: 'Total Sales',
          minValue: 0,
          textStyle: { color: '#FFF' }, 
          titleTextStyle: { color: '#FFF' }
        },
        vAxis: {
          title: 'Year',
          textStyle: { color: '#FFF' }, 
          titleTextStyle: { color: '#FFF' }
        },
        titleTextStyle: { color: '#FFF' },
        colors: ['#87CEEB'],
        backgroundColor: "#212121"
      };

      // Create and draw the chart
      const chart = new window.google.visualization.ColumnChart(document.getElementById('chart'));
      chart.draw(data, options);
    }

    // Redraw chart on window resize
    function resizeChart() {
      drawChart();
    }

    window.addEventListener('resize', resizeChart);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  return (
    <div className="chart-container mt-5 bg-[#212121] w-full">
     <div className='text-white font-medium text-lg p-4'>Activity</div>
      <div id="chart" className="chart w-full h-64"></div>
    </div>
  );
}

export default ActivityComp;
