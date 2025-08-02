import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox({ city, onCityChange, onSubmit, error }) {
  return (
    <div className="searchBox">
      <form
        onSubmit={onSubmit}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          value={city}
          onChange={onCityChange}
          id="standard-basic"
          label="Search City"
          variant="filled"
          sx={{
            width: "100%",
            backgroundColor: "rgba(255,255,255,0.1)",
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiFilledInput-underline:after": {
              borderBottomColor: "#00ffcc",
            },
          }}
        />
        <Button
          style={{ marginLeft: "10px" }}
          type="submit"
          sx={{
            minWidth: 0,
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: "#6767677c",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#00ffcc",
            },
          }}
        >
          <SearchIcon />
        </Button>
        {error && <p style={{ color: "red", marginLeft: "10px" }}>Not Found</p>}
      </form>
    </div>
  );
}

export default SearchBox;
