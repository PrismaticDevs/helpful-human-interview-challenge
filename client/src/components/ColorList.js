import React from "react";
import { colors } from "./Data";

const ColorView = (props) => {
  const searchTerm = props.searchTerm;
  return (
    <div>
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
  );
};

export default ColorView;
