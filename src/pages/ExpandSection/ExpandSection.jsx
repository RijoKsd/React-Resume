import "./ExpandSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ExpandSection = ({ isOpen, setOpen, sectionName, iconName }) => {
  return (
    <button
      className="expand-section"
      onClick={() => setOpen(isOpen ? "" : sectionName)}
    >
      <h2 className="expand-section-header">
        <FontAwesomeIcon icon={iconName} />
        {sectionName}
      </h2>
      {/* <FontAwesomeIcon
        icon={faChevronUp}
        className={`${isOpen ? "open" : ""}`}
      /> */}
      <FontAwesomeIcon
        icon={faChevronDown}
        className={`chevron ${isOpen ? "open" : ""}`}
      />
    </button>
  );
};

export default ExpandSection;
