/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const HamburgerBar = () => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <span />
      <span />
      <span />
    </div>
  );
};

export default HamburgerBar;
