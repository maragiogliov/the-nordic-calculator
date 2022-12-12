import React, { Component } from 'react';
import './app.scss';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '@carbon/react';
import TheHeader from './components/TheHeader/TheHeader';
import { Content } from '@carbon/react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import WelcomePage from './content/WelcomePage';
import HousePage from './content/HousePage/HousePage'

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

          </Switch>
        </Content>
      </Theme>
      </BrowserRouter>, 
      </>
    );
  }
}



export default App;
