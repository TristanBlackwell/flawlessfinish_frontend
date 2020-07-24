import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { ApolloProvider } from "react-apollo";
import client from "./utils/apolloClient";

import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import WellnessRooms from "./components/WellnessRooms";
import Contact from "./components/Contact";

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 500,
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ApolloProvider client={client}>
            <Switch>
              <Route path="/" component={Landing} exact />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/wellness-rooms" component={WellnessRooms} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </ApolloProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
