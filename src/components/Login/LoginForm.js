import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/use-input";
import classes from "../Login/LoginForm.module.css";

const LoginForm = (props) => {
  const {
    value: enteredUsername,
    isValid: enteredUsernameIsValid,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsernameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "" && value.trim().length > 7);

  const navigate = useNavigate();

  let formIsValid = false;
  if (enteredUsernameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;
    props.onLogin(enteredUsername, enteredPassword);
    resetUsernameInput();
    resetPasswordInput();
    navigate("/");
  };

  const usernameInputClass = usernameInputHasError
    ? `form-control ${classes.invalidInput}`
    : "form-control";
  const passwordInputClass = passwordInputHasError
    ? `form-control ${classes.invalidInput}`
    : "form-control";

  return (
    <div className={classes.loginBackground}>
      <form className={classes.form} onSubmit={formSubmissionHandler}>
        <div className="mb-5">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="username"
            className={usernameInputClass}
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
          />
          {usernameInputHasError && (
            <p className={classes.errorLabel}>Username must not be empty!</p>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={passwordInputClass}
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordInputHasError && (
            <p className={classes.errorLabel}>
              Password Must not less than 8 or empty!
            </p>
          )}
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="isLoggedIn" />
          <label className="form-check-label" htmlFor="isLoggedIn">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          disabled={!formIsValid}
          className={`btn ${classes.button}`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
