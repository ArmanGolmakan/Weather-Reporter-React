import React from 'react';
import Titles from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "5998be8d6f70584aae51af862b375c26";

class App extends React.Component {

  state = { //declare our constructor attributes
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault(); //prevents the webpage to do a full refresh when the form button is pressed
    const cityName = e.target.elements.city.value;
    const countryName = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${API_KEY}`);
    const data = await api_call.json();
    if (cityName && countryName) {
      this.setState({ //assign our constructor's attributes
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
      });
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the name of country and city!"
      });
    }
  }

  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;