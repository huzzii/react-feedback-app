import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to={{
          pathname: "/about",
          search: "?sort=hi",
          hash: "#hello"
      }}>
        <FaQuestion size={30} color="rgb(255, 106, 149)" />
      </Link>
    </div>
  );
}

export default AboutIconLink;
