import { Route } from "react-router-dom";
import DetailPage from "./Components/DetailPage/Modal";
import MainPage from "./Components/MainPage/MainPage";
import { Switch } from "react-router-dom";
import ChartWeather from "./Components/DetailPage/ChartWeather";
import styled from "../src/Components/styled.module.css";
function App() {
  return (
    <>
      <div className={styled.city__image}>
        <MainPage />
      </div>
      {/* <div className={styled.city__image}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/detail" component={DetailPage} />
          <Route exact path="/chart" component={ChartWeather} />
        </Switch>
      </div> */}
    </>
  );
}

export default App;
