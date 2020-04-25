import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {


  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`
  }

  try {
    //{data} json dan dönen değerin içinde (data'ın )
    //sadece asagida belirtilen elemanları alalım
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

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

export const fetchCountries = async () => {

  try {

    //json dizisinden data icideki countries dizisibi al
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);

    // const response = await axios.get(`${url}/countries`);
    // console.log(response);

  } catch (error) {
    console.log(error);
  }

}
