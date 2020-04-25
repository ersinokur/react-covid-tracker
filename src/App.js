import React, { Component } from "react";
import { fetchData } from "./api";

//bu şekilde componentnlerimizi tek seferinde import edebiliyoruz.
//tek sarti componenet klasöründe index.js
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {}, // api'den dönen değerlerimizi bir state objesinde tutalım
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData,
    });

    //console.log(fetchedData);
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <h1>App</h1>
        {/* crads comoentente data state'ini props olarak geçelim */}
        <Cards data={data} /> 
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
