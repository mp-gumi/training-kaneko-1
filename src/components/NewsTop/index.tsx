/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Hierarchy from "./Hierarchy";
import Header from "components/Header";
import NewsTitle from "./NewsTitle";
import Item from "./Item";
import PageList from "./PageList";

const NewsTop = () => {
  return (
    <div
      css={css`
        background-color: #f6f6f6;
      `}
    >
      <div
        css={css`
          position: sticky;
          top: 0;
        `}
      >
        <Header />
      </div>

      <Hierarchy />
      <div
        css={css`
          margin: 0 auto;
          max-width: 1060px;
          padding: 92px 30px 95px;
          @media (max-width: 767px) {
            padding: 0 30px 15.625vw;
          }
        `}
      >
        <NewsTitle />
        <Item />
        <PageList />
      </div>
    </div>
  );
};

export default NewsTop;
