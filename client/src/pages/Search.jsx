import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";
import { Container } from "../Components/Grid";
import Searchbox from "../Components/Searchbox";
import Result from "../Components/Result";
import axios from "axios"
class Search extends Component {
    state = {
        search: "",
      };
    
      handleInputChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
          [name]: value,
        });
        console.log(this.state.search);
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        console.log("Sucessfully clicked");
        axios
          .get(
            "https://www.googleapis.com/books/v1/volumes?q=intitle:" +
              this.state.search
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      };

  render() {
    return (
      <Container>
        <Jumbotron />
        <Searchbox
        search = {this.state.search}
        handleInputChange = {this.handleInputChange}
        handleSubmit = {this.handleSubmit}
        />

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Search Results</h5>
            <Result />
          </div>
        </div>
      </Container>
    );
  }
}

export default Search;
