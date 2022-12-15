import { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@mui/styles";
import Checkbox from "@mui/material/Checkbox";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";

const useStyles = makeStyles({
  root: {
    width: "100%",
    "& label": {
      color: "#D2D2E0",
      top: "5px",
      left: "10px",
      background: "#fff",
      paddingRight: "10px",
      "&.Mui-focused": {
        color: "#5B3CD6",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "30px",
      },
      "& .MuiSelect-select": {
        padding: "20px 30px",
      },
      "& svg": {
        right: "27px",
      },
      "& input": {
        padding: "20px 30px",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #5B3CD6",
      },
    },
  },
});

function FormTwo({
  password,
  repeatPassword,
  reference,
  acceptTermsAndCondition,
  rejectOffers,
  updateFields,
  passwordError,
  repeatPasswordError,
}) {
  const classes = useStyles();
  const [terms, setTerms] = useState(true);
  const [offers, setOffers] = useState(false);
  const handleTerms = () => {
    setTerms(!terms);
    updateFields({ acceptTermsAndCondition: !terms });
  };

  const handleOffers = () => {
    setOffers(!offers);
    updateFields({ rejectOffers: !offers });
  };

  return (
    <>
      <div className="heading-wrap">
        <h1 className="form-heading">Set a password</h1>
        <p className="description">Finish Registration to see tutors</p>
      </div>
      <div className="input-group mb-2">
        <TextField
          autoFocus
          sx={{
            "& label": {
              "&.Mui-focused": {
                color: "#5B3CD6",
              },
            },
          }}
          label="Enter password"
          variant="outlined"
          type="text"
          className={classes.root}
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
          error={passwordError ? true : false}
          helperText={passwordError ? passwordError : null}
        />
      </div>
      <div className="input-group mb-2">
        <TextField
          sx={{
            "& label": {
              "&.Mui-focused": {
                color: "#5B3CD6",
              },
            },
          }}
          label="Repeat Password"
          variant="outlined"
          type="text"
          className={classes.root}
          value={repeatPassword}
          onChange={(e) => updateFields({ repeatPassword: e.target.value })}
          error={repeatPasswordError ? true : false}
          helperText={repeatPasswordError ? repeatPasswordError : null}
        />
      </div>
      <div className="form-check mb-3">
        <FormControl fullWidth className={classes.root}>
          <InputLabel id="demo-simple-select-label">
            How did you hear about us?
          </InputLabel>
          <Select
            value={reference}
            label="How did you hear about us?"
            onChange={(e) => updateFields({ reference: e.target.value })}
          >
            <MenuItem value="linkedin">LinkedIn</MenuItem>
            <MenuItem value="colleague">Colleague</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="form-check">
        <Checkbox
          id="terms"
          checked={terms}
          icon={<CircleUnchecked />}
          checkedIcon={<CircleCheckedFilled />}
          onClick={handleTerms}
          value={terms}
          inputProps={{ "aria-label": "controlled" }}
          sx={{
            "&.Mui-checked": {
              color: "#5B3CD6",
            },
          }}
        />
        <label className="description" htmlFor="terms">
          I Agree to <span>terms & conditions</span> and{" "}
          <span>privacy policy</span>
        </label>
      </div>
      <div className="form-check mb-3">
        <Checkbox
          id="offers"
          checked={offers}
          icon={<CircleUnchecked />}
          checkedIcon={<CircleCheckedFilled />}
          onClick={handleOffers}
          value={offers}
          inputProps={{ "aria-label": "controlled" }}
          sx={{
            "&.Mui-checked": {
              color: "#5B3CD6",
            },
          }}
        />
        <label className="description" htmlFor="offers">
          I don't want to receive special offers
        </label>
      </div>
    </>
  );
}

export default FormTwo;
