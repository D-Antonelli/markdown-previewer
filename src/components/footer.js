import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/D-Antonelli/markdown-previewer"
      target="_blank"
      rel="noreferrer">
        <FontAwesomeIcon
          icon={faGithub}
          className="footer-icon"
        ></FontAwesomeIcon>
      </a>
    </footer>
  );
};

export default Footer;
