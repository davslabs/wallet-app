import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = ({ loading, children }) => {
  if (loading) {
    return (
      <Spinner
        animation="border"
        style={{
          position: "absolute",
          left: "13vw",
          top: "15vh",
        }}
      />
    );
  }

  return <div>{children}</div>;
};

export default Loader;
