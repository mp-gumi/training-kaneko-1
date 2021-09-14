/** @jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction, useCallback } from "react";
import { css } from "@emotion/react";

export type HamburgerBarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const HamburgerBar = ({ isOpen, setIsOpen }: HamburgerBarProps) => {
  const handleClick = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, [setIsOpen]);

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
        @media (max-width: 767px) {
          margin-right: 0;
          position: absolute;
          right: 5.46875vw;
          top: 50%;
          transform: translateY(-50%);
        }
        @media (min-width: 767px) {
          display: none;
        }
      `}
    >
      <span
        css={css`
          background-color: #000;
          height: 3px;
          transform: rotate(${isOpen ? "30deg" : 0});
          transform-origin: left;
          transition-duration: 350ms;
          width: ${isOpen ? "42px" : "38px"};
        `}
      />
      <span
        css={css`
          background-color: #000;
          height: 3px;
          opacity: ${isOpen ? 0 : 1};
          transition-duration: 350ms;
          width: 100%;
        `}
      />
      <span
        css={css`
          background-color: #000;
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
