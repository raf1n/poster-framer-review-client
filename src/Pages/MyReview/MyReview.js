import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { useTitle } from "react-use";
const MyReview = () => {
  const HandleTitle = () => {
    useTitle("PF || My Reviews");
    return null;
  };
  HandleTitle();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [review, setReview] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch(
      `https://poster-framer-server.vercel.app/myreview?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("PF-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setReview(data.data);
      });
  }, [user?.email, refresh]);
  const handleDetete = (id) => {
    fetch(`https://poster-framer-server.vercel.app/review/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("PF-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          setRefresh(!refresh);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  };
  const handleEdit = (id) => {
    navigate(`/review/edit-review/${id}`);
  };
  return review?.length === 0 ? (
    <div className="p-20 flex justify-center text-2xl">
      <div className="text-center">
        You haven't Reviewed anything
        <br />
        <span className="text-semibold ">
          Please{" "}
          <Link className="text-red-500 text-3xl" to="/services">
            Post
          </Link>
        </span>{" "}
        Review
      </div>
    </div>
  ) : (
    <div className="container p-2 mb-[12.9rem] mt-12 mx-auto sm:p-4 text-gray-800">
      <h2 className="mb-4 text-3xl text-center font-semibold leading-tight">
        My Reviews
      </h2>
      <div className="overflow-x-auto min-h-full lg:w-[90%] mx-auto">
        <table className="min-w-full text-xs w-[40%]">
          <thead className="bg-gray-300">
            <tr className="text-left text-base">
              <th className="p-3">Service</th>
              <th className="p-3">Review</th>
              <th className="p-3">Posted</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {review?.map((mr) => (
              <tr
                key={mr._id}
                className="border-b w-6 border-opacity-20 border-gray-300 bg-gray-50 text-base"
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
                      <button
                        onClick={() => handleEdit(mr._id)}
                        className="btn btn-xs"
                      >
                        edit
                      </button>
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
