import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSumDTO } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    // TODO: Use react hook
    let chartData: ChartData = {labels: [], series: []};
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {
            const data = response.data as SaleSumDTO[];
            const labels = data.map(x => x.sellerName);
            const series = data.map(x => x.sum);
            chartData = {labels: labels, series: series};
            console.log(chartData);
        });

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{...options, labels: chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;
