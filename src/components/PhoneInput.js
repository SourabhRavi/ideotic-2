import React from "react";
import styled from "styled-components";
import { MuiTelInput } from "mui-tel-input";

const MuiTelInputStyled = styled(MuiTelInput)`
  & fieldset {
    border-radius: 30px;
  }
  ,
  & .Mui-focused fieldset {
    border-color: #5b3cd6 !important;
    border-width: 1px !important;
  }
`;

const PhoneInput = ({ updateFields, phone, phoneError }) => {
  const [phoneValue, setPhoneValue] = React.useState("+911234567890");

  const handleChange = (newPhone) => {
    setPhoneValue(newPhone);
    updateFields({ phone: newPhone.split(" ").join("") });
  };

  return (
    <MuiTelInputStyled
      fullWidth
      onlyCountries={["IN", "US"]}
      value={phoneValue}
      onChange={handleChange}
      error={phoneError ? true : false}
      helperText={phoneError ? phoneError : null}
    />
  );
};

export default PhoneInput;
