import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <div className="text-center mt-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <h4>Loading....</h4>
    </div>
  );
};

export default Loader;
