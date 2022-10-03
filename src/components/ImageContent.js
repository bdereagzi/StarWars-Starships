import { CardMedia } from "@mui/material";
import React from "react";
import { images } from "../images";

function ImageContent({ name }) {
  const image = images.find((assetObject) => assetObject.name === name);
  return (
    <CardMedia
      component="img"
      onError={(e) => {
        e.target.src = "/starwars-logo.jpg";
      }}
      alt={name}
      height="200"
      image={image?.path}
    />
  );
}

export default ImageContent;
