import React from 'react';

const Advertisement = (props) => {
    return (
        <div className="card mb-4 col-md-4">
        <img
          className="card-img-top"
          src={props.picture}
          alt="Ad Title"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text" onClick={() => alert(`Contact: ${props.contact}`)}>
            Contact: ***
          </p>
        </div>
        <div className="card-footer text-center">
          <button
            className="btn btn-info btn-block"
            onClick={() => alert(`Title: ${props.contact}\nDescription: ${props.description}\nContact ${props.contact}`)}
          >
            Details
          </button>
        </div>
      </div>
    );
};

export default Advertisement;