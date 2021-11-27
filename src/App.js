import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import MainSection from "./Component/MainSection/MainSection";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Coxbazar from "./Component/CoxBazar/Coxbazar";
import Srimongol from "./Component/Srimongol/Srimongol";
import Sundorbon from "./Component/Sundorbon/Sundorbon";
import { createContext, useState } from "react";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Shipment from "./Component/Shipment/Shipment";
import Login from "./Component/Login/Login";
import NewusersignUp from "./Component/NewusesignUp/NewusersignUp";
import ShipmentRoom from "./Component/ShipmentRoom/ShipmentRoom";
import News from "./Component/News/News";
import NewsItem from "./Component/NewsItem/NewsItem";
import Contact from "./Component/Contact/Contact";

export const userContext = createContext();

function App() {
  const [loggedInuser, setloggedInuser] = useState({});
  return (
    <userContext.Provider value={[loggedInuser, setloggedInuser]}>
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/main-section">
              <MainSection></MainSection>
            </Route>
            <Route exact path="/">
              <MainSection></MainSection>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/newusersignup">
              <NewusersignUp></NewusersignUp>
            </Route>

            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path="/news">
              <News></News>
            </Route>
            <Route path="/newsitem">
              <NewsItem></NewsItem>
            </Route>
            <Route path="/cox-bazar">
              <Coxbazar></Coxbazar>
            </Route>
            <Route path="/srimongol">
              <Srimongol></Srimongol>
            </Route>
            <Route path="/sundorbon">
              <Sundorbon></Sundorbon>
            </Route>
          </Switch>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
