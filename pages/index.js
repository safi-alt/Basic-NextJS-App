import React from "react";
import Link from "next/link";
import Router from "next/router";

const indexPage = () => {
  return (
    <div>
      <h1>This is the main page</h1>
      <p>
        GO TO
        <Link href="/auth">
          <a> Auth</a>
        </Link>
      </p>
      <button onClick={() => Router.push("/auth")}>Go To Auth</button>
    </div>
  );
};

export default indexPage;
