import "./TemplateLoader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload,faTrash,faDatabase } from "@fortawesome/free-solid-svg-icons";

function TemplateLoader() {
  return (
    <div className="template-loader">
      <button>
        <FontAwesomeIcon icon={faDownload} /> Download as PDF
      </button>
      <button className="clear-resume">
        <FontAwesomeIcon icon= {faTrash}/>
        Clear Resume
      </button>

      <button className="load-example">
        {" "}
        <FontAwesomeIcon icon= {faDatabase} />
        Load Example
      </button>
    </div>
  );
}

export default TemplateLoader;
