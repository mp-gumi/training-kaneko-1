/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import Menu from "./Menu";
import Logo from "./Logo";
import HamburgerBar from "./HamburgerBar";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      css={css`
        position: sticky;
        top: 0;
      `}
    >
      <div
        css={css`
          align-items: center;
          background-color: #fff;
          display: flex;
          height: 110px;
          justify-content: space-between;
          width: 100%;
          @media (max-width: 767px) {
            height: 25vw;
            position: relative;
          }
        `}
      >
        <Logo />
        <Menu />
        <HamburgerBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        css={css`
          position: absolute;
          left: 0;
          top: 100%;
          width: 100%;
          @media (min-width: 767px) {
            display: none;
          }
        `}
      >
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Header;
