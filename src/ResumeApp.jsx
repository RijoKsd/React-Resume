import { useState } from "react";

// components
import TemplateLoader from "./pages/TemplateLoader/TemplateLoader";
import PersonalDetails from "./pages/PersonalDetails/PersonalDetails";
import exampleData from "./exampleData";
import Resume from "./pages/Resume/Resume";

// css files
import "./ResumeApp.css";

function ResumeApp() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  return (
    <div className="app">
      <div className="edit-side">
        <div className="form-container">
          <TemplateLoader />
          <>
            <PersonalDetails
              onChange={handlePersonalInfoChange}
              fullName={personalInfo.fullName}
              email={personalInfo.email}
              phoneNumber={personalInfo.phoneNumber}
              address={personalInfo.address}
            />
          </>
        </div>
      </div>
      <Resume personalInfo={personalInfo} sections={sections} />
    </div>
  );
}
export default ResumeApp;
