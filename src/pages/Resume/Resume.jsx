import PersonalInfoSection from "../PersonalInfoSection/PersonalInfoSection";
import './resume.css'

const Resume = ({ personalInfo }) => {
  return (
    <div className="resume-container">
      <div className="resume">
        <PersonalInfoSection
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
        />
      </div>
    </div>
  );
};

export default Resume;
