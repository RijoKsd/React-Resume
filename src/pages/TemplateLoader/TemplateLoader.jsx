import "./TemplateLoader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faTrash,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

function TemplateLoader({ onTemplateLoad, onClear }) {
  return (
    <div className="template-loader">
      <button>
        <FontAwesomeIcon icon={faDownload} /> Download as PDF
      </button>
      <button className="clear-resume" onClick={onClear}>
        <FontAwesomeIcon icon={faTrash} />
        Clear Resume
      </button>

      <button className="load-example" onClick={onTemplateLoad}>
        {" "}
        <FontAwesomeIcon icon={faDatabase} />
        Load Example
      </button>
    </div>
  );
}

export default TemplateLoader;
