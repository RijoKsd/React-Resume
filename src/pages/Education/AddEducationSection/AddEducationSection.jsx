import ExpandSection from "../../ExpandSection/ExpandSection";
import "../../../styles/Section.css";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import EducationForm from "../EducationForm/EducationForm";
import DisplayForm from "../../DisplayForm/DisplayForm";
import CreateForm from "../../CreateForm/CreateForm";

const AddEducationSection = ({
  educations,
  isOpen,
  onChange,
  createForm,
  setOpen,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
}) => {
  return (
    <div className="add-education-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Education"
        iconName={faGraduationCap}
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForm
          forms={educations}
          FormComponent={EducationForm}
          onChange={onChange}
          onCancel={onCancel}
          onHide={onHide}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          titleKey="schoolName"
          arrayName="educations"
        />
        <CreateForm onClick={createForm} buttonText="Education" />
      </div>
    </div>
  );
};

export default AddEducationSection;
