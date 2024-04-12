import { useState } from "react";
// css files
import "./ResumeApp.css";
// components
import PersonalDetails from "./pages/personal-info/PersonalDetails/PersonalDetails";
import AddEducationSection from "./pages/Education/AddEducationSection/AddEducationSection";
import Resume from "./pages/Resume/Resume";
import TemplateLoader from "./pages/TemplateLoader/TemplateLoader";
import exampleData from "./exampleData";

// uuid
import { v4 as uuid } from "uuid";

function ResumeApp() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  const [sectionOpen, setSectionOpen] = useState(null);
  const [prevState, setPrevState] = useState(null);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleSectionChange(e) {
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    const form = e.target.closest(".section-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((obj) => {
        if (obj.id === id) obj[key] = inputValue;
        return obj;
      }),
    });
  }

  function createForm(arrayName, object) {
    setPrevState(null);
    // Clone array to not push object to original
    const section = structuredClone(sections[arrayName]);
    section.push(object);
    setSections({ ...sections, [arrayName]: section });
  }

  const createEducationForm = () =>
    createForm("educations", {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uuid(),
    });

  const setOpen = (sectionName) => setSectionOpen(sectionName);

  function removeForm(e) {
    const form = e.target.closest(".section-form");
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    const { id } = form;

    setSections({
      ...sections,
      [arrayName]: section.filter((item) => item.id !== id),
    });
  }
  function cancelForm(e) {
    // if no prevState found remove form
    if (prevState == null) {
      removeForm(e);
      return;
    }

    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          // Revert back to previous state
          form = prevState;
          form.isCollapsed = true;
        }

        return form;
      }),
    });
  }

  function toggleValue(e, key) {
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          setPrevState(Object.assign({}, form));
          form[key] = !form[key];
        }

        return form;
      }),
    });
  }

  const toggleCollapsed = (e) => toggleValue(e, "isCollapsed");
  const toggleHidden = (e) => toggleValue(e, "isHidden");
  return (
    <div className="app">
      <div className="edit-side">
        <div className="form-container">
          <TemplateLoader
            onTemplateLoad={() => {
              setPersonalInfo(exampleData.personalInfo);
              setSections(exampleData.sections);
            }}
            onClear={() => {
              setPersonalInfo({
                fullName: "",
                email: "",
                phoneNumber: "",
                address: "",
              });
              setSections({ educations: [], experiences: [] });
              setPrevState(null);
            }}
          />
          <>
            <PersonalDetails
              onChange={handlePersonalInfoChange}
              fullName={personalInfo.fullName}
              email={personalInfo.email}
              phoneNumber={personalInfo.phoneNumber}
              address={personalInfo.address}
            />
            <AddEducationSection
              educations={sections.educations}
              isOpen={sectionOpen === "Education"}
              onChange={handleSectionChange}
              createForm={createEducationForm}
              setOpen={setOpen}
              onCancel={cancelForm}
              toggleCollapsed={toggleCollapsed}
              onHide={toggleHidden}
              onRemove={removeForm}
            />
          </>
        </div>
      </div>
      <Resume personalInfo={personalInfo} sections={sections} />
    </div>
  );
}
export default ResumeApp;
