import React from "react";

const Loading = () => {
  return (
    <React.Fragment>
      <img
        src={require("./loading.gif")}
        alt="Loading..."
        style={{ width: "200px", display: "block", margin: "auto" }}
      />
    </React.Fragment>
  );
};
export default Loading;
