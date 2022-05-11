import React from "react";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <a style={{ color: "red" }} href="/">
          Red
        </a>
        <a style={{ color: "orange" }} href="/">
          Orange
        </a>
        <a
          style={{ color: "yellow", background: "black", width: "fit-content" }}
          href="/"
        >
          Yellow
        </a>
        <a style={{ color: "green" }} href="/">
          Green
        </a>
        <a style={{ color: "blue" }} href="/">
          Blue
        </a>
        <a style={{ color: "purple" }} href="/">
          Purple
        </a>
        <a style={{ color: "brown" }} href="/">
          Brown
        </a>
        <a style={{ color: "gray" }} href="/">
          Gray
        </a>
      </section>
    </>
  );
};

export default Sidebar;
