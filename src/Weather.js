import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°F`
    );
  }
  let apiKey = "8b2194a8687d081654f1ef7f23c1a526";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${props.city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <h2> Hello from Weather.js</h2>
      <Loader
        type="ThreeDots"
        color="white"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}
