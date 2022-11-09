import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/review/myreview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data.data);
      });
  }, [user?.email]);
  const handleDetete = (id) => {};
  return (
    <div className="container p-2 mb-[12.9rem] mt-12 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-3xl text-center font-semibold leading-tight">
        My Reviews
      </h2>
      <div className="overflow-x-auto min-h-full lg:w-[90%] mx-auto">
        <table className="min-w-full text-xs w-[40%]">
          <thead className="bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Service</th>
              <th className="p-3">Review</th>
              <th className="p-3">Issued</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {review.map((mr) => (
              <tr
                key={mr._id}
                className="border-b w-6 border-opacity-20 border-gray-300 bg-gray-50"
              >
                <td className="p-3">
                  <p>{mr.s_name}</p>
                </td>
                <td className="p-3 ">
                  <p>{mr.review}</p>
                </td>
                <td className="p-3">
                  <p>{mr.date.slice(0, 19)}</p>
                  <p className="text-gray-600">Friday</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md text-gray-50">
                    <div className="flex">
                      <button
                        onClick={() => handleDetete(mr._id)}
                        className="btn btn-xs mr-2"
                      >
                        delete
                      </button>
                      <button className="btn btn-xs">edit</button>
                    </div>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;