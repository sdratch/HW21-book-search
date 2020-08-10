import React from "react";
import { Row, Col } from "../Grid";

const index = () => {
  return (
    <Row>
      <Col size="12">
        <div class="card mb-3">
          <div className="d-flex">
            <h3 class="card-title flex-grow-1 p-1">Book title</h3>
            <button className="btn btn-primary m-2"> Save</button>
            <button className="btn btn-primary m-2"> view</button>
          </div>
          <h5 className="card-text p-1"> Author</h5>
          <div class="row no-gutters">
            <Col size="2">
              <img
                src="http://books.google.com/books/content?id=eXHw5iOqzGYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                class="img-thumbnail"
                alt="book"
              />
            </Col>
            <Col size = "10">
              <div class="card-body d-flex flex-column">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longersdfsdfsdfddddddddddddddddddddddddddddddddddddddddd.
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
