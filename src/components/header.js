//import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
      <GlobalStyles/>
      <header>
        <div id="header">
          <div id="header-logo">
            <div id="logo-icon">
              <FontAwesomeIcon icon={faMarkdown}></FontAwesomeIcon>
            </div>
            <h1 id="logo-text">
              <span id="logo-text--1">markdown</span>
              <span id="logo-text--2" class="text">
                previewer
              </span>
            </h1>
          </div>
          <button id="theme-toggle">
              <FontAwesomeIcon icon={faMoon} id="toggle-icon"></FontAwesomeIcon>
          </button>
        </div>
      </header>
      </>
    </ThemeProvider>
  );
}

export default Header;
