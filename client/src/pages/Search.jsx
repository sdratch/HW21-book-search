import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";
import { Container } from "../Components/Grid";
import Searchbox from "../Components/Searchbox";
import Result from "../Components/Result";
class Search extends Component {
  render() {
    return (
      <Container>
        <Jumbotron />
        <Searchbox />

        <div className = "card">
            <div className = "card-body">
            <h5 class="card-title">Search Results</h5>
            <Result />
            </div>
        </div>

      </Container>
    );
  }
}

export default Search;
