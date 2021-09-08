/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import logo from "./D&S_logo.png";

const Logo = () => (
  <h1>
    <Link to={"/"}>
      <img
        alt="D&amp;S Solutions"
        src={logo}
        css={css`
          height: 23.5px;
          margin-left: 60px;
          width: 180px;
        `}
      />
    </Link>
  </h1>
);

export default Logo;
