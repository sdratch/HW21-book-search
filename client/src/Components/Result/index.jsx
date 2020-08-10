import React from "react";
import { Row, Col } from "../Grid";

const index = (props) => {
  return (
    <Row>
      <Col size="12">
        <div className="card mb-3">
          <div className="d-flex">
            <h4 className="card-title flex-grow-1 p-1">{props.title}</h4>
            <button className="btn btn-primary m-2"> Save</button>
            <a className="btn btn-primary m-2" href = {props.link}> view</a>
          </div>
          <h6 className="card-text p-1">{typeof props.author === "undefined" ? "No Author" : props.author.join(", ")} </h6>
          <div className="row no-gutters">
            <Col size="2">
              <img
                src={props.image}
                className="img-thumbnail"
                alt={props.title}
              />
            </Col>
            <Col size = "10">
              <div className="card-body d-flex flex-column">
                <p className="card-text">
                  {props.description}
                </p>
              </div>
            </Col>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default index;
