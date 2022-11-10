import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Reviews = ({ service }) => {
  const [refresh, setRefresh] = useState(false);
  const { _id, name } = service;
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://poster-framer-server.vercel.app/review?s_id=${_id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("PF-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
      });
  }, [_id, refresh]);

  const handleAddReview = (e) => {
    e.preventDefault();
    const review = {
      s_id: _id,
      s_name: name,
      r_name: user?.displayName,
      r_email: user?.email,
      r_img: user?.photoURL,
      review: e.target.review.value,
    };
    console.log(review);
    fetch("https://poster-framer-server.vercel.app/add-review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("PF-token")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRefresh(!refresh);
          toast.success(`${data.message}`, {
            duration: 4000,
          });
        } else {
          toast.success(`${data.error}`, {
            duration: 4000,
          });
        }
        e.target.reset();
      });
  };

  return (
    <div className="container px-16 mx-auto p-4 text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Reviews</h2>

      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <thead>
            <tr className="bg-gray-300 text-base">
              <th className="p-3">Name</th>
              <th className="p-3">Review</th>
              <th className="p-3">Posted</th>
            </tr>
          </thead>
          {reviews?.map((review) => (
            <tbody
              key={review._id}
              className="border-b bg-gray-50 border-gray-300"
            >
              <tr className="text-sm">
                <td className="px-3 py-2 flex items-center gap-2">
                  <div className="avatar">
                    <div className="w-10 mask mask-squircle">
                      <img src={review?.r_img} alt="" />
                    </div>
                  </div>
                  <p>{review?.r_name}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{review?.review}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{review?.date.slice(0, 19)}</p>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      {user && user?.email ? (
        <form onSubmit={handleAddReview} className="mt-6 p-6">
          <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center">
            <div className="avatar">
              <div className="w-10 mask ">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://image.shutterstock.com/image-vector/person-icon-flat-symbol-design-260nw-424612276.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="grow">
              <label className="mb-2 lg:ml-2 text-sm text-gray-800">
                {user?.displayName}
              </label>
              <textarea
                name="review"
                type="text"
                placeholder="Type here"
                className="w-full px-5 py-3  mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <button className="px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize  bg-cyan-700 rounded-md hover:bg-cyan-900">
                Add Review
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="p-4 lg:p-20 flex justify-center text-base lg:text-2xl border rounded-lg border-cyan-600 m-6 lg:py-10 shadow-lg">
          <div>
            Please{" "}
            <span className="text-semibold text-red-500">
              <Link to="/login">LOGIN</Link>
            </span>{" "}
            to Add A review
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
