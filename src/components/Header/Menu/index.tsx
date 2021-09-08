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
        padding-left: 16px;
      `}
      key={displayName}
    >
      <Link
        css={css`
          color: #000;
          position: relative;
          text-decoration: none;
          &::after {
            background: #000;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0;
            position: absolute;
            transition: 250ms ease-in-out;
            width: 0;
          }
          &:hover::after {
            width: 100%;
          }
        `}
        to={urlName}
      >
        {displayName}
      </Link>
    </li>
  ));

  return (
    <nav
      css={css`
        @media (max-width: 767px) {
          display: none;
        }
      `}
    >
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
