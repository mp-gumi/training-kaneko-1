/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import logo from "./D&S_logo.png";

const Logo = () => (
  <h1
    css={css`
      margin-left: 60px;
      @media (max-width: 767px) {
        left: 4.6875vw;
        margin-left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    `}
  >
    <Link to="/">
      <img
        alt="D&amp;S Solutions"
        src={logo}
        css={css`
          height: 23.5px;
          width: 180px;
        `}
      />
    </Link>
  </h1>
);

export default Logo;
