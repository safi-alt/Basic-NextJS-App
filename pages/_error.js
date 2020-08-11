import React from "react";
import Link from "next/link";

const errorPage = () => {
  return (
    <div>
      <h1>OOPS Something Went Wrong...</h1>
      <p>
        TRY
        <Link href="/">
          <a> Going Back</a>
        </Link>
      </p>
    </div>
  );
};

export default errorPage;
