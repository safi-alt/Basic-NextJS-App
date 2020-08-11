import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App" });
      }, 1000);
    });
    return promise;
  }
  render() {
    return (
      <div>
        <h1>This is the main page {this.props.appName}</h1>
        <p>
          GO TO
          <Link href="/auth">
            <a> Auth</a>
          </Link>
        </p>
        <button onClick={() => Router.push("/auth")}>Go To Auth</button>
      </div>
    );
  }
}

export default IndexPage;
