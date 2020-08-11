import React from "react";
import Users from "../../components/Users";

const indexPage = () => {
  return (
    <div>
      <h1>This is the INDEX PAGE</h1>
      <Users name="Safi" age={21} />
    </div>
  );
};

export default indexPage;
