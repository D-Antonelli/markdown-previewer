import {faExpandAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Resize = ({ onClick, ariaExpanded, ariaControls }) => {
  return (
    <button
      onClick={onClick}
      className="header-btn textTheme"
      type="button"
      aria-expanded={ariaExpanded}
      data-toggle="tooltip"
      aria-controls={ariaControls}
      title="Resize"
    >
      <FontAwesomeIcon icon={faExpandAlt}></FontAwesomeIcon>
    </button>
  );
};

export default Resize;
