import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";
import { Container } from "../Components/Grid";
import Searchbox from "../Components/Searchbox"
class Search extends Component {
  render() {
    return (
      <Container>
        <Jumbotron />
        <Searchbox/>
        <h1>Search Page</h1>
      </Container>
    );
  }
}

export default Search;
