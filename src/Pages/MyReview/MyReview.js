import React from "react";

const MyReview = () => {
  return (
    <div className="container p-2 mb-[15%] mt-12 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-3xl font-semibold leading-tight">My Reviews</h2>
      <div className="overflow-x-auto min-h-full">
        <table className="min-w-full text-xs">
          <thead className="bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Service</th>
              <th className="p-3">Review</th>
              <th className="p-3">Issued</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
              <td className="p-3">
                <p>97412378923</p>
              </td>
              <td className="p-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium praesentium corrupti maxime debitis repellat?
                  Nulla dolor ut ducimus fugiat corporis!
                </p>
              </td>
              <td className="p-3">
                <p>14 Jan 2022</p>
                <p className="text-gray-600">Friday</p>
              </td>
              <td className="p-3 text-right">
                <span className="px-3 py-1 font-semibold rounded-md text-gray-50">
                  <button className="btn btn-xs mr-2">delete</button>
                  <button className="btn btn-xs">edit</button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
