import React from "react";
import Advertisement from "./Advertisement";

export const AdsList = () => {
  const adList = [
    {
      picture: "../Mansion.png",
      title: "House",
      seller: "anders loren",
      description: "A fine mansion",
      contact: "anders@loren.com",
    },
    {
      picture: "../Car.png",
      title: "Car",
      seller: "mikael engvall",
      description: "A brand new VolvoXC90",
      contact: "mikael@engvall.com",
    },
    {
      picture: "../Horse.png",
      title: "Horse",
      seller: "anders loren",
      description: "A fast stallion",
      contact: "ankael@lorvall.com",
    },
  ];

  return (
    <>
      <div class="container mt-5">
        <div id="advertisements" class="row">
          {adList.map((ad) => (
            <Advertisement
              key={ad.id}
              picture={ad.picture}
              title={ad.title}
              seller={ad.seller}
              contact={ad.contact}
              description={ad.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};
