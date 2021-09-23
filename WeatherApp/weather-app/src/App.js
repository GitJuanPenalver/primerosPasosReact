import { Component } from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render(){
    return (
      <div className="App">
        Weather App (Aplicación del tiempo)
        <WeatherLocation />
      </div>
    );
  }

}

export default App;
