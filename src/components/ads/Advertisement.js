import React, { useState } from "react";

const Advertisement = (props) => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    if (showContact) {
      setShowContact(false);
    } else {
      setShowContact(true);
    }
  };

  const contact = props.contact + "\n"

  return (
    <div className="card mb-4 col-md-4">
      <img className="card-img-top" src={props.picture} alt="Picture could not be shown"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-description">{props.description}</p>
        <p className="card-text" onClick={handleContactClick}>
        {showContact ? (
    <> Email: {props.contact} <br />
      Seller: {props.seller}
    </>
  ) : (
    "Show contact: ***"
  )}
        </p>
      </div>
      <div className="card-footer text-center">
        <button
          className="btn btn-info btn-block"
          onClick={() =>
            alert(
              `Title: ${props.contact}\nDescription: ${props.description}\nContact ${props.contact}`
            )
          }
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Advertisement;
