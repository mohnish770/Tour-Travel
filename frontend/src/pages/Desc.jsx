import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Desc = () => {
  const { id } = useParams();
  console.log("main", id);
  const {
    data: tour,
    loading,
    error,
  } = useFetch(`https://jai.marketomobile.com/api/user/tour/${id}`);
  console.log("flag", tour);

  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export default Desc;
