import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccessDTO } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

const BarChart = () => {

    const [charData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
            .then(response => {
                const data = response.data as SaleSuccessDTO[];
                const categories = data.map(item => item.sellerName);
                const series = data.map(item =>
                    round(100 * item.deals / item.visited, 1));
                setChartData({
                    labels: {
                        categories: categories,
                    },
                    series: [{
                        name: "% Success",
                        data: series
                    }]
                });
            });
    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (
        <Chart
            options={{ ...options, xaxis: charData.labels }}
            series={charData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;
