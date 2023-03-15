import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <h2>An error has occurred</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
