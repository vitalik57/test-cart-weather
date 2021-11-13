import axios from "axios";
import React, { Component } from "react";
import Cartlist from "../CartList/Cartlist";
import Modal from "../DetailPage/Modal";
import { MainStyled } from "./MainStyled";

const APIKEY = "84b5504ed7c5877d7d9a17faefca48bd";

class MainPage extends Component {
  state = { weather: [], input: "", showModal: false, city: null };
  componentDidMount() {
    // console.log('App componentDidMount');

    const weather = localStorage.getItem("weather");
    const parsedWeather = JSON.parse(weather);

    if (parsedWeather) {
      this.setState({ weather: parsedWeather });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextWeather = this.state.weather;
    const prevWeather = prevState.weather;

    if (nextWeather !== prevWeather) {
      localStorage.setItem("weather", JSON.stringify(nextWeather));
    }
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  };
  getCountry = city => {
    this.setState({
      city: city
    });
  };

  changeInput = e => {
    const { name, value } = e.target;
    this.setState(prev => ({ ...prev, [name]: value }));
  };

  addCountry = e => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.input}&appid=${APIKEY}`).then(res =>
      this.setState(prev => ({
        ...prev,
        weather: [...prev?.weather, res.data]
      }))
    );
    this.reset();
  };

  removeCart = id => {
    const updated = this.state.weather.filter(item => item.city.id !== id);
    this.setState(prev => ({
      ...prev,
      weather: updated
    }));
  };
  reset = () => {
    this.setState(prev => ({
      ...prev,
      input: ""
    }));
  };
  update = (name, id) => {
    this.removeCart(id);
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${APIKEY}`).then(res =>
      this.setState(prev => ({
        ...prev,
        weather: [...prev?.weather, res.data]
      }))
    );
  };
  render() {
    const { input, weather, showModal, city } = this.state;

    return (
      <>
        {" "}
        <MainStyled>
          <div>
            <form>
              <input className="main__input" type="text" name="input" value={input} onChange={this.changeInput} />
              <button className="main__button" onClick={this.addCountry} type="button">
                add country
              </button>
            </form>

            <Cartlist
              update={this.update}
              weather={weather}
              getCountry={this.getCountry}
              toggleModal={this.toggleModal}
              removeCart={this.removeCart}
            />

            {showModal ? <Modal city={city} closeModal={this.toggleModal} /> : ""}
          </div>
        </MainStyled>
      </>
    );
  }
}

export default MainPage;
