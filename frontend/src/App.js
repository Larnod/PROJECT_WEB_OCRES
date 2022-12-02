import React, { Component } from "react";
import axios from "axios";
import './App.css';

class AirportAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://airlabs.co/api/v9/nearby?lat=48.91804697277685&lng=2.2593436484584744&distance=15&lang=fr&api_key=05195ff7-398c-47c1-a4ed-0d2e16a2656e")
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            isLoaded: true,
            items: result
          });

          console.log(this.state.items);
          console.log("use");
        },


        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const data = this.state.items;
    const test = "oui";
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

        
        <div class="body">



          <div class="widget">
          <div id="col-1" class="city">
            {data.response.airports[0].name}
          </div>
          <div class="code">
            {data.response.airports[0].iata_code}
            <div></div>
            {data.response.airports[0].icao_code}
          </div>
          </div>

          <div id="col-2" class="widget">
            <div class="city">
              {data.response.airports[1].name}
            </div>
            <div class="code">
              {data.response.airports[1].iata_code}
              <div></div>
              {data.response.airports[1].icao_code}
            </div>
          </div>

          <div id="col-3" class="widget">
            <div class="city">
              {data.response.airports[0].name}
            </div>
            <div class="code">
              {data.response.airports[0].iata_code}
              <div></div>
              {data.response.airports[0].icao_code}
            </div>
          </div>

          <div id="<col-4" class="widget">
            <div class="city">
              {data.response.airports[0].name}
            </div>
            <div class="code">
              {data.response.airports[0].iata_code}
              <div></div>
              {data.response.airports[0].icao_code}
            </div>
          </div>

          <div id="col-5" class="widget">
            <div class="city">
              {data.response.airports[0].name}
            </div>
            <div class="code">
              {data.response.airports[0].iata_code}
              <div></div>
              {data.response.airports[0].icao_code}
            </div>
          </div>



        </div>

      );
    }
  }
}

export default  AirportAPI;






