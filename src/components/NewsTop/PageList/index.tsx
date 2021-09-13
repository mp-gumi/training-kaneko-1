/** @jsxImportSource @emotion/react */
import React, { useMemo } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const PageList = () => {
  const boxStyle = useMemo(
    () =>
      `
      border: 1px solid #ededed;
      font-size: 14px;
      font-weight: bold;
      height: 44px;
      margin-left: 10px;
      position: relative;
      transition: all 300ms ease;
      width: 44px;
    `,
    []
  );

  const currentStyle = useMemo(
    () =>
      `
      background-color: #8d8d8d;
      color: #fff;
    `,
    []
  );

  const otherStyle = useMemo(
    () =>
      `
      background-color: #fff;
      color: #000;
    `,
    []
  );

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          ${boxStyle}
          ${currentStyle}
        `}
      >
        <div
          css={css`
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
          `}
        >
          1
        </div>
      </div>
      <Link
        css={css`
          ${boxStyle}
          ${otherStyle}
          &:hover {
            ${currentStyle}
          }
        `}
        to="/news"
      >
        <div
          css={css`
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
          `}
        >
          2
        </div>
      </Link>
      <Link
        css={css`
          ${boxStyle}
          ${otherStyle}
          &:hover {
            ${currentStyle};
          }
          &:hover > #arrow {
            border-top: 1px solid #fff;
            border-right: 1px solid #fff;
          }
        `}
        to="/news"
      >
        <div
          css={css`
            border-top: 1px solid #8b8b8b;
            border-right: 1px solid #8b8b8b;
            height: 7px;
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
            transform-origin: center;
            width: 7px;
          `}
          id="arrow"
        />
      </Link>
    </div>
  );
};

export default PageList;
