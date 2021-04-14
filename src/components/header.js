//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onClick, toggleTheme }) => {
  return (
    <header>
      <div id="header">
        <div id="header-logo">
          <div id="logo-icon">
            <FontAwesomeIcon icon={faMarkdown}></FontAwesomeIcon>
          </div>
          <div id="logo-text">
            <span id="logo-text--1">markdown</span>
            <span id="logo-text--2" className="textTheme">
              previewer
            </span>
          </div>
        </div>
        <button id="theme-toggle" onClick={onClick}>
          <FontAwesomeIcon
            icon={toggleTheme === "light" ? faMoon : faSun}
            id="toggle-icon"
          ></FontAwesomeIcon>
        </button>
      </div>
    </header>
  );
};

export default Header;
