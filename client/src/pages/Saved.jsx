import React, { Component } from "react";
import { Container } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";
import Result from "../Components/Result";
import axios from "axios";
class Saved extends Component {
  state = {
    results: [],
  };
  componentDidMount() {
    axios
      .get("/api/books")
       .then((res) => this.setState({ results: res.data }))
      //.then((res) =>console.log(res.data))
      .catch((err) => console.log(err));

  }

  render() {
    return (
      <Container>
        <Jumbotron />
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Saved Results</h5>

            {this.state.results.length ? (
              this.state.results.map((book) => {
                return (
                  <Result
                    key={book._id}
                    title={book.title}
                    author={book.authors}
                    description={book.description}
                    image={book.image}
                    link={book.link}
                    handleSave={this.handleSave}
                  />
                );
              })
            ) : (
              <h1>No saved Books</h1>
            )}
          </div>
        </div>
      </Container>
    );
  }
}

export default Saved;
