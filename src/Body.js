import React from "react";

const Body = () => {
  return (
    <div class="container mt-5">
      <h2 class="mb-4">Advertisement List</h2>

      <div id="advertisements" class="row">
        <script src="index.js"></script>

        <div class="card mb-4 col-md-4">
          <img
            class="card-img-top"
            src="https://via.placeholder.com/150"
            alt="Ad 1"
          />
          <div class="card-body">
            <h5 class="card-title">Ad 1</h5>
            <p class="card-text">This is the first advertisement.</p>
            <p
              class="card-text"
              onclick="alert('Contact: contact1@example.com')"
            >
              Contact: ***
            </p>
          </div>
          <div class="card-footer text-center">
            <button
              class="btn btn-info btn-block"
              onclick="alert('Contact: contact1@example.com')"
            >
              Details
            </button>
          </div>
        </div>

        <div class="card mb-4 col-md-4">
          <img
            class="card-img-top"
            src="https://via.placeholder.com/150"
            alt="Ad 2"
          />
          <div class="card-body">
            <h5 class="card-title">Ad 2</h5>
            <p class="card-text">This is the second advertisement.</p>
            <p
              class="card-text"
              onclick="alert('Contact: contact2@example.com')"
            >
              Contact: ***
            </p>
          </div>
          <div class="card-footer text-center">
            <button
              class="btn btn-info btn-block"
              onclick="alert('Contact: contact2@example.com')"
            >
              Details
            </button>
          </div>
        </div>

        <div class="card mb-4 col-md-4">
          <img
            class="card-img-top"
            src="https://via.placeholder.com/150"
            alt="Ad 3"
          />
          <div class="card-body">
            <h5 class="card-title">Ad 3</h5>
            <p class="card-text">This is the third advertisement.</p>
            <p
              class="card-text"
              onclick="alert('Contact: contact3@example.com')"
            >
              Contact: ***
            </p>
          </div>
          <div class="card-footer text-center">
            <button
              class="btn btn-info btn-block"
              onclick="alert('Contact: contact3@example.com')"
            >
              Details
            </button>
          </div>
        </div>

        <div class="card mb-4 col-md-4">
          <img
            class="card-img-top"
            src="https://via.placeholder.com/150"
            alt="Ad 4"
          />
          <div class="card-body">
            <h5 class="card-title">Ad 4</h5>
            <p class="card-text">This is the fourth advertisement.</p>
            <p
              class="card-text"
              onclick="alert('Contact: contact4@example.com')"
            >
              Contact: ***
            </p>
          </div>
          <div class="card-footer text-center">
            <button
              class="btn btn-info btn-block"
              onclick="alert('Contact: contact4@example.com')"
            >
              Details
            </button>
          </div>
        </div>

        <div class="card mb-4 col-md-4">
          <img
            class="card-img-top"
            src="https://via.placeholder.com/150"
            alt="Ad 5"
          />
          <div class="card-body">
            <h5 class="card-title">Ad 5</h5>
            <p class="card-text">This is the fifth advertisement.</p>
            <p
              class="card-text"
              onclick="alert('Contact: contact5@example.com')"
            >
              Contact: ***
            </p>
          </div>
          <div class="card-footer text-center">
            <button
              class="btn btn-info btn-block"
              onclick="alert('Contact: contact5@example.com')"
            >
              Details
            </button>
          </div>
        </div>

        <div class="card mb-4 col-md-4">
          <img
            class="card-img-top"
            src="https://via.placeholder.com/150"
            alt="Ad 6"
          />
          <div class="card-body">
            <h5 class="card-title">Ad 6</h5>
            <p class="card-text">This is the sixth advertisement.</p>
            <p
              class="card-text"
              onclick="alert('Contact: contact6@example.com')"
            >
              Contact: ***
            </p>
          </div>
          <div class="card-footer text-center">
            <button
              class="btn btn-info btn-block"
              onclick="alert('Contact: contact6@example.com')"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
