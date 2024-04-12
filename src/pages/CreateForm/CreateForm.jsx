import "./CreateForm.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CreateForm = ({ onClick, buttonText }) => {
  return (
    <button className="create-form" onClick={onClick}>
      <h4 className="button-content">
        <FontAwesomeIcon icon={faPlus} />
        {buttonText}
      </h4>
    </button>
  );
};

export default CreateForm;
