import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const UsagePerTeam = ({ rawData, chartColors, height, width }) => {

    const options = {
        legend: {
            // https://www.chartjs.org/docs/latest/configuration/legend.html#position 참고 
            display: true,
            position: 'right',
            labels: {
                fontColor: '#555'
            }
        }
    };

    const data = {
        labels: rawData.label,
        datasets: [
          {
            backgroundColor: chartColors,
            data: rawData.data,
            name: rawData.chartName
          },
        ]
    }

    return (
        <>
        <div>{rawData.chartName}</div>
        <Doughnut options={options} data={data} height={height} width={width}/>
        </>
    );
}

export default React.memo(UsagePerTeam);