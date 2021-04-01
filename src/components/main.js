import React, { useState } from "react";

import {
  faClipboard,
  faTrashAlt,
  faExpandAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse } from "react-bootstrap";

const Main = () => {
  const [isEditOpen, setIsEditOpen] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(true);
  const [isColumnOpen, setIsColumnOpen] = useState(true);

  return (
    <div id="main-container">
      <Collapse in={isEditOpen}>
        <div className="edit collapseEditor">
          <div className="edit-header">
            <h3 className="edit-title textTheme">editor</h3>
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
          <div className="edit-body"></div>
        </div>
      </Collapse>

      <Collapse in={isColumnOpen}>
        <div className="column"></div>
      </Collapse>

      <Collapse in={isPreviewOpen}>
        <div className="preview collapsePreview">
          <div className="preview-header">
            <h3 className="preview-title textTheme">previewer</h3>
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
          <div className="preview-body"></div>
        </div>
      </Collapse>
    </div>
  );
};

export default Main;
