import React, { useState, useRef } from "react";

import {
  faClipboard,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse } from "react-bootstrap";
import marked from "marked";
import input from "./defaultInput";
import Resize from "./resize";

const Main = () => {
  const [isEditOpen, setIsEditOpen] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(true);
  const [isColumnOpen, setIsColumnOpen] = useState(true);
  const [userInput, setUserInput] = useState(input);
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  window.onbeforeunload = function () {
    return "";
  };

  const handleChange = function (event) {
    setUserInput(event.target.value);
  };

  const getMarkdownText = function () {
    var rawMarkup = marked(userInput);
    return { __html: rawMarkup };
  };

  const copyToClipboard = function (e) {
    if (userInput.length > 0) {
      textAreaRef.current.select();
      document.execCommand("copy");
      //display text copied message for 900ms
      setCopySuccess("Text Copied!");
      setTimeout(() => {
        setCopySuccess("");
      }, 900);
    }
  };

  const deleteText = function () {
    textAreaRef.current.select();
    document.execCommand("delete");
  };

  return (
    <div id="main-container">
      <Collapse in={isEditOpen}>
        <div className="edit collapseEditor">
          <div className="edit-header">
            <div className="edit-title textTheme">editor</div>

            <div className="edit-button-group">
              <span className="text-copied textTheme">{copySuccess}</span>

              <button
                className="header-btn textTheme"
                onClick={copyToClipboard}
                data-toggle="tooltip"
                title="Copy to clipboard"
              >
                <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>
              </button>
              <button
                className="header-btn textTheme"
                onClick={deleteText}
                data-toggle="tooltip"
                title="Delete"
              >
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
              </button>
              <Resize
                onClick={() => {
                  setIsPreviewOpen(!isPreviewOpen);
                  setIsColumnOpen(!isColumnOpen);
                }}
                ariaExpanded={isPreviewOpen}
                ariaControls="collapsePreview"
              ></Resize>
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
              ref={textAreaRef}
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
            <Resize onClick={() => {
                setIsEditOpen(!isEditOpen);
                setIsColumnOpen(!isColumnOpen);
              }}
              ariaExpanded={isEditOpen}
              ariaControls="collapseEditor"
              >
              </Resize>
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
