import React, { Component } from "react";
import { fetchData } from "./api";

//bu şekilde componentnlerimizi tek seferinde import edebiliyoruz.
//tek sarti componenet klasöründe index.js
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {}, // api'den dönen değerlerimizi bir state objesinde tutalım
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData,
    });

    //console.log(fetchedData);
  }

  handleCountryChange = async (country) => {
 // fetch the data
    const fetchedData = await fetchData(country);
    // console.log(fetchedData);
    // console.log(country)
   
    // set the state
    this.setState({data: fetchedData, country: country});
  }



  render() {
    const { data , country} = this.state;

    return (
      <div className={styles.container}>
        <h1>App</h1>
        {/* crads comoentente data state'ini props olarak geçelim */}
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data = {data} country={country} />
      </div>
    );
  }
}

export default App;
