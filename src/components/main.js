import React, { useState, useEffect } from "react";

import {
  faClipboard,
  faTrashAlt,
  faExpandAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse } from "react-bootstrap";
import marked from "marked";
import input from "./defaultInput";

const Main = () => {
  const [isEditOpen, setIsEditOpen] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(true);
  const [isColumnOpen, setIsColumnOpen] = useState(true);
  const [userInput, setUserInput] = useState(input);

  const handleChange = function (event) {
    setUserInput(event.target.value);
  };

  const getMarkdownText = function () {
    var rawMarkup = marked(userInput);
    return { __html: rawMarkup };
  };

  return (
    <div id="main-container">
      <Collapse in={isEditOpen}>
        <div className="edit collapseEditor">
          <div className="edit-header">
            <div className="edit-title textTheme">editor</div>
            <div className="edit-button-group">
              <button className="header-btn textTheme">
                <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>
              </button>
              <button className="header-btn textTheme">
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
              </button>
              <button
                onClick={() => {
                  setIsPreviewOpen(!isPreviewOpen);
                  setIsColumnOpen(!isColumnOpen);
                }}
                type="button"
                className="header-btn textTheme"
                aria-expanded={isPreviewOpen}
                aria-controls="collapsePreview"
              >
                <FontAwesomeIcon icon={faExpandAlt}></FontAwesomeIcon>
              </button>
            </div>
          </div>
          <div className="edit-body">
            <textarea
              className="edit-text textTheme"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              value={userInput}
              onChange={handleChange}
            />
          </div>
        </div>
      </Collapse>

      <Collapse in={isColumnOpen}>
        <div className="column"></div>
      </Collapse>

      <Collapse in={isPreviewOpen}>
        <div className="preview collapsePreview">
          <div className="preview-header">
            <div className="preview-title textTheme">previewer</div>
            <button
              onClick={() => {
                setIsEditOpen(!isEditOpen);
                setIsColumnOpen(!isColumnOpen);
              }}
              className="header-btn textTheme"
              type="button"
              aria-expanded="true"
              aria-controls="collapseEditor"
            >
              <FontAwesomeIcon icon={faExpandAlt}></FontAwesomeIcon>
            </button>
          </div>
          <div className="preview-body">
            <div
              className="preview-text textTheme"
              dangerouslySetInnerHTML={getMarkdownText()}
            />
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Main;
