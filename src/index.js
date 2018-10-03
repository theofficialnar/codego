import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { indigo, teal } from "@material-ui/core/colors/";

import "./assets/styles.css";
import Navbar from "./Layouts/Navbar";
import Home from "./Views/Home";
import Questionnaire from "./Views/Questionnaire";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: teal
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/question/:question_id" component={Questionnaire} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </MuiThemeProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
