import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Feature from "../../components/Feature/Feature";
import ServiceCards from "../../components/ServiceCards/ServiceCards";
import Status from "../../components/Status/Status";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="flex justify-center flex-col">
        <div>
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl mb-10">
            explore my <br /> awesome{" "}
            <span class="text-cyan-700">Services</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 mx-auto">
          {services.map((service) => (
            <ServiceCards key={service._id} service={service}></ServiceCards>
          ))}
        </div>
      </div>
      <Status></Status>
      <Feature></Feature>
    </div>
  );
};

export default Home;
