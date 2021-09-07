/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const Menu = () => {
  const items = [
    { displayName: "TOPICS", urlName: "/#topics" },
    { displayName: "COMPANY", urlName: "/#company" },
    { displayName: "ACCESS", urlName: "/#access" },
    { displayName: "CONTACT", urlName: "/#contact" },
    { displayName: "NEWS", urlName: "/news" },
  ].map(({ displayName, urlName }) => (
    <li
      css={css`
        list-style: none;
      `}
      key={displayName}
    >
      <Link
        css={css`
          padding-left: 16px;
          text-decoration: none;
          color: black;
        `}
        to={urlName}
      >
        {displayName}
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul
        css={css`
          display: flex;
          padding-right: 60px;
        `}
      >
        {items}
      </ul>
    </nav>
  );
};

export default Menu;
