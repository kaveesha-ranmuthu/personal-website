import React from "react";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Streamlist from "./pages/streamlist";
import Covid from "./pages/covid";
import WorldWeather from "./pages/worldweather";
import MagicNumbers from "./pages/magicnumbers";
import PersonalSite from "./pages/personalsite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/projects/streamlist" component={Streamlist} exact />
        <Route path="/projects/covid" component={Covid} exact />
        <Route path="/projects/world-weather" component={WorldWeather} exact />
        <Route path="/projects/magic-numbers" component={MagicNumbers} exact />
        <Route
          path="/projects/personal-website"
          component={PersonalSite}
          exact
        />
      </Switch>
    </Router>
  );
};

export default App;
