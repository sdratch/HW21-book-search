import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";
import { Container } from "../Components/Grid";
class Search extends Component {
  render() {
    return (
      <Container>
        <Jumbotron />
        <h1>Search Page</h1>
      </Container>
    );
  }
}

export default Search;
