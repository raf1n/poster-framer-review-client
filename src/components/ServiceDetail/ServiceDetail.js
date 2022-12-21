import React from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";
const ServiceDetail = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <section className="flex justify-center my-6 mx-16">
      <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" className="h-80 bg-gray-500 aspect-video" />
          </PhotoView>
        </PhotoProvider>

        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
          <h3 className="text-3xl font-bold">{name}</h3>
          <p className="my-6 text-gray-600">{description}</p>
          <p className="text-cyan-800 font-semibold text-2xl">
            Price: {price}$
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
