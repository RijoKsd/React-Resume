import DisplaySection from "../../DisplaySection/DisplaySection";
import ExperienceInfo from "../ExperienceInfo/ExperienceInfo";

 

const ExperienceInfoSection = ({experiences}) => {
  return (
    <div className="experience-info-section resume-section">
      <DisplaySection
        array={experiences}
        InfoComponent={ExperienceInfo}
        title="Professional Experience"
      />
    </div>
  );
}

export default ExperienceInfoSection
