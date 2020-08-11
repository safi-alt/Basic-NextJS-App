import React from "react";
import Users from "../../components/Users";

const indexPage = (props) => {
  return (
    <div>
      <h1>This is the INDEX PAGE - {props.appName}</h1>
      <Users name="Safi" age={21} />
    </div>
  );
};

indexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App (Auth)" });
    }, 1000);
  });
  return promise;
};

export default indexPage;
