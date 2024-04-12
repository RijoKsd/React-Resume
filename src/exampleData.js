import { v4 as uuid } from "uuid";
import './exampleData.css'

const exampleData = {
  personalInfo: {
    fullName: "Rijo Sebastian",
    email: "rijo@gmail.com",
    phoneNumber: "+91 1234567890",
    address: "Kerala, India",
  },

  sections: {
    educations: [
      {
        degree: "Bachelors in Computer Science",
        schoolName: "xyz university",
        location: "Kerala",
        startDate: "08/2020-present",
        isCollapsed: true,
        isHidden: false,
        id: uuid(),
      },
      {
        degree: "Master's Degree in Computer Science",
        schoolName: "Hidden University",
        location: "Kerala, India",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: true,
        id: uuid(),
      },
    ],
    experiences: [
      {
        companyName: "ABC Office",
        positionTitle: "MERN Stack Developer",
        location: "Bangalore, India",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metusDonec scelerisque sollicitudin enim eu venenatis.",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uuid(),
      },
      {
        companyName: "ABC Office",
        positionTitle: "MERN Stack Developer",
        location: "Bangalore, India",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metusDonec scelerisque sollicitudin enim eu venenatis.",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: true,
        id: uuid(),
      },
    ],
  },
};

export default exampleData;
