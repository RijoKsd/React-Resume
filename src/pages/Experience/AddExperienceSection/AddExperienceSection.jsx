import "../../../styles/Section.css";
import ExpandSection from "../../ExpandSection/ExpandSection";
import CreateForm from "../../CreateForm/CreateForm";
import DisplayForm from "../../DisplayForm/DisplayForm";
import ExperienceForm from "../ExperienceForm/ExperienceForm";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const AddExperienceSection = ({
  isOpen,
  createForm,
  setOpen,
  experiences,
  onChange,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
}) => {
  return (
    <div className="add-experience-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Experience"
        iconName={faBriefcase}
      />
      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForm
          forms={experiences}
          onChange={onChange}
          onCancel={onCancel}
          toggleCollapsed={toggleCollapsed}
          onHide={onHide}
          onRemove={onRemove}
          FormComponent={ExperienceForm}
          titleKey="companyName"
          arrayName="experiences"
        />

        <CreateForm onClick={createForm} buttonText="Experience" />
      </div>
    </div>
  );
};

export default AddExperienceSection;
