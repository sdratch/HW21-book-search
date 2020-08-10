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

  componentDidMount() {
    // axios
    // .get(
    //   "https://www.googleapis.com/books/v1/volumes?q=intitle:butter"
    // )
    // .then((res) => this.setState({ results: res.data.items }))
    // .catch((err) => console.log(err));
    this.setState({
      results: [
        {
          volumeInfo: {
            title: "The New York Times Dictionary of Money and Investing",
            authors: ["Gretchen Morgenson", "Campbell R. Harvey, Ph.D."],
            description:
              "An alphabetical reference containing more than 3,500 financial terms combines definitions, lucid explanations, and examples to simplify complex financial issues.",
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=eXHw5iOqzGYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=eXHw5iOqzGYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            },
            infoLink:
              "http://books.google.com/books?id=eXHw5iOqzGYC&dq=intitle:money&hl=&source=gbs_api",
          },
        },
      ],
    });
  }

  handleInputChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value,
    });
    console.log(this.state.results[0].volumeInfo.title)
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=intitle:" +
          this.state.search
      )
      .then((res) => this.setState({ results: res.data.items }))
      .catch((err) => console.log(err));
  };


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
                <Result 
                title = {this.state.results[0].volumeInfo.title}
                author = {this.state.results[0].volumeInfo.authors}
                description = {this.state.results[0].volumeInfo.description}
                image = {this.state.results[0].volumeInfo.imageLinks.thumbnail}
                link = {this.state.results[0].volumeInfo.infoLink}     
               />
             ): ( 
                <h1>Nothing avaliable</h1>
             )}
            

          </div>
        </div>
      </Container>
    );
  }
}

export default Search;
