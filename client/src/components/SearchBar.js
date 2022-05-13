import React, { useState } from "react";
import { colors } from "./Data";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        id="header-search"
        type="text"
        placeholder="Search"
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {colors
          .filter((item) => {
            if (searchTerm === "") {
              return "";
            } else if (item.color.toLowerCase().includes(searchTerm)) {
              return item;
            }
          })
          .map((color, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  width: "20%",
                  flexDirection: "column",
                  boxShadow: ".25em .25em .25em .25em rgba(0,0,0,.5)",
                  margin: "1em",
                }}
                key={color.id}
              >
                <div
                  key={index}
                  style={{
                    background: color.hex,
                    padding: "3em",
                    paddingTop: "5em",
                  }}
                ></div>
                <div
                  style={{
                    padding: "1rem",
                    textAlign: "center",
                  }}
                  key={color.hex}
                >
                  {color.color} {color.hex}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SearchBar;
