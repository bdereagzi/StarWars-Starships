import React from "react";
import { Link } from "react-router-dom";

function TopLogo() {
  return (
    <Link
      to={"/"}
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        alt="starwars-logo"
        src="/starwars-logo2.png"
        width="35%"
        height="auto"
      />
    </Link>
  );
}

export default TopLogo;
