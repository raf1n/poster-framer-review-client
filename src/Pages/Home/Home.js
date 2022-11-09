import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Feature from "../../components/Feature/Feature";
import ServiceCards from "../../components/ServiceCards/ServiceCards";
import Status from "../../components/Status/Status";
import { useTitle } from "react-use";
import { Link } from "react-router-dom";
const Home = () => {
  const HandleTitle = () => {
    useTitle("PF || Home");
    return null;
  };
  HandleTitle();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://poster-framer-server.vercel.app/services", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("PF-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setServices(data.data.servicesWithLimit));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="flex justify-center flex-col">
        <div>
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl mb-10">
            explore my <br /> awesome{" "}
            <span className="text-cyan-700">Services</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 mx-auto">
          {services.map((service) => (
            <ServiceCards key={service._id} service={service}></ServiceCards>
          ))}
        </div>

        <div className="flex">
          <Link to="/services" className="mx-auto">
            <button className="px-10 py-3 mt-6 text-md font-medium tracking-wide text-white text-md font-bold capitalize bg-cyan-700 rounded-md hover:bg-cyan-900">
              See All
            </button>
          </Link>
        </div>
      </div>
      <Status></Status>
      <Feature></Feature>
    </div>
  );
};

export default Home;
