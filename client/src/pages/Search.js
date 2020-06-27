import React, { Component } from "react";
import axios from "axios";
import SaveBtn from "../components/SaveBtn";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { BookList, ListItem } from "../components/BookList";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";


class Search extends Component {
    state = {
        books: [],
        query: "",
        result: {}
    };

    bookSearch = (query) => {
        query = `${this.state.query}`
        API.search(query).then(res =>
            this.setState({ result: res.data, books: res.data.items }))
            .catch(err => console.log(err));
    }



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <div>
                            <Jumbotron>
                                <h1>Google Books Search</h1>
                                <h1>Search for and save your favorite books</h1>
                            </Jumbotron>
                            <input id="bookQ" className="form-control form-control-lg" autoComplete="off" type="text" name="query" onChange={this.handleInputChange} />
                            <button class="btn" type="submit" onClick={this.bookSearch} >
                                Search for Books
          </button>

                            {(this.state.books && this.state.books.length > 0) ?
                                <BookList>
                                    {this.state.books.map(book => {
                                        return (
                                            <div>
                                                <ListItem
                                                    key={book.id}
                                                    title={book.volumeInfo.title}
                                                    authors={book.volumeInfo.authors}
                                                    description={book.volumeInfo.description}
                                                    image={book.volumeInfo.imageLinks.thumbnail}
                                                    link={book.volumeInfo.previewLink}
                                                />
                                                <SaveBtn

                                                    title={book.volumeInfo.title}
                                                    authors={book.volumeInfo.authors}
                                                    description={book.volumeInfo.description}
                                                    image={book.volumeInfo.imageLinks.thumbnail}
                                                    link={book.volumeInfo.previewLink}

                                                />
                                            </div>
                                        )
                                    }
                                    )}
                                </BookList>
                                :
                                <h2>No books to display</h2>
                            }
                        </div>
                    </Col>

                </Row>
            </Container>
        );
    };
}

export default Search;
