import React from "react";
import bannerImage from "../../assets/images/banner/banner-image.jpg";
const Banner = () => {
  return (
    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-2xl font-medium tracking-wide text-gray-800  lg:text-4xl">
            Find your <span className="text-cyan-700">Premium Poster</span>{" "}
            framed by ME.
          </h1>
          <p className="mt-2 text-gray-600">
            Browse the hottest posters of different categories. You can even
            Customize! Plus, choose from custom framing, canvas and wood
            mounting to truly make a piece your own — all high-quality at
            amazing prices.
          </p>
          <div className="grid gap-6 mt-8 sm:grid-cols-2">
            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-700">
              <svg
                className="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span className="mx-3">Premium Work</span>
            </div>

            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-700">
              <svg
                className="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span className="mx-3">Customizable Service</span>
            </div>

            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-700">
              <svg
                className="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span className="mx-3">5-star quality</span>
            </div>

            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-700">
              <svg
                className="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span className="mx-3">Fast delivery</span>
            </div>

            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-700">
              <svg
                className="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span className="mx-3">Payment Security</span>
            </div>

            <div className="flex items-center text-gray-800 -px-3 dark:text-gray-700">
              <svg
                className="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span className="mx-3">Budget Friendly</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full max-w-2xl rounded-md"
          src={bannerImage}
          alt="bannerImg"
        />
      </div>
    </div>
  );
};

export default Banner;
