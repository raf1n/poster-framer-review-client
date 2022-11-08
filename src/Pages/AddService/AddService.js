import React from "react";
import toast from "react-hot-toast";
import { useTitle } from "react-use";
const AddService = () => {
  const HandleTitle = () => {
    useTitle("PF || Add Service");
    return null;
  };
  HandleTitle();
  const handleAddService = (e) => {
    e.preventDefault();
    const service = {
      name: e.target.name.value,
      img: e.target.imageURL.value,
      price: e.target.price.value,
      description: e.target.description.value,
    };
    fetch("http://localhost:5000/service/add-service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`${data.message}`, {
            duration: 4000,
          });
        }
        e.target.reset();
      });
  };
  return (
    <section className="bg-white">
      <div className="container px-6 mx-auto">
        <div className="lg:flex lg:mx-16">
          <div className="lg:w-1/2 lg:mx-6 lg:py-14">
            <h1 className="text-3xl mb-10 font-semibold text-gray-800 capitalize lg:text-5xl">
              Add your <br />
              <span className="text-cyan-800">service</span>
            </h1>
            <img
              className="lg:w-[80%]"
              src="https://imgc.allpostersimages.com/img/posters/vincent-van-gogh-vincent-van-gogh-starry-night-c-1889_u-L-F8SUXY0.jpg"
              alt=""
            />
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-xl mb-6 lg:max-w-xl shadow-gray-300/50 ">
              <h1 className="text-lg font-medium text-gray-700">
                Fill up with necessary information
              </h1>
              <form onSubmit={handleAddService} className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-800">
                    Service Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your Service Name"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md    focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-800">
                    Image URL
                  </label>
                  <input
                    name="imageURL"
                    type="text"
                    placeholder="Enter your Service thumbnail"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md     focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-800">
                    Price
                  </label>
                  <input
                    name="price"
                    type="text"
                    placeholder="Enter your Service Price"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md     focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-800">
                    Description
                  </label>
                  <textarea
                    name="description"
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize  bg-cyan-700 rounded-md hover:bg-cyan-900">
                  Add service
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;
