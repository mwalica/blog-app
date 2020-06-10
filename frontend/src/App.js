import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import Navbar from "./components/layout/Navbar";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import UserArticles from "./components/pages/UserArticles";

import ArticleState from "./context/article/ArticleState";

const App = () => {
  return (
    <ArticleState>
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/userarticles" component={UserArticles} />
            </Switch>
          </Container>
        </ThemeProvider>
      </Router>
    </ArticleState>
  );
};

const Container = styled.div`
  width: 80vw;
  max-width: 1024px;
  margin: 0 auto;
`;

export default App;
