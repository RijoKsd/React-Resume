import PersonalInfoSection from "../personal-info/PersonalInfoSection/PersonalInfoSection";

import EducationInfoSection from "../Education/EducationInfoSection/EducationInfoSection"
import './resume.css'

const Resume = ({ personalInfo,sections }) => {
  return (
    <div className="resume-container">
      <div className="resume">
        <PersonalInfoSection
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
        />
        <div>
          <EducationInfoSection educations={sections.educations} />
          {/* <ExperienceInfoSection experiences={sections.experiences} /> */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
