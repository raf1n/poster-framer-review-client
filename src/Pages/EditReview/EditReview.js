import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [review, setReview] = useState({});
  useEffect(() => {
    fetch(`https://poster-framer-server.vercel.app/reviews/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("PF-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReview(data.data);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  }, [id]);
  console.log(review);
  const handleUpdate = async (e) => {
    e.preventDefault();
    review.review = e.target.review.value;
    console.log(review);

    fetch(`https://poster-framer-server.vercel.app/edit-review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("PF-token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          navigate("/myreview");
        } else {
          toast.err(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="p-20 h-[38.9rem] mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-5xl">
      <h1 className="text-3xl text-center">Update Your Review!</h1>
      <form onSubmit={handleUpdate}>
        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="LoggingUserName"
          >
            Service Name
          </label>
          <input
            readOnly
            defaultValue={review.s_name}
            name="service"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              htmlFor="loggingPassword"
            >
              Review
            </label>
          </div>

          <textarea
            defaultValue={review.review}
            name="review"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
          />
        </div>
        <div className="mt-8">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Update Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
