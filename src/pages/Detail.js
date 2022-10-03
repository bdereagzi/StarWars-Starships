import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageContent from "../components/ImageContent";
import StarshipService from "../services/StarshipsService";

const DetailStarship = () => {
  const { name } = useParams();
  const [starship, setStarship] = useState();

  useEffect(() => {
    const starshipService = new StarshipService();
    starshipService
      .getStarshipDetail(name)
      .then(({ data }) => setStarship(data.results[0]))
      .catch((e) => console.log(e));
  }, [name]);

  return (
    starship && (
      <div
        style={{
          margin: "0 auto",
          maxWidth: "700px",
          height: "100px",
          marginTop: "50px",
          textAlign: "center",
        }}
      >
        <Card>
          <ImageContent name={starship?.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {starship?.name}
            </Typography>
            <Typography
              component={"span"}
              variant="body2"
              color="text.secondary"
            >
              <p>Model : {starship?.model}</p>
              <p>Hyperdrive rating : {starship?.hyperdrive_rating}</p>
              <p>Passengers : {starship?.passengers}</p>
              <p>Max Atmosphere Speed : {starship?.max_atmosphering_speed}</p>
              <p>Manufacturer : {starship?.manufacturer}</p>
              <p>Crew : {starship?.crew}</p>
              <p>Cargo Capacity : {starship?.cargo_capacity}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  );
};

export default DetailStarship;
