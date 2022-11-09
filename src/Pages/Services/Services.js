import React, { useEffect, useState } from "react";
import ServiceCards from "../../components/ServiceCards/ServiceCards";
import { useTitle } from "react-use";

import Spinner from "../../components/Spinner/Spinner";
const Services = () => {
  const HandleTitle = () => {
    useTitle("PF || Services");
    return null;
  };
  HandleTitle();
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://poster-framer-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.data.services);
          setLoading(false);
        }
      });
  }, [setLoading]);
  return (
    <div className="flex justify-center flex-col my-10">
      <div>
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl mb-10">
          explore my <br /> awesome{" "}
          <span className="text-cyan-700">Services</span>
        </h1>
      </div>
      {loading ? (
        <div className="flex justify-center">
          <Spinner></Spinner>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 mx-auto">
          {services.map((service) => (
            <ServiceCards key={service._id} service={service}></ServiceCards>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
