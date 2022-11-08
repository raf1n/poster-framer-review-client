import React from "react";

const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl mb-10">
        Why Choose <span className="text-cyan-700">Poster Framer </span>
      </h1>
      <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center mx-auto mb-4 rounded-full w-20 h-16 lg:w-20">
            <img
              src="https://cdn.shopify.com/s/files/1/0048/0274/0297/t/83/assets/usp_icon_truck.svg?v=116881316950794460001664268479"
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Delivery Accross country
          </h6>
          <div className="mb-2 text-gray-700">
            Offer you fast and flexible delivery.
          </div>
        </div>
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center mx-auto mb-4 rounded-full w-20 h-16 lg:w-20">
            <img
              src="https://cdn.shopify.com/s/files/1/0048/0274/0297/t/83/assets/usp_icon_sustainability.svg?v=54727316679478740131664268479"
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Sustainable concept
          </h6>
          <div className="mb-2 text-gray-700">
            Provide minimal waste by printing on demand!
          </div>
        </div>
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center mx-auto mb-4 rounded-full w-20 h-16 lg:w-20">
            <img
              src="https://cdn.shopify.com/s/files/1/0048/0274/0297/t/83/assets/usp_icon_star.svg?v=63293096236667060421664268479"
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Quality Guranteed
          </h6>
          <div className="mb-2 text-gray-700">
            Customers get highly Qualityful Service.
          </div>
        </div>
        <div className="px-12 text-center sm:px-0">
          <div className="flex items-center justify-center mx-auto mb-4 rounded-full w-20 h-16 lg:w-20">
            <img
              src="https://cdn.shopify.com/s/files/1/0048/0274/0297/t/83/assets/usp_icon_quick.svg?v=104981039830173353211664268479"
              alt=""
            />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Fast delivery
          </h6>
          <div className="mb-2 text-gray-700">
            Order before 10:00, and I'll ship the same day!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
