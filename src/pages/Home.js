import React, { useContext } from "react";
import {
  Card,
  Typography,
  CardActions,
  Button,
  CardContent,
  Grid,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import LoadMore from "../components/LoadMore";

import { StarshipsContext } from "../contexts/StarshipsContext";
import ImageContent from "../components/ImageContent";

function Home() {
  const { starships, search } = useContext(StarshipsContext);
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <SearchInput />
      <div
        style={{
          margin: "0 auto",
          maxWidth: "700px",
          height: "100px",
          marginTop: "50px",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {starships
            .filter((elem) =>
              elem.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((starship, index) => {
              return (
                <Grid item lg={6} xs={12} key={index}>
                  <Card>
                    <ImageContent name={starship.name} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {starship.name}
                      </Typography>
                      <Typography
                        component={"span"}
                        variant="body2"
                        color="text.secondary"
                      >
                        <p>Model : {starship.model}</p>
                        <p>Hyperdrive rating : {starship.hyperdrive_rating}</p>
                      </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: "right" }}>
                      <Button
                        size="small"
                        onClick={() =>
                          navigate(
                            `detail/${starship.name.split(" ").join("_")}`
                          )
                        }
                        style={{ background: "yellow" }}
                      >
                        <b style={{ color: "black", width: "150px" }}>
                          Details
                        </b>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
        {!search && <LoadMore />}
      </div>
    </React.Fragment>
  );
}

export default Home;
