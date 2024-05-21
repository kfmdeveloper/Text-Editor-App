import React from "react";

function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert  alert-danger  alert-dismissible fade show`}
          role="alert"
        >
          <strong>Success: </strong>
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
