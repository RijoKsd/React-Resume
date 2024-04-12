import './CollapsedForm.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function CollapsedForm(props) {
  const { onClick, hideForm, title, arrayName } = props;
  const { isHidden, id } = props.form;
  return (
    <button
      className="collapsed-form section-form"
      id={id}
      onClick={onClick}
      data-array-name={arrayName}
    >
      <p className="collapsed-form-title">{title}</p>
  

        <FontAwesomeIcon icon = {isHidden ? faEyeSlash : faEye} className="eye" onClick={(e) => {
            e.stopPropagation();
            hideForm(e);
            }
        } />

    </button>
  );
}

export default CollapsedForm;
