import React, { Component } from "react";
import Jumbotron from "../Components/Jumbotron";
import { Container } from "../Components/Grid";
import Searchbox from "../Components/Searchbox";
import Result from "../Components/Result";
import axios from "axios";
class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  handleInputChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=intitle:" +
          this.state.search
      )
      .then((res) => {
        this.setState({ results: res.data.items })
      })
      .catch((err) => console.log(err));
  };
  handleSave = (event) => {
    event.preventDefault();
    console.log(event.target.title)
    //axios.put("/api/books", )
  }

  render() {
    return (
      <Container>
        <Jumbotron />
        <Searchbox
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Search Results</h5>
            {this.state.results.length ? (
              this.state.results.map((book) => {
                return (
                  <Result
                  key = {book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={
                        book.volumeInfo.imageLinks.thumbnail
                    }
                    link={book.volumeInfo.infoLink}
                  />
                );
              })
            ) : (
              <h1>Type in book title and submit to see results</h1>
            )}
          </div>
        </div>
      </Container>
    );
  }
}

export default Search;
