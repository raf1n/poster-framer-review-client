import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "react-use";
import Reviews from "../../components/Reviews/Reviews";
import ServiceDetail from "../../components/ServiceDetail/ServiceDetail";
import Spinner from "../../components/Spinner/Spinner";
const ServiceDetails = () => {
  const HandleTitle = () => {
    useTitle("PF || Service Details");
    return null;
  };
  HandleTitle();
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://poster-framer-server.vercel.app/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setService(data.data);
        }
      });
  }, [id]);

  return (
    <div>
      {service === {} ? (
        <Spinner></Spinner>
      ) : (
        <ServiceDetail key={service._id} service={service}></ServiceDetail>
      )}
      <Reviews key={0} service={service}></Reviews>
    </div>
  );
};

export default ServiceDetails;
