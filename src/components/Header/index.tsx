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
        position: relative;
      `}
    >
      <div
        css={css`
          align-items: center;
          display: flex;
          height: 110px;
          justify-content: space-between;
          position: sticky;
          width: 100%;
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
