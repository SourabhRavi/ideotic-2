import { useEffect, useState } from "react";
import useMultiStepForm from "./components/useMultiStepForm";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import ModalBox from "./components/ModalBox";
import "./App.css";

const INITIAL_DATA = {
  email: "",
  password: "",
  repeatPassword: "",
  firstName: "",
  lastName: "",
  phone: "",
  reference: "",
  acceptTermsAndCondition: "true",
  rejectOffers: "false",
};

const Home = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [passMatch, setPassMatch] = useState(false);
  const [dataOk, setDataOk] = useState(false);

  const updateFields = (fields) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const { step, isLastStep, next, goTo } = useMultiStepForm([
    <FormOne {...data} {...errors} updateFields={updateFields} />,
    <FormTwo {...data} {...errors} updateFields={updateFields} />,
  ]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (values.firstName === "") {
      errors["firstNameError"] = "First Name required";
    }
    if (values.lastName === "") {
      errors["lastNameError"] = "Last Name required";
    }
    if (values.email === "") {
      errors["emailError"] = "Email required";
    }
    if (!emailRegex.test(values.email) && values.email !== "") {
      errors["emailError"] = "Invalid Email format";
    }
    if (
      values.phone === "" ||
      values.phone === "+911234567890" ||
      values.phone === "+91" ||
      values.phone === "+1"
    ) {
      errors["phoneError"] = "Phone number required";
    }
    if (values.refernce === "" && isLastStep) {
      errors["refernceError"] = "refernce required";
    }
    if (values.password === "" && isLastStep) {
      errors["passwordError"] = "Password required";
    }
    if (
      !matchPassword(values) &&
      values.repeatPasswordError !== "" &&
      isLastStep
    ) {
      errors["repeatPasswordError"] = "Password doesn't match";
    }
    return errors;
  };

  const matchPassword = (values) => {
    if (values.password === values.repeatPassword) {
      setPassMatch(true);
      return true;
    } else {
      setPassMatch(false);
      return false;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(data));
    setIsSubmit(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmit && !isLastStep) {
        next();
      }

      if (
        Object.keys(errors).length === 0 &&
        isSubmit &&
        isLastStep &&
        passMatch
      ) {
        setDataOk(true);
      } else {
        setDataOk(false);
      }
    },
    // eslint-disable-next-line
    [errors]
  );

  return (
    <main>
      <div className="container main-content">
        <form onSubmit={onSubmit}>
          {step}
          <button id="submit-btn" variant="primary" type="submit">
            {isLastStep ? "Register" : "Next"}
          </button>
          {dataOk && (
            <ModalBox
              isOpen="center"
              goTo={goTo}
              setIsSubmit={setIsSubmit}
              setData={setData}
              initialData={INITIAL_DATA}
            />
          )}
        </form>
      </div>
    </main>
  );
};

export default Home;
