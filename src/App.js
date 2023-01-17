import React, { Component } from 'react';
import './app.scss';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@carbon/react';
import TheHeader from './components/TheHeader/TheHeader';
import { Content } from '@carbon/react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import WelcomePage from './content/WelcomePage';
import HousePage from './content/HousePage';
import CarPage from './content/CarPage';
import MotorbikePage from './content/MotorbikePage';
import BusRailPage from './content/BusRailPage';
import SecondaryPage from './content/SecondaryPage'
import ResultsPage from './content/ResultsPage';
import FlightPage from './content/FlightPage';
import CalculatorTest from './content/CalculatorTest/CalculatorTest';
// import SecondaryPage from './content/SecondaryPage';
// import ResultsPage from './content/ResultsPage';

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Theme theme="g100">
       <TheHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/welcome" component={WelcomePage} />
            <Route path="/house" component={HousePage} />
            <Route path="/flight" component={FlightPage} />
            <Route path="/car" component={CarPage} />
            <Route path="/motorbike" component={MotorbikePage} />
            <Route path="/bus-rail" component={BusRailPage} />
            <Route path="/secondary" component={SecondaryPage} />
            <Route path="/results" component={ResultsPage} />
            <Route path="/calculatorTest" component={CalculatorTest} />
            {/* <Route path="/secondary" component={SecondaryPage} />
            <Route path="/results" component={ResultsPage} /> */}
          </Switch>
        </Content>
      </Theme>
      </BrowserRouter>
      </>
    );
  }
}



export default App;
