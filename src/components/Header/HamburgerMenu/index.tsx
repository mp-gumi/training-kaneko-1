/** @jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

export type HamburgerMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const HamburgerMenu = ({ isOpen, setIsOpen }: HamburgerMenuProps) => {
  const handleClick = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const items = useMemo(() => {
    return [
      { displayName: "TOPICS", urlName: "/#topics" },
      { displayName: "COMPANY", urlName: "/#company" },
      { displayName: "ACCESS", urlName: "/#access" },
      { displayName: "CONTACT", urlName: "/#contact" },
      { displayName: "NEWS", urlName: "/news" },
    ].map(({ displayName, urlName }) => (
      <li
        css={css`
          align-items: center;
          display: flex;
          justify-content: center;
          list-style: none;
        `}
        key={displayName}
      >
        <Link
          css={css`
            color: #000;
            text-decoration: none;
          `}
          onClick={handleClick}
          to={urlName}
        >
          {displayName}
        </Link>
      </li>
    ));
  }, []);

  return (
    <nav
      css={css`
        background-color: #fff;
        height: ${isOpen ? "50vh" : 0};
        overflow: hidden;
        transition-duration: 350ms;
      `}
    >
      <ul
        css={css`
          display: grid;
          grid-auto-flow: row;
          height: 50vh;
        `}
      >
        {items}
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
