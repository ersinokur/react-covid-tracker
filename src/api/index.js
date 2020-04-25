import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    //{data} json dan dönen değerin içinde (data'ın )
    //sadece asagida belirtilen elemanları alalım
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    // const modifiedDate = {
    //   // degisken ve deger ayni turde ise kisaltma yapabiliriz
    //   //confirmed: confirmed, --eski hali
    //   confirmed,
    //   recovered,
    //   deaths,
    //   lastUpdate,
    // };

    //herhangi bir degiskenm olusturman daha kisa ve hizli kullanım
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) { console.log(error); }
}

export const fetchDailyData = async () => {

  try {

    const { data } = await axios.get(`${url}/daily`);
    //console.log(data);

    const modifedData = data.map((dailyData) => ({

      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifedData;

  } catch (error) {
    console.log(error);
  }
}

export const countries = async () => {

try {
  
const response = await axios.get(`${url}/countries`);

} catch (error) {
  console.log(error);
}

}
