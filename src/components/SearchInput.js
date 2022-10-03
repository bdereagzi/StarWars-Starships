import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { StarshipsContext } from "../contexts/StarshipsContext";

function SearchInput() {
  const { search, setSearch } = useContext(StarshipsContext);

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        marginTop: "50px",
      }}
    >
      <TextField
        id="standard-basic"
        className="login-input"
        value={search}
        variant="standard"
        placeholder="Search starships..."
        sx={{ border: "solid white 1px" }}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        inputProps={{
          style: { color: "#fff" },
        }}
        style={{
          width: "35%",
          borderColor: "white !important",
          borderWidth: "1px",
          padding: "10px",
        }}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
