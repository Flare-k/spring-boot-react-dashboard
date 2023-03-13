import { Line } from "react-chartjs-2";

const UsagePerHour = ({ rawData, chartColors, width, height }) => {
    const options = {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: '#555'
            }
        }
    }; 
    const data= {

        labels: rawData.labels,
        datasets: [
          {
            label: rawData.label,
            data: rawData.data,
            fill: true,
            backgroundColor: `rgba(${chartColors},0.2)`,
            borderColor: `rgba(${chartColors},1)`
          },
        ]
      };
    return(
        <>
            <p>{rawData.chartName}</p>
            <Line options={options} data={data} height={height} width={width}/>
        </>
    );
}

export default UsagePerHour;