import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  const items = [
    { displayName: "TOPICS", urlName: "/#topics" },
    { displayName: "COMPANY", urlName: "/#company" },
    { displayName: "ACCESS", urlName: "/#access" },
    { displayName: "CONTACT", urlName: "/#contact" },
    { displayName: "NEWS", urlName: "/news" },
  ].map(({ displayName, urlName }) => (
    <li key={displayName}>
      <Link to={urlName}>{displayName}</Link>
    </li>
  ));

  return (
    <nav>
      <ul>{items}</ul>
    </nav>
  );
};

export default Links;
