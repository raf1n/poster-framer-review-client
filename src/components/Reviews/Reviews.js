import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Reviews = ({ service }) => {
  const { _id } = service;
  const { user } = useContext(AuthContext);

  const handleAddReview = (e) => {
    e.preventDefault();
    const review = {
      s_id: _id,
      r_email: user?.email,
      review: e.target.review.value,
    };
    console.log(review);
    // fetch("", {
    //   method: "POST",
    // });
    console.log(e);
  };

  return (
    <div className="container px-16 mx-auto p-4 text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Reviews</h2>
      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-3">Name</th>
              <th className="p-3">Text</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody className="border-b bg-gray-50 border-gray-300">
            <tr>
              <td className="px-3 py-2 flex items-center gap-2">
                <div className="avatar">
                  <div className="w-10 mask mask-squircle">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <p>Dwight Adams</p>
              </td>
              <td className="px-3 py-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat, voluptatum?
                </p>
              </td>
              <td className="px-3 py-2">
                <p>12.12.12</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <form onSubmit={handleAddReview} className="mt-6 p-6">
        <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center">
          <div className="avatar">
            <div className="w-10 mask ">
              <img src={user?.photoURL} alt="" />
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
    </div>
  );
};

export default Reviews;
