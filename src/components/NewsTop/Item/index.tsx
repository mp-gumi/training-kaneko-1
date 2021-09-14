/** @jsxImportSource @emotion/react */
import React, { useMemo } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import marukyu from "../images/news_img_marukyu.jpg";
import marui from "../images/news_img_marui.jpg";
import inageya from "../images/news_img_inageya.jpg";
import dxretail from "../images/news_img_DX.jpg";
import lineTech from "../images/news_img_line_tech.jpg";

const Item = () => {
  const items = useMemo(
    () =>
      [
        {
          image: marukyu,
          date: "2021.09.01",
          category: "プレスリリース",
          title:
            "“情報卸”のサービス スーパーマーケット向け「LINEミニアプリ」を丸久が正式導入",
          to: "/news",
        },
        {
          image: marui,
          date: "2021.09.01",
          category: "プレスリリース",
          title:
            "“情報卸”のサービス スーパーマーケット向け「LINEミニアプリ」をマルイが正式導入",
          to: "/news",
        },
        {
          image: inageya,
          date: "2021.03.04",
          category: "プレスリリース",
          title:
            "“情報卸”のサービス スーパーマーケット向け「LINEミニアプリ」をいなげやが正式導入",
          to: "/news",
        },
        {
          image: dxretail,
          date: "2021.03.01",
          category: "プレスリリース",
          title:
            "D&Sソリューションズ、ダイヤモンド・リテイルメディア、シノプスの3社で「実践リテールDX研究会」を発足",
          to: "/news",
        },
        {
          image: lineTech,
          date: "2021.02.26",
          category: "プレスリリース",
          title:
            "LINEの法人向けサービスの販売・開発のパートナーを認定する「LINE Biz Partner Program」の「Technology Partner」のコミュニケーション部門において認定",
          to: "/news",
        },
      ].map(({ image, date, category, title, to }, index) => (
        <li
          key={image}
          css={css`
            list-style: none;
            padding-top: 20px;
            @media (max-width: 767px) {
              padding-top: ${index === 0 ? 0 : "10.9375vw"};
            }
          `}
        >
          <Link
            to={to}
            css={css`
              align-items: center;
              display: flex;
              max-width: 1060px;
              text-decoration: none;
              @media (min-width: 767px) {
                &:hover > div > .image {
                  transform: scale(1.05);
                }
                &:hover > div > .title {
                  color: #f3981c;
                }
              }
              @media (max-width: 767px) {
                flex-direction: column;
              }
            `}
          >
            <div
              css={css`
                flex-shrink: 0;
                height: 115px;
                min-width: 0;
                overflow: hidden;
                width: 172px;
                @media (max-width: 767px) {
                  object-fit: contain;
                  width: 100%;
                  height: 100%;
                }
              `}
            >
              <img
                alt=""
                className="image"
                css={css`
                  height: 100%;
                  object-fit: cover;
                  transition: 400ms;
                  width: 100%;
                `}
                src={image}
              />
            </div>
            <div
              css={css`
                padding-left: 20px;
                @media (max-width: 767px) {
                  padding: 3.125vw 0 0;
                }
              `}
            >
              <div
                css={css`
                  align-items: center;
                  display: flex;
                  padding-bottom: 10px;
                `}
              >
                <div
                  css={css`
                    font-size: 12px;
                    color: #888;
                    padding-right: 17px;
                    @media (max-width: 767px) {
                      padding-right: 17.1875vw;
                    }
                  `}
                >
                  {date}
                </div>
                <div
                  css={css`
                    background-color: #f3981c;
                    border-radius: 3px;
                    color: #fff;
                    font-size: 12px;
                    padding: 2px 5px;
                  `}
                >
                  {category}
                </div>
              </div>
              <h3
                className="title"
                css={css`
                  color: #000;
                  font-size: 16px;
                  font-weight: bold;
                  transition: 200ms;
                  @media (max-width: 767px) {
                    font-size: 4.375vw;
                  }
                `}
              >
                {title}
              </h3>
            </div>
          </Link>
        </li>
      )),
    []
  );

  return (
    <div
      css={css`
        padding: 90px 0 60px;
        @media (max-width: 767px) {
          padding: 11.71875vw 0 14.84375vw;
        }
      `}
    >
      {items}
    </div>
  );
};

export default Item;
