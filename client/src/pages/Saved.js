import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { BookList, ListItem } from "../components/BookList"
import API from "../utils/API";

class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({ savedBooks: res.data })
            })
            .catch((err => console.log(err)))
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                <h1>Google Books Saved</h1>
                                <h1>Search for and save your favorite books</h1>
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12 sm-12">
                        {(this.state.savedBooks && this.state.savedBooks.length > 0) ?
                            <BookList>
                                {this.state.savedBooks.map(book => {
                                    return (
                                        <div>
                                            <ListItem
                                                key={book._id}
                                                title={book.title}
                                                authors={book.authors}
                                                description={book.description}
                                                image={book.thumbnail}
                                                link={book.previewLink}
                                            />
                                            <DeleteBtn onClick={() => this.deleteBook(book.id)} />
                                        </div>

                                    )
                                }
                                )}
                            </BookList>
                            :
                            <h2>No books to display</h2>
                        }


                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Saved;