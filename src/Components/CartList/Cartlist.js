import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CartListStyled } from "./CartListStyled";
import sprite from "../../images/sprite.svg";
const Cartlist = ({ weather, removeCart, getCountry, toggleModal, update }) => {
  // const [state, setState] = useState(false);
  // const toggleModal = () => {
  //   setState(({ showModal }) => ({
  //     showModal: !showModal
  //   }));
  // };

  return (
    <>
      {" "}
      <CartListStyled>
        {weather?.map(item => (
          <li className="galery_item" key={item.city.id} onClick={() => getCountry(item)}>
            <button className="update__cart" type="button" onClick={() => update(item.city.name, item.city.id)}>
              <svg className="galery_svg_update" width="32px" height="32px">
                <use href={sprite + "#icon-update"} />
              </svg>
            </button>
            <h2>{item.city.name}</h2>
            <p className="galery_item_barometer">Date {item.list[0].dt_txt.substr(0, 11)}</p>
            <p className="galery_item_temperature"> Temp:{(item.list[0].main.temp - 273).toFixed(2)} C°</p>
            <div className="container__svg">
              {" "}
              <div className="galery_item_barometer">
                <svg className="galery_svg_humidity" width="35px" height="30px">
                  <use href={sprite + "#icon-humidity"} />
                </svg>
                <p className="peshka__humidity">Humidity:{item.list[0].main.humidity}%</p>
              </div>
              <div className="galery_item_barometer">
                <svg className="galery_svg_pressure" width="32px" height="30px">
                  <use href={sprite + "#icon-barometer"} />
                </svg>
                <p className="peshka__pressure">Pressure:{item.list[0].main.pressure}mm</p>{" "}
              </div>
              <div className="galery_item_barometer">
                <svg className="galery_svg_speed" width="30" height="30px">
                  <use href={sprite + "#icon-wind"} />
                </svg>
                <p className="peshka__speed">Wind speed:{item.list[0].wind.speed}m/s</p>
              </div>
            </div>
            <div className="optional_container">
              <button className="optional" type="button" onClick={() => removeCart(item.city.id)}>
                delate
              </button>

              <button className="optional" type="button" onClick={toggleModal}>
                Detail
                {/* <NavLink to="/detail">Detail</NavLink> */}
              </button>
            </div>
          </li>
        ))}
      </CartListStyled>
    </>
  );
};

export default Cartlist;
