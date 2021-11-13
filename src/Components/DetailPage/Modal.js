import React, { useEffect, useState } from "react";
import ChartWeather from "./ChartWeather";
import { ModalStyled } from "./ModalStyled";

const Modal = ({ city, closeModal }) => {
  // const initialState = { weatherTime: null };
  const [state, setState] = useState(null);
  const [showChart, setShowChart] = useState(false);
  // const [modal, setModal] = useState(null);

  useEffect(() => {
    addtime();
  }, []);
  const data = [state];
  const addtime = () => {
    const date = new Date();
    // const response = date.toISOString().substr(0, 10);
    // console.log(date.toISOString().substr(0, 10));
    const weatherToday = city.list.filter(item => item.dt_txt.substr(0, 10) === date.toISOString().substr(0, 10));
    // const response = city.list.map(item => item.dt_txt.substr(0, 10));
    const weather = weatherToday.map(item => ({
      name: item.dt_txt.substr(10, 15),
      temp: item.main.temp,
      humidity: item.main.humidity,
      windSpeed: item.wind.speed,
      pressure: item.main.pressure
    }));

    setState({
      weather
    });
    // setModal({
    //   city
    // });

    // .map(item => ({
    //   name: item
    // }));
    // const temp = weatherToday
    //   .map(item => item.main.temp)
    //   .map(item => ({
    //     uv: item
    //   }));

    // const result = { weatherTime, temp };
    // console.log(weatherTime);
  };
  const addParameter = () => {
    setShowChart(!showChart);
  };
  const addState = () => {
    // console.log(state.weather.map(item => item.name.substr(0, 6)));
    console.log(city);
  };
  return (
    <>
      <ModalStyled>
        {/* {addtime()} */}
        <div className="Overlay">
          <div className="Modal">
            <div className="optional_container">
              {" "}
              <button className="optional" onClick={closeModal}>
                Close
              </button>
              <button className="optional" onClick={addParameter}>
                Chart
              </button>
            </div>
            {/* <button onClick={addState}>addState</button> */}
            <p>{city.population}</p>
            {/* <button onClick={addtime}>addtime</button> */}
            {showChart ? (
              <ChartWeather today={state.weather} />
            ) : (
              <ul>
                <h2 className="modal__title">all information about city </h2>

                <li className="modal__text">
                  <p>Country:{city.city.country}</p>
                  <p>Population:{city.city.population}</p>
                  <p>Timezone:{city.city.timezone}</p>
                  <p>
                    Сoordinates:<span>latitude:{city.city.coord.lat}</span>,<span>longitude:{city.city.coord.lon}</span>
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </ModalStyled>
    </>
  );
};

export default Modal;
