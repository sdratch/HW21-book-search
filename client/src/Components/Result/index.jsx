import React from "react";
import { Row, Col } from "../Grid";
import axios from "axios";

const index = (props) => {
  function handleSave() {
    axios
      .post("/api/books", props)
      .then(() => console.log("Sucessfully saved book"))
      .catch((err) => console.log(err));
  }

  function handleDelete() {
    axios
      .delete("/api/books/" + props.id)
      .then(() => {
        console.log("Sucessfully deleted book");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  return (
    <Row>
      <Col size="12">
        <div className="card mb-3">
          <div className="d-flex">
            <h4 className="card-title flex-grow-1 p-1">{props.title}</h4>

            {props.type === "save" ? (
              <button className="btn btn-primary m-2" onClick={handleDelete}>
                Delete
              </button>
            ) : (
              <button className="btn btn-primary m-2" onClick={handleSave}>
                Save
              </button>
            )}
            <a className="btn btn-primary m-2" href={props.link}>
              view
            </a>
          </div>
          <h6 className="card-text p-1">
            {typeof props.author === "undefined"
              ? "No Author"
              : props.author.join(", ")}{" "}
          </h6>
          <div className="row no-gutters">
            <Col size="2">
              {typeof props.image === "undefined" ? (
                <img
                  src="https://via.placeholder.com/150x200?text=No+Image+Found"
                  className="img-thumbnail"
                  alt={props.title}
                />
              ) : (
                <img
                  src={props.image}
                  className="img-thumbnail"
                  alt={props.title}
                />
              )}
            </Col>
            <Col size="10">
              <div className="card-body d-flex flex-column">
                <p className="card-text">{props.description}</p>
              </div>
            </Col>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default index;
