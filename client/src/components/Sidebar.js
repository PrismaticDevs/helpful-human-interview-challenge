import React from "react";
import { colors } from "./Data";

const Sidebar = () => {
  let red = [];
  for (let i = 0; i < 20; i++) {
    red.push(colors[i]);
  }
  return (
    <>
      <section className="sidebar">
        <button
          style={{
            color: "red",
            outline: "none",
            border: "none",
            cursor: "pointer",
            background: "none",
            size: "1.5em",
            padding: ".25em",
          }}
          onClick={() => {
            red = [];
            for (let i = 0; i < 20; i++) {
              red.push(colors[i]);
            }
            console.log(red);
          }}
        >
          Red
        </button>
        <button
          style={{
            color: "orange",
            outline: "none",
            border: "none",
            cursor: "pointer",
            background: "none",
            size: "1.5em",
            padding: ".25em",
          }}
          onClick={() => {
            red = [];
          }}
        >
          Orange
        </button>
        <button
          style={{
            color: "yellow",
            outline: "none",
            border: "none",
            cursor: "pointer",
            background: "black",
            size: "1.5em",
            padding: ".25em",
            borderRadius: ".5em",
          }}
        >
          Yellow
        </button>
        <button
          style={{
            color: "green",
            outline: "none",
            border: "none",
            cursor: "pointer",
            background: "none",
            size: "1.5em",
            padding: ".25em",
          }}
        >
          Green
        </button>
        <button
          style={{
            color: "blue",
            outline: "none",
            border: "none",
            cursor: "pointer",
            background: "none",
            size: "1.5em",
            padding: ".25em",
          }}
        >
          Blue
        </button>
        <button
          style={{
            color: "purple",
            outline: "none",
            border: "none",
            cursor: "pointer",
            background: "none",
            size: "1.5em",
            padding: ".25em",
          }}
          href="/"
        >
          Purple
        </button>
        <button
          style={{
            color: "brown",
            outline: "none",
            border: "none",
            cursor: "pointer",
            background: "none",
            size: "1.5em",
            padding: ".25em",
          }}
        >
          Brown
        </button>
        <button
          style={{
            color: "gray",
            outline: "none",
            border: "none",
            cursor: "pointer",
            background: "none",
            size: "1.5em",
            padding: ".25em",
          }}
        >
          Gray
        </button>
      </section>
      <ul style={{ listStyleType: "none", display: "flex", flexWrap: "wrap" }}>
        {red.map((color, index) => {
          return (
            <div
              style={{
                display: "flex",
                width: "15%",
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
                  paddingTop: "3em",
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
      </ul>
    </>
  );
};

export default Sidebar;
