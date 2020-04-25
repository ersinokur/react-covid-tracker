// usesate ve useeffect hook için
import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {

    const [dailyData, setDailyData] = useState([]); //donen değerler dizi oldugu icin [] tek boje olsaydı {}

    useEffect(() => {

        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        console.log(dailyData);

        fetchAPI();

    });

    const lineChart = (
        dailyData.length // sifirdan farkli ise true , degilse false döner
            ? (<Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: 'rgba(255,255,0,0.5)',
                        fill: true,
                    }, {

                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true,

                    }],
                }}
            />) : null
    );

    return (
        <div className={styles.container}>

            {lineChart}

        </div>
    )
}

export default Chart;
