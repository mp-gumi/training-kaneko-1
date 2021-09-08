/** @jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction } from "react";
import { css } from "@emotion/react";

type HamburgerBarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const HamburgerBar = (props: HamburgerBarProps) => {
  const { isOpen, setIsOpen } = props;
  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <button
      onClick={handleClick}
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 24px;
        margin-right: 5.46875vw;
        width: 38px;
        @media (min-width: 767px) {
          display: none;
        }
      `}
    >
      <span
        css={css`
          background-color: #000000;
          height: 3px;
          transform: rotate(${isOpen ? "30deg" : 0});
          transform-origin: left;
          transition-duration: 350ms;
          width: ${isOpen ? "42px" : "38px"};
        `}
      />
      <span
        css={css`
          background-color: #000000;
          height: 3px;
          opacity: ${isOpen ? 0 : 1};
          transition-duration: 350ms;
          width: 100%;
        `}
      />
      <span
        css={css`
          background-color: #000000;
          height: 3px;
          transform: rotate(${isOpen ? "-30deg" : 0});
          transform-origin: left;
          transition-duration: 350ms;
          width: ${isOpen ? "42px" : "38px"};
        `}
      />
    </button>
  );
};

export default HamburgerBar;
