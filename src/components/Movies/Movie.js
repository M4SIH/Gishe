import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../../shared/Card";

export default function Movie() {
  const location = useLocation();
  const data = location.state?.data;

  return <Card data={data} />;
}
