import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import PhoneInput from "./PhoneInput";

const useStyles = makeStyles({
  root: {
    width: "100%",
    "& label": {
      color: "#D2D2E0",
      top: "5px",
      left: "10px",
      background: "#fff",
      paddingRight: "10px",
      fontSize: "16px",
      "&.Mui-focused": {
        color: "#5B3CD6",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "30px",
      },
      "& input": {
        padding: "20px 30px",
        fontSize: "16px",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #5B3CD6",
      },
    },
  },
});

function FormOne({
  firstName,
  lastName,
  email,
  phone,
  updateFields,
  firstNameError,
  lastNameError,
  emailError,
  phoneError,
}) {
  const classes = useStyles();
  return (
    <>
      <div className="heading-wrap">
        <h1 className="form-heading">Registration</h1>
        <p className="description">Leave your contact details</p>
      </div>
      <div className="input-group mb-2 one">
        <div className="first-name">
          <TextField
            autoFocus
            label="First/Last Name"
            variant="outlined"
            type="text"
            className={classes.root}
            value={firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
            error={firstNameError ? true : false}
            helperText={firstNameError ? firstNameError : null}
          />
        </div>
        <div className="first-name">
          <TextField
            label="Last Name"
            variant="outlined"
            type="text"
            className={classes.root}
            value={lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
            error={lastNameError ? true : false}
            helperText={lastNameError ? lastNameError : null}
          />
        </div>
      </div>
      <div className="input-group mb-2">
        <TextField
          label="Your Email address"
          variant="outlined"
          type="text"
          className={classes.root}
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          error={emailError ? true : false}
          helperText={emailError ? emailError : null}
        />
      </div>

      <div className="input-group mb-3">
        <PhoneInput
          updateFields={updateFields}
          phone={phone}
          phoneError={phoneError}
        />
      </div>
    </>
  );
}

export default FormOne;
