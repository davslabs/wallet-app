import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = ({ loading, children }) => {
  if (loading) {            
    return <Spinner animation="border" />;
  }

  return <div>{children}</div>;
};

export default Loader;
