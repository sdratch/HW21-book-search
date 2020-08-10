import React from "react";
import { Row, Col } from "../Grid";

const index = (props) =>{
    return (
      <Row>
        <Col size="12">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Book Search</h5>
              <p className="card-text">
                Enter the title of a book that you want to search for below and
                press the search button
              </p>
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  name="search"
                  value={props.search}
                  onChange ={props.handleInputChange}
                />
              </div>
              <button className="btn btn-primary mt-2 float-right" onClick = {props.handleSubmit}>
                Search
              </button>
            </div>
          </div>
        </Col>
      </Row>
    );
}

export default index;
