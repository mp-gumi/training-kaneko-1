/** @jsxImportSource @emotion/react */
import React, { useMemo } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const Hierarchy = () => {
  const hierarchyCss = useMemo(
    () =>
      `
  color: #888;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  text-decoration: none;
  @media(max-width: 767px) {
    font-size: 3.4375vw;
  }
  &:after {
    background-color: #888;
    bottom: -8px;
    content: "";
    height: 1px;
    left: 0;
    transition: width 300ms;
    position: absolute;
    width: 0;
  }
  &:hover::after {
    width: 100%;
  }
`,
    []
  );

  return (
    <div
      css={css`
        align-items: center;
        display: flex;
        left: 50px;
        position: absolute;
        top: 130px;
        @media (max-width: 767px) {
          left: 6.25vw;
          top: 29.6875vw;
        }
      `}
    >
      <Link
        css={css`
          ${hierarchyCss}
        `}
        to="/"
      >
        TOP
      </Link>
      <div
        css={css`
          border-top: 1px solid #8b8b8b;
          border-right: 1px solid #8b8b8b;
          height: 6px;
          margin: 0 12.5px;
          transform: rotate(45deg);
          transform-origin: center;
          width: 6px;
        `}
      />
      <Link
        css={css`
          ${hierarchyCss}
        `}
        to="/news"
      >
        NEWS
      </Link>
    </div>
  );
};

export default Hierarchy;
