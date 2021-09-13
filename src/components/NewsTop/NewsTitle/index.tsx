/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const NewsTitle = () => {
  return (
    <h2
      css={css`
        color: #333;
        font-size: 34px;
        font-weight: 600;
        letter-spacing: 1px;
        text-align: center;
        @media (max-width: 767px) {
          font-size: 7.8125vw;
          padding: 26.5625vw 0 12.5vw 0;
        }
      `}
    >
      ニュース
    </h2>
  );
};

export default NewsTitle;
