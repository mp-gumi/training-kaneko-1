/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import logo from "./D&S_logo.png";

const Logo = () => (
  <h1>
    <img
      alt="D&amp;S Solutions"
      src={logo}
      css={css`
        width: 180px;
      `}
    />
  </h1>
);

export default Logo;
