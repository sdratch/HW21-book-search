import React from "react";

const index = () => {
  return (
    <Row>
      <Col size="12">
        <div class="card mb-3">
          <div>Header</div>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                src="http://books.google.com/books/content?id=eXHw5iOqzGYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                class="card-img"
                alt="book"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default index;
