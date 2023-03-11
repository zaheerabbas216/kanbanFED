import React from "react";
import "./styles.css";

const Heading = (props) => {
  return (
    <>
      <div className="headingdiv w-100 text-center">
        <h1>{props.heading}</h1>
        <h5>{props.subheading}</h5>
      </div>
    </>
  );
};

export default Heading;
