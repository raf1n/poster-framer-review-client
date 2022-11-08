import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "react-use";
const ServiceDetails = () => {
  const HandleTitle = () => {
    useTitle("PF || Service Details");
    return null;
  };
  HandleTitle();
  const { id } = useParams();
  console.log(id);
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setService(data.data);
        }
      });
  }, [id]);
  console.log(service);
  return (
    <div>
      <h1>Service Detail</h1>
      <h2>Review</h2>
    </div>
  );
};

export default ServiceDetails;
