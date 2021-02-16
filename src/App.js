import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { ApolloProvider } from "react-apollo";
import client from "./utils/apolloClient";

import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import WellnessRooms from "./components/WellnessRooms";
import Vouchers from "./components/Vouchers";
import Contact from "./components/Contact";
import Success from "./components/success";

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 500,
    });

    const script = document.createElement("script");
    script.async = true;
    script.text = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}; window.gtag = gtag; window.loc = window.location.pathname; gtag('js', new Date()); gtag('config', 'UA-177627430-1', { \"page_title\": \"website load\" });"
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop>
            <ApolloProvider client={client}>
              <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/wellness-rooms" component={WellnessRooms} />
                <Route path="/vouchers" component={Vouchers} />
                <Route path="/contact" component={Contact} />
                <Route path="/success" component={Success} />
              </Switch>
            </ApolloProvider>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
