import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
const ServiceCards = ({ service }) => {
  const { description, _id, img, name, price } = service;
  return (
    <div className="card-compact w-80 lg:w-96 bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={img}>
          <figure>
            <img
              style={{ objectFit: "cover" }}
              alt=""
              className="w-96 h-56"
              src={img}
            />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{name}</h2>
        </div>
        {description.length >= 100
          ? description.slice(0, 100) + "..."
          : description}
        <div className="my-2">
          <p className="text-yellow-500 flex items-end">
            <span className="text-black text-xl mr-1 font-semibold">
              Price: {price}$
            </span>
          </p>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/service/${_id}`}>
            <button className="btn btn-wide btn-outline btn-accent glass">
              <span className="text-cyan-900">View Details</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
