import "./PersonalDetails.css";

import InputGroup from "../InputGroup/InputGroup";

function PersonalDetails({ onChange, email, fullName, phoneNumber, address }) {
  return (
    <form className="personal-details">
      <h2>Personal Details</h2>
      <InputGroup
        type="text"
        id="full-name"
        labelText="Full Name"
        placeholder="Full Name"
        data-key="fullName"
        onChange={onChange}
        value={fullName}
      />
      <InputGroup
        type="email"
        id="email"
        labelText="Email"
        placeholder="Enter email"
        data-key="email"
        onChange={onChange}
        recommended
        value={email}
      />
      <InputGroup
        type="tel"
        id="phone-number"
        labelText="Phone number"
        placeholder="Enter phone number"
        data-key="phoneNumber"
        onChange={onChange}
        recommended
        value={phoneNumber}
      />
      <InputGroup
        type="text"
        id="address"
        labelText="Address"
        data-key="address"
        onChange={onChange}
        value={address}
        recommended 
        placeholder="City,Country"
      />
    </form>
  );
}

export default PersonalDetails;
