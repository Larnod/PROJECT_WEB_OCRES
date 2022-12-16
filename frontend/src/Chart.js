import './App.css';
import React from 'react';



class AirportAPI extends React.Component {
  constructor(props) {
    super(props);   //Creéattion de l'objet Airport qui va recevoir l'objet de la requête
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
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
      </div> //Barre de progression de chargement
    } else {
      return (  


        <div class="body">

<div>
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
              <lo for="site-search">Trouver un aéroport</lo>
            <input type="search" id="site-search" name="q" width="100px"/>    
            <button>Search</button>
              <lo>Services</lo>
            </ul>
          </div> 
    </div>

        </div>

      );
    }
  }
}

export default AirportAPI;







