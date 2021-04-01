import { faClipboard, faTrashAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
  return (
    <div id="main-container">
      <div className="edit collapseEditor collapse show">
        <div className="edit-header">
          <h2 className="edit-title text">editor</h2>
          <div className="edit-button-group">
            <button className="text">
              <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>
            </button>
            <button className="text">
              <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
            <button
              className="btn btn-primary text"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".collapsePreview"
              aria-expanded="true"
              aria-controls="collapsePreview"
            >
              <FontAwesomeIcon icon={faExpandAlt}></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <div className="edit-body"></div>
      </div>
      <div className="column collapseEditor collapsePreview collapse show"></div>
      <div className="preview collapse show collapsePreview">
        <div className="preview-header">
          <h2 className="preview-title text">previewer</h2>
          <button
            className="btn btn-primary text"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".collapseEditor"
            aria-expanded="true"
            aria-controls="collapseEditor"
          >
            <FontAwesomeIcon icon={faExpandAlt}></FontAwesomeIcon>
          </button>
        </div>
        <div className="preview-body"></div>
      </div>
    </div>
  );
};

export default Main;
