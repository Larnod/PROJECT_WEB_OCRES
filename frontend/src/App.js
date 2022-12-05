import React from "react";
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
    fetch("https://airlabs.co/api/v9/nearby?lat=48.91804697277685&lng=2.58&distance=25&lang=fr&api_key=05195ff7-398c-47c1-a4ed-0d2e16a2656e")
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
      return <div class="progress">
      <div class="color"></div>
    </div>
    } else {
      return (


        <div class="body">

          <input type="checkbox" id="ham-menu"></input>
          <label for="ham-menu">
            <div class="hide-des">
              <span class="menu-line"></span>
              <span class="menu-line"></span>
              <span class="menu-line"></span>
              <span class="menu-line"></span>
              <span class="menu-line"></span>
              <span class="menu-line"></span>
            </div>

          </label>
          <div class="full-page-green"></div>
          <div class="ham-menu">
            <ul class="centre-text bold-text">
              <li>Accueil</li>
              <li>Serices</li>
            </ul>
          </div>

          <div class="titre">Dashboard Aéroports</div>

          <div id="one" class="widget">
            <div class="city">
              <li>Nom de l'aéroport</li>
              {data.response.airports[1].name}
            </div>
          </div>

          <div id="two" class="widget">
            <div class="city">
              <li>Nombre de Voyageurs</li>
              {data.response.airports[1].popularity}
            </div>
          </div>

          <div id="three" class="widget">
            <div class="city">
              <li>Distance</li>
              {data.response.airports[1].distance}
            </div>
          </div>

          <div id="four" class="widget">
            <div class="city">
              <li>Code de l'aéroport</li>
              {data.response.airports[1].iata_code}
            </div>
          </div>

          <div id="six" class="widget">
            <dt>DISTANCE DES AÉROPORTS</dt>
            <dd class="percentage-10"><span class="text">{data.response.airports[0].icao_code}</span><div class="bar"></div></dd>
            <dd class="percentage-20"><span class="text">{data.response.airports[1].icao_code}</span><div class="bar"></div></dd>
            <dd class="percentage-30"><span class="text">{data.response.airports[2].icao_code}</span><div class="bar"></div></dd>
            <dd class="percentage-40"><span class="text">{data.response.airports[3].icao_code}</span><div class="bar"></div></dd>
            <dd class="percentage-50"><span class="text">{data.response.airports[4].icao_code}</span><div class="bar"></div></dd>

          </div>

          <div id="five" class="widget">
            <div class="city">
              <li>Code du pays</li>
              {data.response.airports[1].country_code}
            </div>
          </div>

          

        </div>

      );
    }
  }
}

export default AirportAPI;






