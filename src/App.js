import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [datas, setDatas] = useState([]);

  axios
    .get("https://api.opencovid.ca/summary")
    .then((response) => {
      // handle success
      const provinces = response.data.summary;
      setDatas([...provinces]);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return (
    <div className="App">
      <Header />
      {datas.map((data, index) => {
        return (
          <Card
            key={index}
            province={data.province}
            cases={data.active_cases}
            new={data.cases}
            date={data.date}
            recovered={data.recovered}
            deaths={data.deaths}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
