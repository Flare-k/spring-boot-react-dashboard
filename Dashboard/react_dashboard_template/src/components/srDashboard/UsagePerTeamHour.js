import React from 'react';
import { Line } from "react-chartjs-2";

const UsagePerTeamHour = ({ rawData, chartColors, width, height }) => {
    const options = {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: '#555'
            }
        }
    };

    const datasets = rawData.datas.map((d, i) => {
        return (
            {
                label: d.label,
                data: d.data,
                fill: false,
                borderColor: chartColors[i],
            }
        );
    });

    const data = {
        labels: rawData.labels,
        datasets: datasets
    };


    return (
        <>
            <p>{rawData.chartName}</p>
            <Line options={options} data={data} height={height} width={width}/>
        </>
    );
}

export default UsagePerTeamHour;
