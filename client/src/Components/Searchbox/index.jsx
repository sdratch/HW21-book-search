import React from "react";
import { Row, Col } from "../Grid";

const index = () => {
  return (
    <Row>
      <Col size="12">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Book Search</h5>
            <p className="card-text">
              Enter the title of a book that you want to search for below and press the search button
            </p>
            <div class="input-group input-group-lg">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
              <button className="btn btn-primary mt-2 float-right">Search</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default index;
