/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Links from "./Links";
import Logo from "./Logo";

const Header = () => {
  return (
    <div
      css={css`
        align-items: center;
        display: flex;
        height: 110px;
        justify-content: space-between;
        padding-left: 60px;
      `}
    >
      <Logo />
      <Links />
    </div>
  );
};

export default Header;
