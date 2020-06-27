import React from "react";
import axios from "axios";
// import "./style.css";

class SaveBtn extends React.Component {

    updateDB = (book) => {
        var saveToDB = {
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.thumbnail,
            link: book.previewLink

        }
        console.log(saveToDB)


        axios.post("/api/books", saveToDB)
            // Books result
            // console.log(result.data);
            .then(() => {
                //console.log(res);
                alert(`${this.title} is saved`)
            })
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <button className="btn" role="button" onClick={() => { this.updateDB(this.props) }}>
                    Save
    </button>
            </div>
        );
    }
}

export default SaveBtn;