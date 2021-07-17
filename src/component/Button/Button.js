import React from "react";
import "./index.css";

export default function Button({ title, ...rest }) {
  return (
    <>
      <button className="button" {...rest}>
        {title}
      </button>
    </>
  );
}
