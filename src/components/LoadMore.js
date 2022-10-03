import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { StarshipsContext } from "../contexts/StarshipsContext";

function LoadMore() {
  const { nextPage, handleLoadMoreClick, loading } =
    useContext(StarshipsContext);
  console.log(loading);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "40px",
      }}
    >
      <Button
        variant="contained"
        disableElevation
        style={{
          padding: "20px",
          marginBottom: "50px",
          width: "200px",
          backgroundColor: nextPage ? "yellow" : "gray",
        }}
        onClick={handleLoadMoreClick}
        disabled={!nextPage || loading}
      >
        <b style={{ color: "black" }}>Load more</b>
      </Button>
    </div>
  );
}

export default LoadMore;
